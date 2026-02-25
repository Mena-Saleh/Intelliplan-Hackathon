import os
import json
from openai import OpenAI
from dotenv import load_dotenv
from datetime import datetime

from sympy import content
from intelliplanApi.models.domain import RiskAssessment

load_dotenv()

class LLMService:

    def __init__(self):
        self.client = OpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=os.getenv("OPENROUTER_API_KEY"),

        )

    def extract_fields(self, user_message: str, current_state: dict, last_question: str | None):
        system_prompt = f"""
You extract structured staffing data.

Extract any of these fields if present:

- date (YYYY-MM-DD) [current date is {datetime.now()} use it to infer relative dates like tomorrow or default to current year if not specified]
- start_time (HH:MM 24h)
- end_time (HH:MM 24h)
- department [OPTIONAL]
- urgency_level (low, medium, high) [OPTIONAL]
- required_competences (array of strings)

Rules:
- Only return JSON.
- Only include fields you are confident about.
- If nothing found, return {{}}.
- Never ask questions.
"""
        context_block = f"""
Current collected staffing data:
{json.dumps(current_state, indent=2)}

Last question asked to the user:
{last_question if last_question else "None"}

User message:
{user_message}
"""

        response = self.client.chat.completions.create(
            model="openai/gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": context_block},
            ],
            temperature=0,
        )

        content = response.choices[0].message.content.strip()

        try:
            return json.loads(content)
        except:
            return {}
    
    def rerank_consultants(
        self,
        staffing_need,
        consultants: list,
        top_k: int = 5
    ):

        consultants_payload = [
            {
                "id": c.id,
                "competences": c.competences,
                "customer_experience": c.customer_experience,
                "rating": c.rating
            }
            for c in consultants
        ]

        staffing_payload = {
            "required_competences": staffing_need.required_competences,
            "department": staffing_need.department,
            "urgency_level": staffing_need.urgency_level
        }

        system_prompt = """
    You are a strict staffing evaluation system.

    Your job:
    - Rank consultants by best match to the staffing need.
    - Evaluate risk level.

    Risk Model:

    LOW:
    ✔ Has competences
    ✔ Has relevant customer experience

    MEDIUM:
    ✔ Has competences
    ✖ No relevant customer experience

    HIGH:
    ✖ Missing required competence

    Rules:
    - Rank by strongest competence alignment first.
    - Customer experience strengthens ranking.
    - Be conservative.
    - ONLY return valid JSON.
    - Do NOT include markdown.
    - Return EXACTLY top_k consultants.

    Return format:

    {
      "ranked_consultants": [
        {
          "id": "C1",
          "risk_level": "LOW | MEDIUM | HIGH",
          "reason": "short explanation"
        }
      ]
    }
    """

        user_prompt = f"""
    Staffing need:
    {json.dumps(staffing_payload, indent=2)}

    Consultants:
    {json.dumps(consultants_payload, indent=2)}

    Return top {top_k}.
    """

        response = self.client.chat.completions.create(
            model="openai/gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            temperature=0
        )

        content = response.choices[0].message.content.strip()

        if content.startswith("```"):
            content = content.replace("```json", "")
            content = content.replace("```", "")
            content = content.strip()

        try:
            parsed = json.loads(content)
        except Exception as e:
            print("JSON PARSE ERROR:", e)
            return []

        ranked_items = parsed.get("ranked_consultants", [])

        if not ranked_items:
            return []

        valid_ids = {c.id for c in consultants}

        final_results = []

        for item in ranked_items:

            consultant_id = item.get("id")

            if consultant_id not in valid_ids:
                continue 

            consultant_obj = next(
                (c for c in consultants if c.id == consultant_id),
                None
            )

            if not consultant_obj:
                continue

            risk = RiskAssessment(
                level=item.get("risk_level", "MEDIUM"),
                reason=item.get("reason", "")
            )

            final_results.append({
                "id": consultant_obj.id,
                "rating": consultant_obj.rating,
                "risk_level": risk.level,
                "risk_reason": risk.reason,
                "consultant": consultant_obj.model_dump()
            })

        return final_results[:top_k]

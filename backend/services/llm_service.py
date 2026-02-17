import os
import json
from openai import OpenAI
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

class LLMService:

    def __init__(self):
        self.client = OpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=os.getenv("OPENROUTER_API_KEY"),
        )

        self.system_prompt = f"""
You extract structured staffing data.

Extract any of these fields if present:

- date (YYYY-MM-DD) [Default to current year {datetime.now().year} if only month and day are provided]
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

    def extract_fields(self, user_message: str, current_state: dict, last_question: str | None):

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
                {"role": "system", "content": self.system_prompt},
                {"role": "user", "content": context_block},
            ],
            temperature=0,
        )

        content = response.choices[0].message.content.strip()

        try:
            return json.loads(content)
        except:
            return {}


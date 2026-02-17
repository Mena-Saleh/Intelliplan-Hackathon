import uuid

REQUIRED_FIELDS = [
    "date",
    "start_time",
    "end_time",
    "required_competences",
]

class SessionService:

    def __init__(self):
        self.sessions = {}

    def create_session(self):
        session_id = str(uuid.uuid4())
        self.sessions[session_id] = {
        "data": {
            "date": None,
            "start_time": None,
            "end_time": None,
            "department": None,
            "urgency_level": None,
            "required_competences": None,
        },
        "last_question": None
}

        return session_id

    def get_session(self, session_id):
        return self.sessions.get(session_id)

    def update_session(self, session_id, extracted_fields):
        session = self.sessions[session_id]["data"]
        for key, value in extracted_fields.items():
            if key in session and value:
                session[key] = value

    def missing_fields(self, session_id):
        session = self.sessions[session_id]["data"]
        return [f for f in REQUIRED_FIELDS if not session.get(f)]

    def is_complete(self, session_id):
        return len(self.missing_fields(session_id)) == 0


import { Chat } from "../models/Chat";


// Omitting id and time of creation since it is set when the object is created in page
export const MOCK_CHAT_DATA: Omit<Chat, 'id' | 'createdAt'> = {
    title: "New staffing request",
    messages: [
        {
            role: "bot",
            type: "text",
            content:
                "Hi Johan! I'm your staffing assistant. Tell me about your staffing need — describe the situation and I’ll find the best available consultants for you.",
        },
        {
            role: "user",
            type: "text",
            content:
                "We have a sudden spike tomorrow morning. I need 3 forklift drivers from 06:00–14:00 at the inbound warehouse.",
        },
        {
            role: "bot",
            type: "text",
            content:
                "Got it. Let me check availability, competences and prior experience with Warehouse AB.",
        },
        {
            role: "bot",
            type: "match",
            candidates: [
                {
                    name: "Erik Svensson",
                    notes: [
                        "Forklift certified",
                        "Available 06:00–14:00",
                        "Worked at Warehouse AB before",
                    ],
                    risk: "LOW",
                },
                {
                    name: "Ahmed Hassan",
                    notes: [
                        "Forklift certified",
                        "Available",
                        "No prior experience with this customer",
                    ],
                    risk: "MEDIUM",
                },
                {
                    name: "Lukas Berg",
                    notes: [
                        "Available",
                        "Missing forklift certification",
                    ],
                    risk: "HIGH",
                },
            ],
        },
        {
            role: "user",
            type: "text",
            content: "Let’s request Erik and Ahmed.",
        },
        {
            role: "bot",
            type: "text",
            content:
                "Request created. Delivery Manager will approve and confirm booking shortly.\n\nYou’ll be notified once the shift is confirmed.",
        },
    ],
}
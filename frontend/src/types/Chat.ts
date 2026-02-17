export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

export type Message =
    | {
        role: "bot" | "user";
        type: "text";
        content: string;
    }
    | {
        role: "bot";
        type: "match";
        candidates: {
            name: string;
            notes: string[];
            risk: RiskLevel;
        }[];
    };

export type Chat = {
    id: string;
    title: string;
    createdAt: Date;
    messages: Message[];
};
export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

export type MatchCandidate = {
    id: string;
    name: string;
    rating?: number | null;
    risk: RiskLevel;
    riskReason: string;
    competences: string[];
    customerExperience: string[];
};

export type Message =
    | {
        role: "bot" | "user";
        type: "text";
        content: string;
    }
    | {
        role: "bot";
        type: "loading";
        content: string;
    }
    | {
        role: "bot";
        type: "match";
        candidates: MatchCandidate[];
    };

export type Chat = {
    id: string;
    title: string;
    createdAt: Date;
    messages: Message[];
    sessionId?: string;
};

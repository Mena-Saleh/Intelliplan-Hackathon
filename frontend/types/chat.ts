export type TRiskLevel = "LOW" | "MEDIUM" | "HIGH";

export type TMatchCandidate = {
    id: string;
    name: string;
    rating?: number | null;
    risk: TRiskLevel;
    riskReason: string;
    competences: string[];
    customerExperience: string[];
};

export type TMessage =
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
        candidates: TMatchCandidate[];
    };

export type TChat = {
    id: string;
    title: string;
    createdAt: Date;
    messages: TMessage[];
    sessionId?: string;
};

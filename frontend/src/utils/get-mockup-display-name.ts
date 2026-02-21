const MOCKUP_NAMES = [
    "Erik Svensson",
    "Ahmed Hassan",
    "Lukas Berg",
    "Sofia Lindström",
    "Maria Andersson",
    "Jonas Nilsson",
    "David Holm",
    "Fatima Ali",
    "Sara Johansson",
    "Daniel Ekström",
];

export const getMockupDisplayName = (id: string) => {
    const index = Math.abs(
        id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    ) % MOCKUP_NAMES.length;

    return MOCKUP_NAMES[index];
};

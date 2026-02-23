import { TCustomer } from '../types/index';

export const customers: TCustomer[] = [
    {
        id: 1,
        name: "Johan Andersson",
        role: "Warehouse AB",
        department: {
            competences: ["logistics", "customer relations"],
            preferredConsultants: ["Hanna", "Kevin"],
        },
    },
    {
        id: 2,
        name: "Anna Petersson",
        role: "Logistics Now AB",
        department: {
            competences: ["truck drivers licence", "high delivery speed"],
            preferredConsultants: ["Johan", "Hanna"],
        },
    },
    {
        id: 3,
        name: "Leon Falkenberg",
        role: "Fast Delivery AB",
        department: {
            competences: ["high packing speed", "bilangual (swedish and english)"],
            preferredConsultants: ["Peter", "Eva"],
        },
    },
    {
        id: 4,
        name: "Klara Vindter",
        role: "Get Well AB",
        department: {
            competences: ["master degree", "work experience", "licence"],
            preferredConsultants: ["Lars"],
        },
    },
    {
        id: 5,
        name: "Larry Henriksson",
        role: "Get Well AB",
        department: {
            competences: ["master degree", "work experience", "licence"],
            preferredConsultants: ["Hanna"],
        },
    },
    {
        id: 6,
        name: "Steve Henriksson",
        role: "Faster Development AB",
        department: {
            competences: ["bachelor degree", "work experience", "portfolio"],
            preferredConsultants: ["Hanna", "Lars"],
        },
    },
    {
        id: 7,
        name: "Melody Hawkins",
        role: "Skyhigh AB",
        department: {
            competences: ["logistics", "inventory", "accounting"],
            preferredConsultants: ["Nils"],
        },
    },
    {
        id: 8,
        name: "Benneth Pearsson",
        role: "Better AB",
        department: {
            competences: ["logistics", "delivery speed"],
            preferredConsultants: ["Sarah"],
        },
    },
    {
        id: 9,
        name: "Ola Bengtsson",
        role: "Customized Delivery AB",
        department: {
            competences: ["logistics", "delivery speed", "packing speed"],
            preferredConsultants: ["Kerstin", "Bernard"],
        },
    },
    {
        id: 10,
        name: "Yngva Dottir",
        role: "Early Bird AB",
        department: {
            competences: ["inventory", "accounting", "managing", "bachelor degree", "work experience"],
            preferredConsultants: ["Harry"],
        },
    },

]

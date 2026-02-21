import { Clock, LayoutDashboard, MessageSquare } from "lucide-react";

export const navConfig = {
    manager: [
        { name: "Dashboard", href: "/manager/dashboard", icon: LayoutDashboard },
    ],
    consultant: [
        {
            name: "Dashboard",
            href: "/consultant/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Work History",
            href: "/consultant/work-history",
            icon: Clock,
        },
    ],
    customer: [{ name: "My Requests", href: "/chat", icon: MessageSquare }],
};
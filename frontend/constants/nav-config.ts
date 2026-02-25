import { Clock, LayoutDashboard, MessageSquare } from "lucide-react";

export const navConfig = {
    manager: [
        { name: "Dashboard", href: "/manager", icon: LayoutDashboard },
    ],
    consultant: [
        {
            name: "Dashboard",
            href: "/consultant",
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
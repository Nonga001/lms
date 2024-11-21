"use client";

import { Compass, Layout } from "lucide-react";
import { SidebarItems } from "./sidebar-items";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
];

export const SidebarRoutes = () => {
    const routes = guestRoutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItems
                    key={route.href}
                    icon={route.icon} // Pass icon as React component
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};

"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItems = ({
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {
    const pathname = usePathname(); // Current path
    const router = useRouter(); // Navigation actions

    // Determine if this sidebar item is active
    const isActive = pathname === href;

    const onClick = () => {
        router.push(href); // Navigate to the target route
    };

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20"
            )}
        >
            {/* Sidebar Icon and Label */}
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={cn(
                        "text-slate-500",
                        isActive && "text-sky-700"
                    )}
                />
                {label}
            </div>

            {/* Active Indicator */}
            <div
                className={cn(
                    "ml-auto w-1 h-full transition-opacity bg-transparent",
                    isActive && "bg-sky-700"
                )}
            />
        </button>
    );
};

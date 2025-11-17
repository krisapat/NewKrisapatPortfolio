"use client"

import { SettingsIcon } from "@/components/ui/SettingsIcon"
import { menuLink } from "@/utils/links"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const MenuMobile = () => {
    const pathname = usePathname()

    return (
        <nav className="flex justify-between items-center px-2 py-1">
            {menuLink.map((item) => {
                const Icon = item.icon
                const isActive =
                    item.path === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.path)

                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={cn(
                            "flex flex-col items-center flex-1 py-1 transition-colors",
                            isActive
                                ? "text-primary font-semibold"
                                : "text-gray-700 dark:text-gray-200 hover:text-primary"
                        )}
                    >
                        <Icon size={22} />
                        <span className="text-[11px] mt-1">{item.name}</span>
                    </Link>
                )
            })}

            {/* Setting icon */}
            {(() => {
                const isActive = pathname.startsWith("/setting")
                return (
                    <Link
                        href="/setting"
                        className={cn(
                            "flex flex-col items-center flex-1 py-1 transition-colors",
                            isActive
                                ? "text-primary font-semibold"
                                : "text-gray-700 dark:text-gray-200 hover:text-primary"
                        )}
                    >
                        <SettingsIcon size={22} />
                        <span className="text-[11px] mt-1">Setting</span>
                    </Link>
                )
            })()}
        </nav>
    )
}

export default MenuMobile

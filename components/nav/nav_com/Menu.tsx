"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { menuLink } from "@/utils/links"


const Menu = () => {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-4">
      {menuLink
        .map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path)

          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "transition-colors duration-300 border-b-2 border-transparent hover:border-primary-foreground hover:text-primary-foreground",
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          )
        })}
    </nav>
  )
}

export default Menu

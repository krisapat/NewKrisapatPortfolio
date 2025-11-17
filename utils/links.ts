import { Home, Info, FolderKanban } from "lucide-react"
type NavLink = {
  name: string
  path: string
  icon: React.ComponentType<{ size?: number }>
}

export const menuLink: NavLink[] = [
  { path: "/", name: "Home", icon: Home },
  { path: "/project", name: "Project", icon: FolderKanban },
  { path: "/about", name: "About", icon: Info },
]
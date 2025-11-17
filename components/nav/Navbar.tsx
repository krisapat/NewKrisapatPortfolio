import Link from "next/link"
import Menu from "./nav_com/Menu"
import { Button } from "../ui/button"
import { SettingsIcon } from "../ui/SettingsIcon"
import MenuMoblie from "./nav_com/MenuMoblie"

const Navbar = async () => {
  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden sm:flex fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-black/80 border-b-2
        transition-transform duration-300"
      >
        <div className="w-full flex items-center justify-between px-4 h-15">
          {/* Logo */}
          <div className="flex space-x-4">
            <Link href="/" className="bg-linear-to-r from-[#00c950] to-[#00aaff] bg-clip-text text-transparent font-extrabold text-xl md:text-3xl">
              Krisapat
            </Link>
            <Menu />
          </div>
          <div className="flex space-x-2 ">
            <Link href={"/setting"}>
              <Button asChild variant="outline" className="p-2 overflow-hidden">
                <SettingsIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Moblie Menu */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-black/80 border-t backdrop-blur-md">
        <MenuMoblie />
      </div>
    </>
  )
}

export default Navbar

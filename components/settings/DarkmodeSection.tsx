"use client"

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Darkmode } from "../darkmode/darkmode"
import { SunMoon } from "lucide-react"

const DarkmodeSection = () => {
  return (
    <div className="group relative">
      <Card
        className="relative overflow-hidden backdrop-blur bg-white/70 dark:bg-gray-800/60 shadow-lg 
        transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,201,80,0.3)]"
      >
        {/* Gradient hover overlay */}
        <div
          className="absolute inset-0 bg-linear-to-r from-[#00c950]/20 to-[#00aaff]/20 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        <div className="relative z-10 space-y-6">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="bg-[#00c950]/10 p-3 rounded-xl">
              <SunMoon className="text-[#00c950]" size={20} />
            </div>
            <div>
              <CardTitle>Appearance</CardTitle>
              <p className="text-sm text-muted-foreground">
                Customize light and dark mode
              </p>
            </div>
          </CardHeader>

          <CardContent>
            <div className="pl-2">
              <Darkmode />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default DarkmodeSection

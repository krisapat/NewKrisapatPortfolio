"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import SignOutLinks from "./settingsComponents/SignOutLinks"

const LoginSection = () => {
  return (
    <div className="group relative">
      <Card
        className="relative overflow-hidden backdrop-blur bg-white/70 dark:bg-gray-800/60 shadow-lg 
        transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,201,80,0.3)]"
      >
        <div
          className="absolute inset-0 bg-linear-to-r from-[#00c950]/20 to-[#00aaff]/20 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
        <div className="relative z-10 space-y-6">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="bg-[#00c950]/10 p-3 rounded-xl">
              <LogIn className="text-[#00c950]" size={20} />
            </div>
            <div>
              <CardTitle>Authentication</CardTitle>
              <p className="text-sm text-muted-foreground">
                Login or create an account
              </p>
            </div>
          </CardHeader>

          <CardContent>
            <SignedOut>
              <div className="flex gap-2">
                <SignInButton mode="modal">
                  <Button
                    className="flex-1 bg-[#00c950] hover:bg-[#00b850] text-white font-medium
                    shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
                  >
                    Login
                  </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button
                    variant="outline"
                    className="flex-1 border border-[#00c950]/40 hover:border-[#00c950] 
                    transition-colors duration-300"
                  >
                    Register
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  You are logged in.
                </p>
                <SignOutLinks />
              </div>
            </SignedIn>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default LoginSection

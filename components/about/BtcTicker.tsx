'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { TrendingUp } from "lucide-react"
import { useBtcTicker } from "./hooks/useBtcTicker"

export default function BtcTicker() {
  const { price, qty, eventTime, connected, error } = useBtcTicker()

  const priceLabel =
    price == null
      ? null
      : Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2,
        }).format(price)

  return (
    <div className="group relative">
      <Card
        className="relative overflow-hidden backdrop-blur bg-white/70 dark:bg-gray-800/60 shadow-lg 
        transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,201,80,0.3)] rounded-xl"
      >
        {/* Hover Gradient Overlay */}
        <div
          className="absolute inset-0 bg-linear-to-r from-[#00c950]/20 to-[#00aaff]/20 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        <div className="relative z-10">
          {/* HEADER */}
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="bg-[#00c950]/10 p-3 rounded-xl">
              <TrendingUp className="text-[#00c950]" size={20} />
            </div>
            <div>
              <CardTitle className="text-lg">BTC / USDT</CardTitle>
              <p className="text-sm text-muted-foreground">Real-time price feed</p>
            </div>
          </CardHeader>

          {/* CONTENT */}
          <CardContent className="space-y-4">
            {/* Price */}
            {price == null ? (
              <div className="mt-2 space-y-3">
                <Skeleton className="h-8 w-40" />
                <Skeleton className="h-4 w-24" />
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {priceLabel}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {qty != null && <>Qty: {qty}</>}
                  {eventTime && (
                    <>
                      {" "}&bull;{" "}
                      {new Date(eventTime).toLocaleTimeString("en-US", { hour12: false })}
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Status */}
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center gap-2 text-xs font-medium ${
                  connected ? "text-green-600" : "text-gray-400"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    connected ? "bg-green-500 animate-pulse" : "bg-gray-500"
                  }`}
                />
                {connected ? "Live" : "Offline"}
              </div>

              {error && (
                <p className="text-xs text-red-500">
                  {error}
                </p>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

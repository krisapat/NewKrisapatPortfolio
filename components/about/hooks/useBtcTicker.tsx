'use client'

import { useEffect, useRef, useState } from 'react'

export type TickerState = {
  price: number | null
  qty?: number | null
  eventTime?: number | null
  connected: boolean
  error?: string | null
}

const WS_URL = 'wss://stream.binance.com:9443/ws/btcusdt@trade'

export function useBtcTicker() {
  const [state, setState] = useState<TickerState>({
    price: null,
    qty: null,
    eventTime: null,
    connected: false,
    error: null,
  })

  const wsRef = useRef<WebSocket | null>(null)
  const reconnectDelayRef = useRef<number>(500)
  const shouldReconnectRef = useRef<boolean>(true)
  const reconnectTimerRef = useRef<number | null>(null)

  useEffect(() => {
    shouldReconnectRef.current = true

    function connect() {
      if (wsRef.current) {
        try { wsRef.current.close() } catch {}
        wsRef.current = null
      }

      const ws = new WebSocket(WS_URL)
      wsRef.current = ws

      ws.onopen = () => {
        reconnectDelayRef.current = 500
        setState(prev => ({ ...prev, connected: true, error: null }))
      }

      ws.onmessage = (ev) => {
        try {
          const data = JSON.parse(ev.data)
          const price = typeof data.p === 'string' ? parseFloat(data.p) : null
          const qty = typeof data.q === 'string' ? parseFloat(data.q) : null
          const eventTime = typeof data.T === 'number' ? data.T : null
          if (price !== null) {
            setState(prev => ({ ...prev, price, qty, eventTime }))
          }
        } catch {}
      }

      ws.onerror = () => {
        setState(prev => ({ ...prev, error: 'WebSocket error' }))
        try { ws.close() } catch {}
      }

      ws.onclose = () => {
        wsRef.current = null
        setState(prev => ({ ...prev, connected: false }))
        if (shouldReconnectRef.current) scheduleReconnect()
      }
    }

    function scheduleReconnect() {
      if (reconnectTimerRef.current) return
      const delay = reconnectDelayRef.current
      reconnectTimerRef.current = window.setTimeout(() => {
        reconnectTimerRef.current = null
        reconnectDelayRef.current = Math.min(reconnectDelayRef.current * 1.5, 10_000)
        connect()
      }, delay)
    }

    connect()

    function handleVisibility() {
      if (document.hidden) {
        shouldReconnectRef.current = false
        if (wsRef.current) {
          try { wsRef.current.close() } catch {}
        }
      } else {
        if (!shouldReconnectRef.current) {
          shouldReconnectRef.current = true
          connect()
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      shouldReconnectRef.current = false
      document.removeEventListener('visibilitychange', handleVisibility)
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current)
        reconnectTimerRef.current = null
      }
      if (wsRef.current) {
        try { wsRef.current.close() } catch {}
        wsRef.current = null
      }
    }
  }, [])

  return state
}

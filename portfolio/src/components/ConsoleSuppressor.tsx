'use client'

import { useEffect } from 'react'

// Known browser-extension noise messages to suppress from the console
const SUPPRESSED_MESSAGES = [
  'A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received',
  'Extension context invalidated',
  'Cannot read properties of undefined (reading \'insertBefore\')',
]

export default function ConsoleSuppressor() {
  useEffect(() => {
    const originalError = console.error.bind(console)
    const originalWarn = console.warn.bind(console)

    console.error = (...args: unknown[]) => {
      const msg = args.join(' ')
      if (SUPPRESSED_MESSAGES.some((s) => msg.includes(s))) return
      originalError(...args)
    }

    console.warn = (...args: unknown[]) => {
      const msg = args.join(' ')
      if (SUPPRESSED_MESSAGES.some((s) => msg.includes(s))) return
      originalWarn(...args)
    }

    // Also suppress unhandled promise rejections triggered by extensions
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const msg = event.reason?.message ?? String(event.reason ?? '')
      if (SUPPRESSED_MESSAGES.some((s) => msg.includes(s))) {
        event.preventDefault()
      }
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      console.error = originalError
      console.warn = originalWarn
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}

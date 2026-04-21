'use client'

import { useEffect } from 'react'

/**
 * These are common browser extension noise messages that are not related to the application code.
 * We use partial search strings for more robust matching.
 */
const SUPPRESSED_WORDS = [
  'message channel closed before a response was received',
  'Extension context invalidated',
  'insertBefore',
  'heartbeat', // Common in some background scripts
  'chrome://',  // Filter out any chrome-specific internal messages
]

export default function ConsoleSuppressor() {
  useEffect(() => {
    // Helper to check if any part of the error matches our suppression list
    const shouldSuppress = (data: any): boolean => {
      if (!data) return false
      const str = typeof data === 'string' ? data : JSON.stringify(data)
      return SUPPRESSED_WORDS.some(word => str.toLowerCase().includes(word.toLowerCase()))
    }

    const originalError = console.error.bind(console)
    const originalWarn = console.warn.bind(console)

    console.error = (...args: any[]) => {
      if (args.some(arg => shouldSuppress(arg))) return
      originalError(...args)
    }

    console.warn = (...args: any[]) => {
      if (args.some(arg => shouldSuppress(arg))) return
      originalWarn(...args)
    }

    // Handles uncaught exceptions
    const handleError = (event: ErrorEvent) => {
      if (shouldSuppress(event.message) || shouldSuppress(event.error)) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    // Handles unhandled promise rejections (the specific error reported)
    const handleRejection = (event: PromiseRejectionEvent) => {
      if (shouldSuppress(event.reason)) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    window.addEventListener('error', handleError, true)
    window.addEventListener('unhandledrejection', handleRejection, true)

    return () => {
      console.error = originalError
      console.warn = originalWarn
      window.removeEventListener('error', handleError, true)
      window.removeEventListener('unhandledrejection', handleRejection, true)
    }
  }, [])

  return null
}

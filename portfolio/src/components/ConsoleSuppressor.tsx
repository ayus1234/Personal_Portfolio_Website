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
    const shouldSuppress = (data: any): boolean => {
      if (!data) return false
      
      const checkString = (s: string) => 
        SUPPRESSED_WORDS.some(word => s.toLowerCase().includes(word.toLowerCase()))

      // Direct string check
      if (typeof data === 'string') return checkString(data);

      // Error object or similar
      try {
        if (data.message && typeof data.message === 'string' && checkString(data.message)) return true;
        if (data.stack && typeof data.stack === 'string' && checkString(data.stack)) return true;
        if (data.reason && typeof data.reason === 'string' && checkString(data.reason)) return true;
        
        // Deep search through object properties (non-recursive for safety)
        const strified = JSON.stringify(data);
        if (strified && checkString(strified)) return true;
      } catch (e) {
        // Circular reference or other stringify error
        try {
          // Last ditch effort: check common keys
          for (const key in data) {
            if (typeof data[key] === 'string' && checkString(data[key])) return true;
          }
        } catch (e2) {}
      }
      
      return false
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

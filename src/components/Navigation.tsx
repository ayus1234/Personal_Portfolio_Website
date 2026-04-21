'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-card-border shadow-2xl' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center justify-center rounded-full text-foreground font-bold text-2xl tracking-tight">
            Ayush Nathani
          </a>

          {/* Right Side Items (Links & Resume & Mobile Menu) */}
          <div className="flex items-center justify-end flex-grow space-x-4 ml-8">
            {/* Center Links (Visible only on desktop) */}
            <div className="hidden md:flex items-center space-x-6 mr-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-2 text-muted hover:text-foreground transition-all duration-300 font-medium text-base relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-from to-primary-to transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-2 text-muted hover:text-foreground transition-all duration-300 font-medium text-base relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-from to-primary-to transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-2 text-muted hover:text-foreground transition-all duration-300 font-medium text-base relative group"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-from to-primary-to transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-2 text-muted hover:text-foreground transition-all duration-300 font-medium text-base relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-from to-primary-to transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => {
                  if (theme === 'light') setTheme('dark')
                  else if (theme === 'dark') setTheme('vibe')
                  else setTheme('light')
                }}
                className="w-10 h-10 rounded-full bg-subtle-bg flex items-center justify-center text-foreground hover:scale-110 transition-transform shadow-md border border-card-border"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <svg className="w-6 h-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.2" stroke="none" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : theme === 'dark' ? (
                  <svg className="w-6 h-6 text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.5C7.305 21.5 3.5 17.695 3.5 13C3.5 9 10.5 2.5 12 2.5C13.5 2.5 20.5 9 20.5 13C20.5 17.695 16.695 21.5 12 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            )}

            {/* Download Resume (Visible always except small phones, optionally hide/show differently) */}
            <motion.a
              href="/AYUSH_NATHANI_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex px-6 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-primary-from to-primary-to rounded-full shadow-lg shadow-primary-from/30 hover:shadow-primary-from/50 transition-all duration-300"
            >
              Download Resume
            </motion.a>

            {/* Mobile menu button */}
            <button className="md:hidden text-muted hover:text-foreground p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="mt-1 block w-full rounded-xl border border-card-border bg-subtle-bg text-foreground focus:border-primary-from focus:ring-primary-from py-3 px-4 transition-all duration-300 placeholder:text-muted text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
            className="mt-1 block w-full rounded-xl border border-card-border bg-subtle-bg text-foreground focus:border-primary-from focus:ring-primary-from py-3 px-4 transition-all duration-300 placeholder:text-muted text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about your project..."
            className="mt-1 block w-full rounded-xl border border-card-border bg-subtle-bg text-foreground focus:border-primary-from focus:ring-primary-from py-3 px-4 transition-all duration-300 placeholder:text-muted text-sm resize-none"
          />
          <p className="text-xs text-muted mt-2">Maximum 500 characters</p>
        </div>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === 'loading'}
        className="w-full flex justify-center py-4 px-4 rounded-xl text-sm font-bold text-foreground bg-card border border-card-border hover:brightness-110 shadow-lg shadow-primary-from/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-from transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
      >

        {status === 'loading' ? (
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            Sending...
          </motion.span>
        ) : 'Send Message'}
      </motion.button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-emerald-400 text-sm text-center font-medium mt-4 bg-emerald-400/10 py-2 rounded-lg border border-emerald-400/20"
        >
          Message sent successfully!
        </motion.p>
      )}
    </form>
  )
}
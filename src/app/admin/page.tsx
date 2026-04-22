'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface Message {
  id: number
  name: string
  email: string
  message: string
  createdAt: string
}

export default function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // We'll store it in session storage for the session
    sessionStorage.setItem('admin_pwd', password)
    fetchMessages()
  }

  const fetchMessages = async () => {
    setLoading(true)
    setError('')
    const pwd = sessionStorage.getItem('admin_pwd')
    
    try {
      const res = await fetch('/api/admin/messages', {
        headers: { 'x-admin-password': pwd || '' }
      })
      
      if (res.ok) {
        const data = await res.json()
        setMessages(data)
        setIsAuthorized(true)
      } else {
        setError('Unauthorized or failed to fetch. Check your password.')
        setIsAuthorized(false)
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this message?')) return

    const pwd = sessionStorage.getItem('admin_pwd')
    try {
      const res = await fetch(`/api/admin/messages?id=${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': pwd || '' }
      })
      
      if (res.ok) {
        setMessages(messages.filter(m => m.id !== id))
      } else {
        alert('Failed to delete message.')
      }
    } catch (err) {
      alert('Network error.')
    }
  }

  useEffect(() => {
    const savedPwd = sessionStorage.getItem('admin_pwd')
    if (savedPwd) {
      setPassword(savedPwd)
      fetchMessages()
    }
  }, [])

  if (!isAuthorized) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-32 pb-12 flex items-center justify-center bg-background">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md p-8 rounded-3xl border border-card-border bg-card shadow-2xl mx-4"
          >
            <h1 className="text-3xl font-bold mb-6 text-foreground text-center">Admin Access</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-subtle-bg border border-card-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary-from/50 focus:border-primary-from transition-all"
                  placeholder="Enter admin password..."
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-primary-from to-primary-to text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary-from/20 transition-all disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Access Dashboard'}
              </button>
            </form>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-foreground mb-2">Inquiries</h1>
              <p className="text-muted">Manage all messages sent from your portfolio contact form.</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={fetchMessages}
                className="px-6 py-2 bg-subtle-bg border border-card-border rounded-full hover:bg-card transition-colors text-sm font-medium"
              >
                Refresh
              </button>
              <button 
                onClick={() => {
                  sessionStorage.removeItem('admin_pwd')
                  setIsAuthorized(false)
                }}
                className="px-6 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full hover:bg-red-500/20 transition-colors text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>

          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-card rounded-3xl border border-card-border">
              <span className="text-6xl mb-4">📭</span>
              <p className="text-muted text-lg">No messages found yet.</p>
            </div>
          ) : (
            <div className="grid gap-6">
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-card rounded-2xl border border-card-border p-6 sm:p-8 hover:border-primary-from/30 transition-all shadow-sm hover:shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{msg.name}</h3>
                        <p className="text-primary-from font-medium mb-1">{msg.email}</p>
                        <p className="text-xs text-muted">
                          {new Date(msg.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a 
                          href={`mailto:${msg.email}?subject=Re: Your inquiry on my portfolio&body=Hello ${msg.name},%0D%0A%0D%0AThank you for reaching out...`}
                          className="px-6 py-2 bg-primary-from text-white rounded-full text-sm font-semibold hover:bg-primary-to transition-all"
                        >
                          Reply
                        </a>
                        <button 
                          onClick={() => handleDelete(msg.id)}
                          className="px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-bold hover:bg-red-500 h-10 w-10 flex items-center justify-center transition-all hover:text-white"
                          title="Delete"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                    <div className="p-5 bg-subtle-bg rounded-xl border border-card-border">
                      <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                        {msg.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '4030a375-8c55-4cd3-afa6-974545643c90',
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col text-left bg-cream border border-border rounded-2xl p-4 sm:p-5"
    >
      <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full px-3 py-2 rounded-xl bg-background border border-border focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-ink disabled:opacity-50"
          placeholder="Your name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full px-3 py-2 rounded-xl bg-background border border-border focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-ink disabled:opacity-50"
          placeholder="you@example.com"
        />
      </div>
      <div className="mb-3 flex-1 flex flex-col min-h-0">
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="3"
          disabled={status === 'submitting'}
          className="w-full flex-1 min-h-[4.5rem] px-3 py-2 rounded-xl bg-background border border-border focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-ink resize-none disabled:opacity-50"
          placeholder="What should we dig into?"
        />
      </div>
      <motion.button
        whileHover={status === 'idle' ? { scale: 1.01 } : {}}
        whileTap={status === 'idle' ? { scale: 0.99 } : {}}
        type="submit"
        disabled={status !== 'idle'}
        className={`w-full mt-auto flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${
          status === 'success'
            ? 'bg-sage text-cream'
            : status === 'error'
              ? 'bg-destructive text-destructive-foreground'
              : status === 'submitting'
                ? 'bg-ink/70 text-cream'
                : 'bg-ink text-cream hover:bg-ink/90'
        }`}
      >
        {status === 'idle' && (
          <>
            <Send className="w-4 h-4" />
            Send message
          </>
        )}
        {status === 'submitting' && <span>Sending…</span>}
        {status === 'success' && (
          <>
            <CheckCircle className="w-4 h-4" />
            Sent
          </>
        )}
        {status === 'error' && (
          <>
            <AlertCircle className="w-4 h-4" />
            Try again
          </>
        )}
      </motion.button>
    </form>
  )
}

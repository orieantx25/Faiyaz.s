'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4030a375-8c55-4cd3-afa6-974545643c90", // Web3Forms Access Key
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' }) // Clear form
        setTimeout(() => setStatus('idle'), 5000) // Reset after 5 seconds
      } else {
        setStatus('error')
        console.error("Web3Forms Error:", result)
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error("Submit Error:", error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full h-full flex flex-col text-left bg-background/50 backdrop-blur-md p-8 rounded-2xl border border-border shadow-2xl relative">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground disabled:opacity-50"
          placeholder="Aarav Sharma"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground disabled:opacity-50"
          placeholder="aarav.sharma@example.co.in"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          disabled={status === 'submitting'}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground resize-none disabled:opacity-50"
          placeholder="How can I help you?"
        ></textarea>
      </div>
      <div className="mt-auto">
        <motion.button
          whileHover={status === 'idle' ? { scale: 1.02 } : {}}
          whileTap={status === 'idle' ? { scale: 0.98 } : {}}
          type="submit"
          disabled={status !== 'idle'}
          className={`w-full relative overflow-hidden flex items-center justify-center gap-2 py-4 rounded-xl font-bold tracking-wide shadow-lg transition-all ${
            status === 'success' ? 'bg-green-500 text-white shadow-green-500/20' :
            status === 'error' ? 'bg-red-500 text-white shadow-red-500/20' :
            status === 'submitting' ? 'bg-indigo-600 text-white shadow-indigo-600/30' :
            'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl'
          }`}
        >
          {/* Modern Shimmer Effect Overlay */}
          {status === 'submitting' && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 w-[150%]"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          )}

          <div className="relative z-10 flex items-center justify-center gap-2">
            {status === 'idle' && (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
            {status === 'submitting' && (
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <motion.div className="w-2 h-2 rounded-full bg-white" animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} />
                  <motion.div className="w-2 h-2 rounded-full bg-white" animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} />
                  <motion.div className="w-2 h-2 rounded-full bg-white" animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} />
                </div>
                <span className="tracking-widest uppercase text-sm font-mono opacity-90">Transmitting</span>
              </div>
            )}
            {status === 'success' && (
              <>
                <CheckCircle className="w-5 h-5" />
                Transmission Successful
              </>
            )}
            {status === 'error' && (
              <>
                <AlertCircle className="w-5 h-5" />
                Transmission Failed
              </>
            )}
          </div>
        </motion.button>
      </div>
    </form>
  )
}

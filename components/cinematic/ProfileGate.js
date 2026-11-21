'use client'

import { motion } from 'framer-motion'
import { profiles } from '@/lib/profiles'
import { useProfile } from '@/lib/ProfileContext'

const ease = [0.16, 1, 0.3, 1]

export default function ProfileGate() {
  const { selectProfile, hydrated, hasProfile, gateOpen } = useProfile()
  const show = hydrated && (gateOpen || !hasProfile)

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      role="dialog"
      aria-label="Who is watching?"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#090909',
        color: '#fff',
        padding: '64px 16px',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(229,9,20,0.14), transparent 55%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 980, textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(2.75rem, 8vw, 5rem)',
            color: '#fff',
            margin: '0 0 48px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            fontWeight: 700,
          }}
        >
          Who is watching?
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
          }}
        >
          {profiles.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease }}
              whileHover={{ scale: 1.03, borderColor: p.accent }}
              whileTap={{ scale: 0.98 }}
              onClick={() => selectProfile(p.id)}
              style={{
                textAlign: 'left',
                borderRadius: 6,
                overflow: 'hidden',
                border: `1px solid ${p.accent}55`,
                background: '#171717',
                color: '#fff',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <div
                style={{
                  height: 120,
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 16,
                  background: `linear-gradient(160deg, #2a2a2a 0%, #121212 50%, ${p.accent}55 100%)`,
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: p.accent,
                  }}
                >
                  {p.label.split(' ')[0]}
                </span>
              </div>
              <div style={{ padding: 16 }}>
                <p style={{ margin: '0 0 6px', fontWeight: 600, fontSize: 14 }}>{p.label}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#B8B8B8', lineHeight: 1.45 }}>{p.subtitle}</p>
                <p
                  style={{
                    margin: '10px 0 0',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: p.accent,
                  }}
                >
                  {p.mood} · {p.sections.length - 1} chapters
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { motion, useReducedMotion } from 'framer-motion'

const INPUTS = [
  { id: 'ops', x: 72, y: 14, label: 'ops' },
  { id: 'kpi', x: 48, y: 10, label: 'kpi' },
  { id: 'raw', x: 22, y: 18, label: 'raw' },
  { id: 'exc', x: 10, y: 36, label: 'noise', clay: true },
  { id: 'ask', x: 38, y: 40, label: 'ask' },
  { id: 'hub', x: 58, y: 32, label: 'hub' },
]

const DECISION = { x: 88, y: 68, label: 'decision' }
const BARS = [18, 34, 26, 48, 30, 56, 38, 62, 28, 44, 36, 50]
const ease = [0.16, 1, 0.3, 1]

export default function SignalPlane({ ready = false }) {
  const reduce = useReducedMotion()
  const animateIn = ready && !reduce

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-grain" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 78% 22%, hsl(168 78% 40% / 0.28), transparent 60%), radial-gradient(ellipse 45% 40% at 18% 70%, hsl(200 60% 45% / 0.12), transparent 55%), radial-gradient(ellipse 80% 50% at 50% 100%, hsl(168 70% 30% / 0.12), transparent 55%)',
        }}
      />

      {/* Diagonal light cut */}
      <div
        className="absolute -top-20 -right-10 w-[55%] h-[70%] opacity-40"
        style={{
          background:
            'linear-gradient(125deg, hsl(168 78% 50% / 0.14), transparent 55%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 70%)',
        }}
      />

      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className={`absolute inset-0 h-full w-full ${animateIn ? 'float-soft' : ''}`}
        >
          <defs>
            <linearGradient id="signal-path" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(168 78% 45% / 0.12)" />
              <stop offset="50%" stopColor="hsl(168 78% 48% / 0.65)" />
              <stop offset="100%" stopColor="hsl(168 80% 55% / 0.95)" />
            </linearGradient>
            <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 7.5 + 1}
              y1="0"
              x2={i * 7.5 + 1}
              y2="100"
              stroke="hsl(0 0% 100% / 0.04)"
              strokeWidth="0.1"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 9 + 1}
              x2="100"
              y2={i * 9 + 1}
              stroke="hsl(0 0% 100% / 0.035)"
              strokeWidth="0.1"
            />
          ))}

          <g transform="translate(58 6)">
            {BARS.map((h, i) => (
              <motion.rect
                key={i}
                x={i * 3}
                y={30 - h * 0.3}
                width="2"
                height={h * 0.3}
                rx="0.25"
                fill={`hsl(168 78% 48% / ${0.12 + (i % 4) * 0.05})`}
                initial={reduce ? false : { scaleY: 0 }}
                animate={ready ? { scaleY: 1 } : { scaleY: 0 }}
                style={{ transformOrigin: `${i * 3 + 1}px 30px` }}
                transition={{ duration: 0.75, delay: 0.15 + i * 0.03, ease }}
              />
            ))}
          </g>

          {INPUTS.map((node, i) => (
            <motion.path
              key={`path-${node.id}`}
              className={animateIn ? 'path-flow' : undefined}
              d={`M ${node.x} ${node.y} C ${(node.x + DECISION.x) / 2 + 2} ${node.y + 10}, ${(node.x + DECISION.x) / 2 + 8} ${DECISION.y - 12}, ${DECISION.x} ${DECISION.y}`}
              fill="none"
              stroke="url(#signal-path)"
              strokeWidth={node.clay ? 0.4 : 0.3}
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={ready ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.35, delay: 0.12 + i * 0.07, ease }}
            />
          ))}

          {INPUTS.map((node, i) => (
            <motion.g
              key={node.id}
              initial={reduce ? false : { opacity: 0, scale: 0.5 }}
              animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.06, ease }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="1.6"
                fill={node.clay ? 'hsl(16 72% 48% / 0.9)' : 'hsl(210 20% 85% / 0.35)'}
                stroke={node.clay ? 'hsl(16 72% 58%)' : 'hsl(0 0% 100% / 0.35)'}
                strokeWidth="0.22"
                filter={node.clay ? undefined : 'url(#soft-glow)'}
              />
              <text
                x={node.x + 2.4}
                y={node.y + 0.7}
                fill="hsl(0 0% 100% / 0.42)"
                fontSize="2.2"
                fontFamily="JetBrains Mono, ui-monospace, monospace"
              >
                {node.label}
              </text>
            </motion.g>
          ))}

          <motion.g
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            filter="url(#soft-glow)"
          >
            <circle
              cx={DECISION.x}
              cy={DECISION.y}
              r="3.2"
              fill="hsl(168 78% 34% / 0.2)"
              stroke="hsl(168 78% 52%)"
              strokeWidth="0.35"
            />
            <circle cx={DECISION.x} cy={DECISION.y} r="1.15" fill="hsl(168 80% 58%)" />
            <text
              x={DECISION.x - 15}
              y={DECISION.y + 6.2}
              fill="hsl(168 78% 68%)"
              fontSize="2.5"
              fontFamily="JetBrains Mono, ui-monospace, monospace"
              letterSpacing="0.12"
            >
              {DECISION.label}
            </text>
          </motion.g>
        </motion.svg>
      </motion.div>

      <div
        className="absolute inset-x-0 bottom-0 h-[58%]"
        style={{
          background:
            'linear-gradient(to top, hsl(215 40% 5% / 0.97) 0%, hsl(215 40% 5% / 0.72) 40%, transparent 100%)',
        }}
      />
    </div>
  )
}

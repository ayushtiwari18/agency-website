import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

function ScoreRing({ score, color, label, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const r = 24
  const circ = 2 * Math.PI * r

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 6 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.45, ease }}
      className="flex flex-col items-center gap-1.5"
    >
      <div className="relative w-[60px] h-[60px]">
        <svg width="60" height="60" viewBox="0 0 60 60" className="-rotate-90">
          <circle cx="30" cy="30" r={r} fill="none" stroke="#2a2a2a" strokeWidth="5" />
          <motion.circle
            cx="30" cy="30" r={r}
            fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ - (score / 100) * circ } : { strokeDashoffset: circ }}
            transition={{ delay: delay + 0.25, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[13px] font-extrabold text-white">{score}</span>
        </div>
      </div>
      <span className="text-[9px] text-gray-400 text-center leading-tight max-w-[56px]">{label}</span>
    </motion.div>
  )
}

const NETWORK_ROWS = [
  { name: 'document',   status: 200, type: 'doc',  w: 15, ml: 0,  color: '#4d9ef6' },
  { name: 'main.css',   status: 200, type: 'css',  w: 10, ml: 8,  color: '#a78bfa' },
  { name: 'main.js',    status: 200, type: 'js',   w: 22, ml: 12, color: '#fbbf24' },
  { name: 'logo.svg',   status: 200, type: 'svg',  w: 5,  ml: 18, color: '#34d399' },
  { name: 'hero.webp',  status: 200, type: 'img',  w: 28, ml: 20, color: '#34d399' },
  { name: 'font.woff2', status: 200, type: 'font', w: 12, ml: 14, color: '#f87171' },
]

const CONSOLE_LINES = [
  { icon: '✓', color: 'text-emerald-400', msg: 'No console errors detected' },
  { icon: '✓', color: 'text-emerald-400', msg: 'No deprecation warnings' },
  { icon: '✓', color: 'text-emerald-400', msg: 'Content Security Policy: valid' },
  { icon: '✓', color: 'text-emerald-400', msg: 'No mixed content warnings' },
  { icon: 'ℹ', color: 'text-[#4d9ef6]',  msg: 'Service worker registered' },
  { icon: 'ℹ', color: 'text-[#4d9ef6]',  msg: 'Analytics initialized · GA4' },
]

const TABS = ['Lighthouse', 'Network', 'Console']

export default function DevToolsMockup() {
  const [activeTab, setActiveTab] = useState('Lighthouse')
  const [tick, setTick] = useState(0)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i = (i + 1) % TABS.length
      setActiveTab(TABS[i])
      setTick(p => p + 1)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  const handleTab = (tab) => { setActiveTab(tab); setTick(p => p + 1) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease }}
      className="w-full max-w-[480px] rounded-xl overflow-hidden border border-gray-200"
      style={{ boxShadow: '0 20px 60px -12px rgba(0,0,0,0.16), 0 4px 16px -4px rgba(0,0,0,0.08)' }}
    >
      {/* ─ Browser chrome ─ */}
      <div className="bg-[#ececec] border-b border-gray-300 px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white border border-gray-300 rounded-md text-[9px] text-gray-400 px-3 py-1 text-center">
          tjcreates.in
        </div>
      </div>

      {/* ─ Mini webpage strip ─ */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-gray-900 flex items-center justify-center">
              <span className="text-[7px] font-bold text-white">TJ</span>
            </div>
            <span className="text-[10px] font-bold text-gray-900">T&amp;J Creates</span>
          </div>
          <div className="hidden sm:flex gap-3">
            {['Work', 'Services', 'Contact'].map(l => (
              <span key={l} className="text-[9px] text-gray-400">{l}</span>
            ))}
          </div>
          <div className="bg-gray-900 text-white text-[9px] font-semibold px-2.5 py-1 rounded-md">Book a call</div>
        </div>
        {/* Hero preview line */}
        <div className="pl-0">
          <div className="text-[11px] font-extrabold text-gray-900 leading-tight">We build websites that get clients.</div>
          <div className="w-24 h-1 bg-gray-900 rounded mt-1.5" />
          <div className="w-16 h-1 bg-gray-200 rounded mt-1" />
        </div>
      </div>

      {/* ─ DevTools panel ─ */}
      <div className="bg-[#1e1e1e]">
        {/* Tab bar */}
        <div className="flex items-center border-b border-[#3a3a3a] px-3 pt-1">
          <div className="flex gap-0.5 mr-3 opacity-25">
            {[0,1,2].map(i => <div key={i} className="w-1 h-3 rounded-full bg-gray-400" />)}
          </div>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => handleTab(tab)}
              className={`px-3 py-2 text-[10px] font-medium whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab
                  ? 'text-white border-[#4d9ef6]'
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1.5 pb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[9px] text-gray-500">tjcreates.in</span>
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">

          {/* ── LIGHTHOUSE ── */}
          {activeTab === 'Lighthouse' && (
            <motion.div
              key={`lighthouse-${tick}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="px-5 py-5"
            >
              <div className="flex items-center gap-2 mb-5">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#f5a623"><path d="M12 2L4 7l1.5 9L12 22l6.5-6L20 7z"/></svg>
                <span className="text-[11px] font-semibold text-gray-300">Lighthouse Report</span>
                <span className="ml-auto text-[9px] text-gray-600">Mode: Navigation</span>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-5">
                <ScoreRing score={98}  color="#22c55e" label="Performance"    delay={0} />
                <ScoreRing score={94}  color="#22c55e" label="SEO"            delay={0.1} />
                <ScoreRing score={100} color="#22c55e" label="Accessibility"  delay={0.2} />
                <ScoreRing score={100} color="#22c55e" label="Best Practices" delay={0.3} />
              </div>
              <div className="space-y-2 border-t border-[#2a2a2a] pt-4">
                {[
                  ['First Contentful Paint', '0.4 s'],
                  ['Largest Contentful Paint', '0.8 s'],
                  ['Total Blocking Time', '0 ms'],
                  ['Cumulative Layout Shift', '0.001'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-[9px] text-gray-500">{label}</span>
                    <span className="text-[9px] font-semibold text-emerald-400">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── NETWORK ── */}
          {activeTab === 'Network' && (
            <motion.div
              key={`network-${tick}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="px-4 py-4"
            >
              {/* Summary bar */}
              <div className="flex flex-wrap items-center gap-3 mb-3 pb-3 border-b border-[#2a2a2a]">
                <span className="text-[9px] text-gray-400">13 requests</span>
                <span className="text-[9px] font-semibold text-emerald-400">0 errors</span>
                <span className="text-[9px] text-gray-400">142 kB</span>
                <span className="text-[9px] text-gray-400">Finish: <span className="text-white font-semibold">0.8s</span></span>
              </div>
              {/* Header row */}
              <div className="grid grid-cols-[1fr_36px_36px_90px] gap-2 mb-2">
                {['Name','St.','Type','Waterfall'].map(h => (
                  <span key={h} className="text-[8px] text-gray-600 font-semibold uppercase tracking-wide">{h}</span>
                ))}
              </div>
              {/* Data rows */}
              {NETWORK_ROWS.map((row, i) => (
                <motion.div
                  key={`${row.name}-${tick}`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.28, ease: 'easeOut' }}
                  className="grid grid-cols-[1fr_36px_36px_90px] gap-2 items-center py-1.5 border-b border-[#272727]"
                >
                  <span className="text-[9px] text-gray-300 truncate font-mono">{row.name}</span>
                  <span className="text-[9px] text-emerald-400 font-mono">{row.status}</span>
                  <span className="text-[9px] text-gray-500 font-mono">{row.type}</span>
                  {/* Waterfall bar */}
                  <div className="relative h-2.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                    <motion.div
                      key={`bar-${row.name}-${tick}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${row.w}%` }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.55, ease: 'easeOut' }}
                      className="absolute top-0 h-full rounded-full"
                      style={{
                        marginLeft: `${row.ml}%`,
                        backgroundColor: row.color,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ── CONSOLE ── */}
          {activeTab === 'Console' && (
            <motion.div
              key={`console-${tick}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="px-4 py-4 font-mono"
            >
              <div className="flex gap-2 mb-4 pb-3 border-b border-[#2a2a2a]">
                <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">Errors: 0</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-500/60">Warnings: 0</span>
              </div>
              <div className="space-y-2.5">
                {CONSOLE_LINES.map(({ icon, color, msg }, i) => (
                  <motion.div
                    key={`${msg}-${tick}`}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.28 }}
                    className="flex items-center gap-2.5"
                  >
                    <span className={`text-[12px] font-bold flex-shrink-0 ${color}`}>{icon}</span>
                    <span className="text-[10px] text-gray-400">{msg}</span>
                  </motion.div>
                ))}
                {/* Blinking cursor */}
                <div className="flex items-center gap-1.5 mt-4 pt-2 border-t border-[#2a2a2a]">
                  <span className="text-[10px] text-gray-600">&gt;&nbsp;</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="w-1.5 h-4 bg-gray-500 rounded-sm inline-block"
                  />
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// Animated circular score ring
function ScoreRing({ score, color, label, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const r = 26
  const circ = 2 * Math.PI * r
  const dash = (score / 100) * circ

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease }}
      className="flex flex-col items-center gap-1"
    >
      <div className="relative w-16 h-16">
        <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
          <circle cx="32" cy="32" r={r} fill="none" stroke="#f0f0f0" strokeWidth="5" />
          <motion.circle
            cx="32" cy="32" r={r}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ - dash } : { strokeDashoffset: circ }}
            transition={{ delay: delay + 0.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[13px] font-extrabold text-gray-900">{score}</span>
        </div>
      </div>
      <span className="text-[9px] text-gray-500 text-center leading-tight">{label}</span>
    </motion.div>
  )
}

const TABS = ['Lighthouse', 'Network', 'Console']

export default function DevToolsMockup() {
  const [activeTab, setActiveTab] = useState('Lighthouse')

  // Auto-cycle tabs every 3s for demo feel
  useEffect(() => {
    const ids = ['Lighthouse', 'Network', 'Console']
    let i = 0
    const t = setInterval(() => {
      i = (i + 1) % ids.length
      setActiveTab(ids[i])
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease }}
      className="w-full max-w-[500px] ml-auto select-none"
      style={{ boxShadow: '0 24px 64px -12px rgba(0,0,0,0.18), 0 4px 16px -4px rgba(0,0,0,0.08)' }}
    >
      {/* ─ Browser chrome ─ */}
      <div className="bg-[#f0f0f0] border border-gray-200 rounded-t-xl px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white border border-gray-200 rounded text-[9px] text-gray-400 px-3 py-1 text-center">
          tjcreates.in
        </div>
      </div>

      {/* ─ Webpage preview strip ─ */}
      <div className="bg-white border-x border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gray-900" />
          <span className="text-[11px] font-bold text-gray-900">T&amp;J Creates</span>
        </div>
        <div className="hidden sm:flex gap-4">
          {['Work','Services','Contact'].map(l => (
            <span key={l} className="text-[9px] text-gray-400">{l}</span>
          ))}
        </div>
        <div className="bg-gray-900 text-white text-[9px] font-semibold px-2.5 py-1 rounded">Book a call</div>
      </div>

      {/* ─ DevTools panel ─ */}
      <div className="bg-[#1e1e1e] border border-t-0 border-gray-200 rounded-b-xl overflow-hidden">

        {/* DevTools tab bar */}
        <div className="flex items-center border-b border-[#3a3a3a] px-3 pt-1 gap-0 overflow-x-auto">
          {/* Fake drag handle */}
          <div className="flex gap-0.5 mr-3 opacity-30">
            {[0,1,2].map(i => <div key={i} className="w-1 h-3 rounded-full bg-gray-400" />)}
          </div>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-[10px] font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? 'text-white border-[#4d9ef6]'
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 pb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[9px] text-gray-500">tjcreates.in</span>
          </div>
        </div>

        {/* ── LIGHTHOUSE TAB ── */}
        {activeTab === 'Lighthouse' && (
          <motion.div
            key="lighthouse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="px-5 py-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4">
                <svg viewBox="0 0 24 24" fill="#f5a623"><path d="M12 2L4 7l1.5 9L12 22l6.5-6L20 7z"/></svg>
              </div>
              <span className="text-[11px] font-semibold text-gray-300">Lighthouse Report</span>
              <span className="ml-auto text-[9px] text-gray-600">Mode: Navigation · Mobile</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <ScoreRing score={98} color="#22c55e" label="Performance" delay={0} />
              <ScoreRing score={94} color="#22c55e" label="SEO" delay={0.1} />
              <ScoreRing score={100} color="#22c55e" label="Accessibility" delay={0.2} />
              <ScoreRing score={100} color="#22c55e" label="Best Practices" delay={0.3} />
            </div>
            <div className="mt-4 space-y-1.5">
              {[
                { label: 'First Contentful Paint', value: '0.4s', good: true },
                { label: 'Largest Contentful Paint', value: '0.8s', good: true },
                { label: 'Total Blocking Time', value: '0ms', good: true },
                { label: 'Cumulative Layout Shift', value: '0.001', good: true },
              ].map(({ label, value, good }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-[9px] text-gray-500">{label}</span>
                  <span className={`text-[9px] font-semibold ${ good ? 'text-emerald-400' : 'text-red-400'}`}>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── NETWORK TAB ── */}
        {activeTab === 'Network' && (
          <motion.div
            key="network"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="px-4 py-4"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[9px] text-gray-500">13 requests</span>
              <span className="text-[9px] text-emerald-400">0 errors</span>
              <span className="text-[9px] text-gray-500">142 kB transferred</span>
              <span className="text-[9px] text-gray-500">Finish: <span className="text-white font-medium">0.8s</span></span>
            </div>
            {/* Table header */}
            <div className="grid grid-cols-[1fr_48px_48px_80px] gap-2 border-b border-[#3a3a3a] pb-1 mb-1">
              {['Name','Status','Type','Waterfall'].map(h => (
                <span key={h} className="text-[8px] text-gray-600 font-medium">{h}</span>
              ))}
            </div>
            {/* Rows */}
            {[
              { name: 'document', status: 200, type: 'doc',  bar: 15, delay: 0,  color: '#4d9ef6' },
              { name: 'main.css', status: 200, type: 'css',  bar: 10, delay: 8,  color: '#a78bfa' },
              { name: 'main.js',  status: 200, type: 'js',   bar: 22, delay: 12, color: '#fbbf24' },
              { name: 'logo.svg', status: 200, type: 'svg',  bar: 5,  delay: 18, color: '#34d399' },
              { name: 'hero.webp',status: 200, type: 'img',  bar: 30, delay: 20, color: '#34d399' },
              { name: 'font.woff2',status:200, type:'font',  bar: 12, delay: 14, color: '#f87171' },
            ].map((row, i) => (
              <motion.div
                key={row.name}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="grid grid-cols-[1fr_48px_48px_80px] gap-2 items-center py-0.5 border-b border-[#2a2a2a]"
              >
                <span className="text-[9px] text-gray-300 truncate">{row.name}</span>
                <span className="text-[9px] text-emerald-400">{row.status}</span>
                <span className="text-[9px] text-gray-500">{row.type}</span>
                <div className="relative h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${row.bar + row.delay}%` }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                    className="absolute top-0 h-full rounded-full"
                    style={{ left: `${row.delay}%`, width: `${row.bar}%`, backgroundColor: row.color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── CONSOLE TAB ── */}
        {activeTab === 'Console' && (
          <motion.div
            key="console"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="px-4 py-4 font-mono"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-2">
                {['Errors','Warnings','Info'].map((f, i) => (
                  <span key={f} className={`text-[9px] px-1.5 py-0.5 rounded ${
                    i === 0 ? 'bg-emerald-500/10 text-emerald-400' : 'text-gray-600'
                  }`}>
                    {f} {i === 0 ? '0' : ''}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {[
                { icon: '✓', color: 'text-emerald-400', msg: 'No console errors detected' },
                { icon: '✓', color: 'text-emerald-400', msg: 'No deprecation warnings' },
                { icon: '✓', color: 'text-emerald-400', msg: 'Content Security Policy: valid' },
                { icon: '✓', color: 'text-emerald-400', msg: 'No mixed content warnings' },
                { icon: 'ℹ', color: 'text-[#4d9ef6]',  msg: 'Service worker registered' },
                { icon: 'ℹ', color: 'text-[#4d9ef6]',  msg: 'Analytics initialized · GA4' },
              ].map(({ icon, color, msg }, i) => (
                <motion.div
                  key={msg}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <span className={`text-[11px] font-bold flex-shrink-0 ${color}`}>{icon}</span>
                  <span className="text-[10px] text-gray-400">{msg}</span>
                </motion.div>
              ))}
              {/* Blinking cursor */}
              <div className="flex items-center gap-1 mt-3">
                <span className="text-[10px] text-gray-600">&gt;</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1.5 h-3.5 bg-gray-500 rounded-sm inline-block"
                />
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </motion.div>
  )
}

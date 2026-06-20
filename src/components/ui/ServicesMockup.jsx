import { motion } from 'framer-motion'
import { CheckCircle, Wifi, Battery, Signal, Star, Zap } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function DesktopPage() {
  return (
    <div className="bg-white h-full flex flex-col px-4 pt-3 pb-2">
      {/* Nav */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-gray-900" />
          <span className="text-[10px] font-bold text-gray-900">T&amp;J Creates</span>
        </div>
        <div className="flex gap-3">
          {['Work', 'Services', 'Contact'].map(l => (
            <span key={l} className="text-[8px] text-gray-400">{l}</span>
          ))}
        </div>
        <div className="bg-gray-900 text-white text-[8px] font-semibold px-2 py-1 rounded">
          Book a call
        </div>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col justify-center gap-1.5">
        <div className="text-[13px] font-extrabold text-gray-900 leading-tight">
          We build websites<br />that get clients.
        </div>
        <div className="text-[8px] text-gray-400 leading-relaxed max-w-[180px]">
          Fast, conversion-focused sites for businesses and personal brands.
        </div>
        <div className="flex gap-1.5 mt-1">
          <div className="bg-gray-900 text-white text-[8px] font-semibold px-2.5 py-1 rounded">Get Estimate</div>
          <div className="border border-gray-200 text-gray-600 text-[8px] font-medium px-2.5 py-1 rounded">See Work</div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="flex gap-4 pt-2 border-t border-gray-100">
        {[['10+', 'Projects'], ['3+', 'Live'], ['100%', 'On-time']].map(([v, l]) => (
          <div key={l}>
            <div className="text-[11px] font-extrabold text-gray-900">{v}</div>
            <div className="text-[7px] text-gray-400 uppercase tracking-wide">{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MobilePage() {
  return (
    <div className="bg-white h-full flex flex-col px-2.5 pt-2 pb-1.5">
      {/* Nav */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-900" />
          <span className="text-[8px] font-bold text-gray-900">T&amp;J</span>
        </div>
        <div className="bg-gray-900 text-white text-[7px] font-semibold px-1.5 py-0.5 rounded">Call</div>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col justify-center gap-1.5">
        <div className="text-[11px] font-extrabold text-gray-900 leading-tight">
          We build<br />websites that<br />get clients.
        </div>
        <div className="text-[7px] text-gray-400 leading-relaxed">
          Fast, conversion-focused sites.
        </div>
        <div className="bg-gray-900 text-white text-[7.5px] font-semibold px-2 py-1 rounded text-center mt-0.5">
          Get Estimate
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between pt-1.5 border-t border-gray-100">
        {[['10+', 'Projects'], ['100%', 'On-time']].map(([v, l]) => (
          <div key={l} className="text-center">
            <div className="text-[10px] font-extrabold text-gray-900">{v}</div>
            <div className="text-[6px] text-gray-400 uppercase tracking-wide">{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ServicesMockup() {
  return (
    // Container: relative, sized to hold the overlapping frames
    <div className="relative w-full max-w-[420px] h-[320px] select-none ml-auto">

      {/* ─── DESKTOP BROWSER — base layer, full width ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease }}
        className="absolute top-0 left-0 w-[360px] rounded-xl overflow-hidden"
        style={{ boxShadow: '0 20px 60px -12px rgba(0,0,0,0.22), 0 4px 16px -4px rgba(0,0,0,0.10)' }}
      >
        {/* Browser chrome */}
        <div className="bg-[#f0f0f0] border-b border-gray-200 px-3 py-2.5 flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-white rounded-md text-[8px] text-gray-400 px-2.5 py-1 text-center border border-gray-200">
            tjcreates.in
          </div>
          {/* Refresh icon */}
          <div className="w-4 h-4 flex items-center justify-center opacity-40">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13.5 8A5.5 5.5 0 1 1 8 2.5" strokeLinecap="round" />
              <path d="M13.5 2.5v3h-3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <div className="h-[200px]">
          <DesktopPage />
        </div>
      </motion.div>

      {/* ─── MOBILE PHONE — top layer, overlapping bottom-right ─── */}
      <motion.div
        initial={{ opacity: 0, y: 48, x: 8 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, delay: 0.22, ease }}
        className="absolute bottom-0 right-0 w-[130px] h-[250px] rounded-[22px] flex flex-col overflow-hidden border-[2.5px] border-gray-800"
        style={{
          background: '#1a1a1a',
          boxShadow: '0 24px 48px -8px rgba(0,0,0,0.40), 0 4px 12px -4px rgba(0,0,0,0.20)',
        }}
      >
        {/* Status bar */}
        <div className="bg-gray-900 px-3 py-1.5 flex items-center justify-between flex-shrink-0">
          <span className="text-[8px] text-white font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <Signal size={8} className="text-white" />
            <Wifi size={8} className="text-white" />
            <Battery size={9} className="text-white" />
          </div>
        </div>
        {/* Screen */}
        <div className="flex-1 overflow-hidden">
          <MobilePage />
        </div>
        {/* Home bar */}
        <div className="bg-white pb-1.5 pt-1 flex justify-center">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>
      </motion.div>

      {/* ─── BADGE: Live ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.35, ease }}
        className="absolute -top-4 right-[140px] flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        Live
      </motion.div>

      {/* ─── BADGE: Speed ─── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.4, ease }}
        className="absolute -bottom-5 left-0 bg-brand-black text-white rounded-xl px-3 py-2 shadow-xl flex items-center gap-2.5"
      >
        <Zap size={13} className="text-yellow-400 flex-shrink-0" />
        <div>
          <p className="text-[10px] font-bold leading-none">0.8s load time</p>
          <p className="text-[8px] text-gray-400 mt-0.5">Top 5% globally</p>
        </div>
      </motion.div>

      {/* ─── BADGE: Review ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4, ease }}
        className="absolute top-[80px] -right-4 bg-white border border-gray-200 rounded-xl px-2.5 py-2 shadow-lg w-[110px]"
      >
        <div className="flex gap-0.5 mb-1">
          {[1,2,3,4,5].map(s => (
            <Star key={s} size={8} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-[8px] text-gray-700 leading-snug italic">&ldquo;Launched in 3 weeks. Got leads same day.&rdquo;</p>
        <p className="text-[7px] text-gray-400 mt-1">Priya Designs</p>
      </motion.div>

    </div>
  )
}

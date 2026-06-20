import { motion } from 'framer-motion'
import { Wifi, Battery, Signal, CheckCircle } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

// Tiny webpage rendered inside frames
function MiniPage({ mobile = false }) {
  return (
    <div className={`bg-white flex flex-col h-full ${mobile ? 'px-2 pt-2' : 'px-3 pt-2.5'}`}>
      {/* Nav */}
      <div className={`flex items-center justify-between mb-${mobile ? '2' : '3'} ${mobile ? '' : 'border-b border-gray-100 pb-2'}`}>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-900" />
          <span className={`font-bold text-gray-900 ${mobile ? 'text-[7px]' : 'text-[9px]'}`}>Studio</span>
        </div>
        {!mobile && (
          <div className="flex gap-2.5">
            {['Work','Services','Contact'].map(l => (
              <span key={l} className="text-[7px] text-gray-400">{l}</span>
            ))}
          </div>
        )}
        <div className={`rounded ${mobile ? 'px-1 py-0.5 text-[6px]' : 'px-2 py-0.5 text-[7px]'} bg-gray-900 text-white font-semibold`}>
          {mobile ? 'Call' : 'Book a call'}
        </div>
      </div>

      {/* Hero block */}
      <div className={`flex-1 flex flex-col justify-center ${mobile ? 'gap-1.5 pb-2' : 'gap-2 pb-3'}`}>
        <div className={`font-extrabold text-gray-900 leading-tight ${mobile ? 'text-[9px]' : 'text-[11px]'}`}>
          We build websites<br />that get clients.
        </div>
        <div className={`text-gray-400 leading-snug ${mobile ? 'text-[6px]' : 'text-[7.5px]'} max-w-[90%]`}>
          Fast, conversion-focused sites for businesses and personal brands.
        </div>
        <div className="flex gap-1 mt-0.5">
          <div className={`rounded bg-gray-900 text-white font-semibold ${mobile ? 'px-1.5 py-0.5 text-[6px]' : 'px-2 py-1 text-[7px]'}`}>
            Get Estimate
          </div>
          <div className={`rounded border border-gray-200 text-gray-600 font-medium ${mobile ? 'px-1.5 py-0.5 text-[6px]' : 'px-2 py-1 text-[7px]'}`}>
            See Work
          </div>
        </div>

        {/* Stats strip */}
        {!mobile && (
          <div className="flex gap-3 mt-1 pt-2 border-t border-gray-100">
            {[['10+','Projects'],['3+','Live'],['100%','On-time']].map(([v,l]) => (
              <div key={l}>
                <div className="text-[9px] font-extrabold text-gray-900">{v}</div>
                <div className="text-[6px] text-gray-400 uppercase tracking-wide">{l}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ServicesMockup() {
  return (
    <div className="relative flex items-end justify-center gap-5 h-[380px] w-full select-none">

      {/* ── DESKTOP BROWSER FRAME ── */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease }}
        className="relative w-[280px] h-[200px] rounded-xl overflow-hidden shadow-[0_16px_48px_-8px_rgba(0,0,0,0.18)] border border-gray-200 flex flex-col flex-shrink-0"
      >
        {/* Browser chrome */}
        <div className="flex-shrink-0 bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 bg-white rounded text-[7px] text-gray-400 px-2 py-0.5 text-center">
            tjcreates.in
          </div>
        </div>
        {/* Page */}
        <div className="flex-1 overflow-hidden">
          <MiniPage />
        </div>

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.4, ease }}
          className="absolute -top-3 -right-3 flex items-center gap-1 bg-emerald-500 text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Live
        </motion.div>
      </motion.div>

      {/* ── MOBILE FRAME ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.18, ease }}
        className="relative w-[110px] h-[210px] rounded-[20px] overflow-hidden shadow-[0_16px_40px_-8px_rgba(0,0,0,0.22)] border-[3px] border-gray-800 bg-gray-800 flex flex-col flex-shrink-0"
      >
        {/* Phone notch */}
        <div className="flex-shrink-0 bg-gray-800 flex items-center justify-between px-2.5 py-1">
          <span className="text-[7px] text-white font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <Signal size={7} className="text-white" />
            <Wifi size={7} className="text-white" />
            <Battery size={7} className="text-white" />
          </div>
        </div>
        {/* Screen */}
        <div className="flex-1 overflow-hidden rounded-b-[17px]">
          <MiniPage mobile />
        </div>

        {/* Speed badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.4, ease }}
          className="absolute -bottom-2 -left-6 bg-white border border-gray-200 shadow-lg rounded-xl px-2.5 py-1.5 flex flex-col"
        >
          <span className="text-[8px] text-gray-400 uppercase tracking-wide">Load time</span>
          <span className="text-[13px] font-extrabold text-gray-900 leading-none">0.8s</span>
          <span className="text-[7px] text-emerald-600 font-medium">Top 5%</span>
        </motion.div>
      </motion.div>

      {/* ── FLOATING: Score badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.45, ease }}
        className="absolute top-4 left-0 bg-brand-black text-white rounded-xl px-3 py-2.5 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3)] flex items-center gap-2"
      >
        <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
        <div>
          <p className="text-[10px] font-bold leading-none">100% on-time</p>
          <p className="text-[9px] text-gray-400 mt-0.5">Every launch delivered</p>
        </div>
      </motion.div>

    </div>
  )
}

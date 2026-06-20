import { motion } from 'framer-motion'
import { Search, Zap, TrendingUp, CheckCircle, Globe, Star } from 'lucide-react'

const float = (y = 8, dur = 4, delay = 0) => ({
  animate: { y: [0, -y, 0] },
  transition: { duration: dur, repeat: Infinity, ease: 'easeInOut', delay },
})

export default function ServicesMockup() {
  return (
    <div className="relative w-[480px] h-[380px] select-none">

      {/* MAIN CARD — SEO & Performance report */}
      <motion.div
        {...float(7, 4.5, 0)}
        className="absolute top-0 right-0 w-[340px] bg-white rounded-2xl border border-brand-gray-200 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-brand-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-gray-100 rounded-lg flex items-center justify-center">
              <Globe size={12} className="text-brand-gray-700" />
            </div>
            <span className="text-sm font-semibold text-brand-black">Site Report</span>
          </div>
          <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Delivered</span>
        </div>

        <div className="grid grid-cols-3 divide-x divide-brand-gray-100">
          {[
            { icon: Search,     label: 'SEO Score',   value: '94',   unit: '/100', color: 'text-emerald-600' },
            { icon: Zap,        label: 'Page Speed',  value: '0.9',  unit: 's',    color: 'text-brand-black' },
            { icon: TrendingUp, label: 'Conversion',  value: '+3.2', unit: 'x',    color: 'text-emerald-600' },
          ].map(({ icon: Icon, label, value, unit, color }) => (
            <div key={label} className="px-4 py-4">
              <div className="flex items-center gap-1 mb-2">
                <Icon size={10} className="text-brand-gray-400" />
                <span className="text-[9px] text-brand-gray-400 uppercase tracking-wide">{label}</span>
              </div>
              <p className="text-base font-extrabold text-brand-black leading-none">
                <span className={color}>{value}</span>
                <span className="text-xs text-brand-gray-400 font-normal">{unit}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="px-5 pb-4 pt-1 space-y-2">
          {[
            'Mobile responsive',
            'Core Web Vitals ✔',
            'Schema markup added',
            'Google indexed',
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-2"
            >
              <CheckCircle size={12} className="text-emerald-500 flex-shrink-0" />
              <span className="text-[12px] text-brand-gray-600">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FLOATING CARD — Client review */}
      <motion.div
        {...float(5, 5, 0.6)}
        className="absolute bottom-10 right-2 w-[190px] bg-white rounded-xl border border-brand-gray-200 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.10)] p-3.5"
      >
        <div className="flex gap-0.5 mb-2">
          {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-amber-400 text-amber-400" />)}
        </div>
        <p className="text-[11px] text-brand-gray-700 leading-snug italic">
          &ldquo;Launched in 3 weeks. Got our first lead the same day.&rdquo;
        </p>
        <p className="text-[10px] text-brand-gray-400 mt-2">Priya Designs · Client</p>
      </motion.div>

      {/* FLOATING CARD — Launch status */}
      <motion.div
        {...float(6, 3.5, 1)}
        className="absolute top-10 -left-2 w-[150px] bg-brand-black rounded-xl p-3.5 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.28)]"
      >
        <div className="flex items-center gap-1.5 mb-2">
          <CheckCircle size={11} className="text-emerald-400" />
          <span className="text-[11px] font-semibold text-white">On-time Launch</span>
        </div>
        <p className="text-[22px] font-extrabold text-white leading-none">3 wk</p>
        <p className="text-[10px] text-brand-gray-500 mt-1">Avg. to delivery</p>
        <div className="mt-3 w-full h-1 bg-brand-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.1, delay: 0.9, ease: 'easeOut' }}
            className="h-full bg-emerald-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* FLOATING CARD — Leads */}
      <motion.div
        {...float(4, 4, 0.8)}
        className="absolute bottom-0 left-6 w-[148px] bg-white rounded-xl border border-brand-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] p-3.5"
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <TrendingUp size={11} className="text-brand-gray-400" />
          <span className="text-[10px] text-brand-gray-500 uppercase tracking-wide">Leads this month</span>
        </div>
        <p className="text-[22px] font-extrabold text-brand-black leading-none">+14</p>
        <p className="text-[10px] font-medium text-emerald-600 mt-1">vs 3 last month</p>
      </motion.div>
    </div>
  )
}

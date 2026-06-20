import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign, BarChart2, CheckCircle, Clock } from 'lucide-react'

const float = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
}

export default function HeroMockup() {
  return (
    <div className="relative w-[520px] h-[440px] select-none">

      {/* ── MAIN DASHBOARD CARD ── */}
      <motion.div
        {...float}
        className="absolute top-0 right-0 w-[380px] bg-white rounded-2xl border border-brand-gray-200 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] overflow-hidden"
      >
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-brand-gray-100 rounded-lg flex items-center justify-center">
              <BarChart2 size={14} className="text-brand-gray-700" />
            </div>
            <span className="text-sm font-semibold text-brand-black">Site Analytics</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 divide-x divide-brand-gray-100 px-1">
          {[
            { icon: DollarSign, label: 'Revenue',  value: '₹2.4L', trend: '+18%' },
            { icon: Users,      label: 'Visitors', value: '3,840',  trend: '+34%' },
            { icon: TrendingUp, label: 'Conv. Rate',value: '4.7%',  trend: '+2x' },
          ].map(({ icon: Icon, label, value, trend }) => (
            <div key={label} className="px-4 py-4">
              <div className="flex items-center gap-1.5 mb-2">
                <Icon size={12} className="text-brand-gray-400" />
                <span className="text-[10px] text-brand-gray-400 uppercase tracking-wide">{label}</span>
              </div>
              <p className="text-lg font-bold text-brand-black leading-none">{value}</p>
              <p className="text-[11px] font-medium text-emerald-600 mt-1">{trend}</p>
            </div>
          ))}
        </div>

        {/* Mini bar chart */}
        <div className="px-5 pb-4 pt-2">
          <div className="flex items-end gap-1.5 h-12">
            {[30, 55, 40, 72, 60, 85, 68, 92, 75, 88, 70, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.04, ease: 'easeOut' }}
                style={{ height: `${h}%`, originY: 1 }}
                className={`flex-1 rounded-sm ${
                  i === 11 ? 'bg-brand-black' : 'bg-brand-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[9px] text-brand-gray-400">Jan</span>
            <span className="text-[9px] text-brand-gray-400">Jun</span>
          </div>
        </div>
      </motion.div>

      {/* ── FLOATING CARD: CRM Workflow ── */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-16 right-4 w-[200px] bg-white rounded-xl border border-brand-gray-200 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.10)] p-3.5"
      >
        <p className="text-[11px] font-semibold text-brand-black mb-2.5">Lead Pipeline</p>
        {[
          { label: 'Discovery call', status: 'done' },
          { label: 'Proposal sent', status: 'done' },
          { label: 'Contract signed', status: 'active' },
          { label: 'Build started', status: 'pending' },
        ].map(({ label, status }) => (
          <div key={label} className="flex items-center gap-2 py-1">
            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
              status === 'done'    ? 'bg-emerald-500' :
              status === 'active'  ? 'bg-brand-black' :
                                     'bg-brand-gray-300'
            }`} />
            <span className={`text-[11px] ${
              status === 'active' ? 'font-semibold text-brand-black' : 'text-brand-gray-500'
            }`}>{label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── FLOATING CARD: Project Status ── */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-8 -left-4 w-[160px] bg-brand-black rounded-xl p-3.5 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)]"
      >
        <div className="flex items-center gap-1.5 mb-2.5">
          <CheckCircle size={12} className="text-emerald-400" />
          <span className="text-[11px] font-semibold text-white">Project Status</span>
        </div>
        <p className="text-[22px] font-extrabold text-white leading-none">Live</p>
        <p className="text-[10px] text-brand-gray-500 mt-1">Launched on time</p>
        <div className="mt-3 w-full h-1 bg-brand-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
            className="h-full bg-emerald-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* ── FLOATING CARD: Speed ── */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-0 left-8 w-[140px] bg-white rounded-xl border border-brand-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] p-3.5"
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Clock size={11} className="text-brand-gray-400" />
          <span className="text-[10px] text-brand-gray-500 uppercase tracking-wide">Load time</span>
        </div>
        <p className="text-[20px] font-extrabold text-brand-black leading-none">0.8s</p>
        <div className="flex items-center gap-1 mt-1.5">
          <span className="text-[10px] font-medium text-emerald-600">Top 5%</span>
          <span className="text-[10px] text-brand-gray-400">of all sites</span>
        </div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Mail, CheckCircle, Calendar, Clock, Video } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function getTomorrow() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return {
    day: d.getDate(),
    month: d.toLocaleString('default', { month: 'short' }),
    weekday: d.toLocaleString('default', { weekday: 'short' }),
  }
}

function CalendarStrip({ dark }) {
  const today = new Date()
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    return {
      day: d.getDate(),
      weekday: d.toLocaleString('default', { weekday: 'narrow' }),
      isToday: i === 0,
      isTomorrow: i === 1,
    }
  })

  return (
    <div className="flex justify-between mb-4">
      {days.map(({ day, weekday, isToday, isTomorrow }) => (
        <div
          key={day}
          className={`flex flex-col items-center gap-1 px-1 py-1.5 rounded-lg ${
            isTomorrow
              ? 'bg-white'
              : isToday
              ? dark ? 'bg-white/10' : 'bg-brand-gray-100'
              : ''
          }`}
        >
          <span className={`text-[8px] font-medium ${
            isTomorrow
              ? 'text-brand-black'
              : dark ? 'text-white/40' : 'text-gray-400'
          }`}>{weekday}</span>
          <span className={`text-[11px] font-bold ${
            isTomorrow
              ? 'text-brand-black'
              : isToday
              ? dark ? 'text-white' : 'text-brand-black'
              : dark ? 'text-white/50' : 'text-gray-500'
          }`}>{day}</span>
        </div>
      ))}
    </div>
  )
}

export default function ContactMockup({ dark = false }) {
  const tomorrow = getTomorrow()

  const cardCls = dark
    ? 'bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm'
    : 'bg-white border border-brand-gray-200 rounded-xl overflow-hidden'

  const headerCls = dark
    ? 'px-3 py-2.5 border-b border-white/10 flex items-center gap-2'
    : 'px-3 py-2.5 border-b border-brand-gray-100 flex items-center gap-2'

  const labelCls = dark ? 'text-[10px] font-semibold text-white/70' : 'text-[10px] font-semibold text-brand-gray-700'
  const mutedTextCls = dark ? 'text-white/30' : 'text-gray-400'
  const iconCls = dark ? 'text-white/50' : 'text-brand-gray-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease }}
      className="mt-0 grid grid-cols-2 gap-3"
    >

      {/* ── LEFT: Email Inbox ── */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6, ease }}
        className={cardCls}
        style={dark ? {} : { boxShadow: '0 4px 20px -4px rgba(0,0,0,0.08)' }}
      >
        <div className={headerCls}>
          <Mail size={11} className={iconCls} />
          <span className={labelCls}>Inbox</span>
          <span className="ml-auto bg-white text-brand-black text-[8px] font-bold px-1.5 py-0.5 rounded-full">1</span>
        </div>

        {/* Faded read email */}
        <div className="px-3 py-2.5 border-b border-white/5 opacity-40">
          <div className="flex items-center justify-between mb-0.5">
            <span className={`text-[9px] font-medium ${mutedTextCls}`}>Dribbble</span>
            <span className={`text-[8px] ${mutedTextCls}`}>2d ago</span>
          </div>
          <p className={`text-[9px] ${mutedTextCls} truncate`}>Your weekly design shots are ready…</p>
        </div>

        {/* UNREAD — T&J reply */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className={`px-3 py-3 relative border-b ${
            dark ? 'bg-white/5 border-white/10' : 'bg-blue-50/60 border-blue-100'
          }`}
        >
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#4d9ef6]" />
          <div className="flex items-center justify-between mb-0.5">
            <span className={`text-[9px] font-bold ${dark ? 'text-white' : 'text-brand-black'}`}>T&amp;J Creates</span>
            <span className="text-[8px] text-[#4d9ef6] font-medium">4 hrs ago</span>
          </div>
          <p className={`text-[9px] font-semibold truncate mb-0.5 ${dark ? 'text-white' : 'text-brand-black'}`}>Re: Your project enquiry</p>
          <p className={`text-[8px] leading-snug line-clamp-2 ${dark ? 'text-white/60' : 'text-gray-500'}`}>
            Hi! We've reviewed your brief — looks like a great fit. Ready to book your free discovery call?
          </p>
          <div className="mt-1.5 flex items-center gap-1">
            <CheckCircle size={8} className="text-emerald-400" />
            <span className="text-[7.5px] text-emerald-400 font-medium">Replied in 4 hours</span>
          </div>
        </motion.div>

        {/* Faded read email */}
        <div className="px-3 py-2.5 opacity-30">
          <div className="flex items-center justify-between mb-0.5">
            <span className={`text-[9px] font-medium ${mutedTextCls}`}>GitHub</span>
            <span className={`text-[8px] ${mutedTextCls}`}>3d ago</span>
          </div>
          <p className={`text-[9px] ${mutedTextCls} truncate`}>Your pull request was merged…</p>
        </div>
      </motion.div>

      {/* ── RIGHT: Calendar ── */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6, ease }}
        className={cardCls}
        style={dark ? {} : { boxShadow: '0 4px 20px -4px rgba(0,0,0,0.08)' }}
      >
        <div className={headerCls}>
          <Calendar size={11} className={iconCls} />
          <span className={labelCls}>Calendar</span>
          <span className={`ml-auto text-[8px] ${mutedTextCls}`}>{tomorrow.month}</span>
        </div>

        <div className="px-3 py-3">
          <CalendarStrip dark={dark} />

          {/* Booked slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.45, ease }}
            className={`rounded-lg p-2.5 ${
              dark ? 'bg-white text-brand-black' : 'bg-brand-black'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Video size={9} className={dark ? 'text-emerald-600 flex-shrink-0' : 'text-emerald-400 flex-shrink-0'} />
              <span className={`text-[9px] font-bold leading-tight ${dark ? 'text-brand-black' : 'text-white'}`}>Discovery call</span>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <Clock size={8} className={dark ? 'text-gray-400' : 'text-gray-400'} />
              <span className={`text-[8px] ${dark ? 'text-gray-600' : 'text-gray-300'}`}>10:00 – 10:30 AM</span>
            </div>
            <div className="flex items-center gap-1">
              <span className={`text-[7.5px] ${dark ? 'text-gray-500' : 'text-gray-500'}`}>{tomorrow.weekday}, {tomorrow.month} {tomorrow.day}</span>
              <span className={`ml-auto text-[7px] font-semibold px-1.5 py-0.5 rounded-full ${
                dark ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-500/20 text-emerald-400'
              }`}>30 min</span>
            </div>
          </motion.div>

          {/* Empty slots */}
          <div className="mt-2 space-y-1.5">
            {['11:00 AM', '2:00 PM'].map(time => (
              <div key={time} className="flex items-center gap-2 px-1">
                <span className={`text-[8px] w-12 flex-shrink-0 ${dark ? 'text-white/20' : 'text-gray-300'}`}>{time}</span>
                <div className={`flex-1 h-px border border-dashed ${dark ? 'border-white/10' : 'border-gray-200'}`} />
                <span className={`text-[7px] ${dark ? 'text-white/20' : 'text-gray-300'}`}>Free</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { Mail, CheckCircle, Calendar, Clock, Video } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

// Get tomorrow's date info
function getTomorrow() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return {
    day: d.getDate(),
    month: d.toLocaleString('default', { month: 'short' }),
    weekday: d.toLocaleString('default', { weekday: 'short' }),
  }
}

// Mini 7-day calendar strip
function CalendarStrip() {
  const tomorrow = getTomorrow()
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
          className={`flex flex-col items-center gap-1 px-1.5 py-1.5 rounded-lg transition-colors ${
            isTomorrow
              ? 'bg-brand-black'
              : isToday
              ? 'bg-brand-gray-100'
              : ''
          }`}
        >
          <span className={`text-[8px] font-medium ${
            isTomorrow ? 'text-white/70' : 'text-gray-400'
          }`}>{weekday}</span>
          <span className={`text-[11px] font-bold ${
            isTomorrow ? 'text-white' : isToday ? 'text-brand-black' : 'text-gray-500'
          }`}>{day}</span>
        </div>
      ))}
    </div>
  )
}

export default function ContactMockup() {
  const tomorrow = getTomorrow()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease }}
      className="mt-8 grid grid-cols-2 gap-3"
    >

      {/* ── LEFT: Email Inbox ── */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6, ease }}
        className="bg-white border border-brand-gray-200 rounded-xl overflow-hidden"
        style={{ boxShadow: '0 4px 20px -4px rgba(0,0,0,0.08)' }}
      >
        {/* Inbox header */}
        <div className="px-3 py-2.5 border-b border-brand-gray-100 flex items-center gap-2">
          <Mail size={11} className="text-brand-gray-500" />
          <span className="text-[10px] font-semibold text-brand-gray-700">Inbox</span>
          <span className="ml-auto bg-brand-black text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">1</span>
        </div>

        {/* Read email — older */}
        <div className="px-3 py-2.5 border-b border-brand-gray-50 opacity-50">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[9px] font-medium text-gray-500">Dribbble</span>
            <span className="text-[8px] text-gray-400">2d ago</span>
          </div>
          <p className="text-[9px] text-gray-400 truncate">Your weekly design shots are ready…</p>
        </div>

        {/* UNREAD — T&J reply */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="px-3 py-3 bg-blue-50/60 border-b border-blue-100 relative"
        >
          {/* Unread dot */}
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#4d9ef6]" />
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[9px] font-bold text-brand-black">T&amp;J Creates</span>
            <span className="text-[8px] text-[#4d9ef6] font-medium">4 hrs ago</span>
          </div>
          <p className="text-[9px] font-semibold text-brand-black truncate mb-0.5">Re: Your project enquiry</p>
          <p className="text-[8px] text-gray-500 leading-snug line-clamp-2">
            Hi! We've reviewed your brief — looks like a great fit. Ready to book your free discovery call?
          </p>
          <div className="mt-1.5 flex items-center gap-1">
            <CheckCircle size={8} className="text-emerald-500" />
            <span className="text-[7.5px] text-emerald-600 font-medium">Replied in 4 hours</span>
          </div>
        </motion.div>

        {/* Read email — older */}
        <div className="px-3 py-2.5 opacity-40">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[9px] font-medium text-gray-500">GitHub</span>
            <span className="text-[8px] text-gray-400">3d ago</span>
          </div>
          <p className="text-[9px] text-gray-400 truncate">Your pull request was merged…</p>
        </div>
      </motion.div>

      {/* ── RIGHT: Calendar ── */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6, ease }}
        className="bg-white border border-brand-gray-200 rounded-xl overflow-hidden"
        style={{ boxShadow: '0 4px 20px -4px rgba(0,0,0,0.08)' }}
      >
        {/* Calendar header */}
        <div className="px-3 py-2.5 border-b border-brand-gray-100 flex items-center gap-2">
          <Calendar size={11} className="text-brand-gray-500" />
          <span className="text-[10px] font-semibold text-brand-gray-700">Calendar</span>
          <span className="ml-auto text-[8px] text-gray-400">{tomorrow.month}</span>
        </div>

        <div className="px-3 py-3">
          {/* 7-day strip */}
          <CalendarStrip />

          {/* Booked slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.45, ease }}
            className="bg-brand-black rounded-lg p-2.5"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Video size={9} className="text-emerald-400 flex-shrink-0" />
              <span className="text-[9px] font-bold text-white leading-tight">Discovery call</span>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <Clock size={8} className="text-gray-400 flex-shrink-0" />
              <span className="text-[8px] text-gray-300">10:00 – 10:30 AM</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[7.5px] text-gray-500">{tomorrow.weekday}, {tomorrow.month} {tomorrow.day}</span>
              <span className="ml-auto bg-emerald-500/20 text-emerald-400 text-[7px] font-semibold px-1.5 py-0.5 rounded-full">30 min</span>
            </div>
          </motion.div>

          {/* Empty slots */}
          <div className="mt-2 space-y-1.5">
            {['11:00 AM', '2:00 PM'].map(time => (
              <div key={time} className="flex items-center gap-2 px-1">
                <span className="text-[8px] text-gray-300 w-12 flex-shrink-0">{time}</span>
                <div className="flex-1 h-px border border-dashed border-gray-200" />
                <span className="text-[7px] text-gray-300">Free</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </motion.div>
  )
}

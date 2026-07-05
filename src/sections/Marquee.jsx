import { motion } from 'framer-motion'

// ── TRACK 1: TECHNOLOGIES ───────────────────────────────────────────────────
const TECHNOLOGIES = [
  'React',
  'Next.js',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'AWS',
  'OpenAI',
  'Docker',
  'Tailwind CSS',
  'Supabase',
  'TypeScript',
  'GraphQL',
  'Python',
  'Redis',
]

// ── TRACK 2: CORE FEATURES ─────────────────────────────────────────────────
const CORE_FEATURES = [
  'CMS / Admin Panel',
  'Login & Authentication',
  'CRUD Dashboard',
  'Payments / Checkout',
  'Booking / Scheduling',
  'Search & Filters',
  '3rd-party API Integration',
  'Advanced Animations',
  'Multi-language / i18n',
  'Email Notifications',
  'Role-Based Access Control',
  'Real-time Updates',
  'SEO & JSON-LD Integration',
  'Performance Optimization',
  'Security & Encryption',
]

// ── TRACK 3: SERVICES & PROJECTS ──────────────────────────────────────────
const SERVICES = [
  'Web Development',
  'Custom Software Development',
  'AI & Machine Learning Solutions',
  'Business Process Automation',
  'E-Commerce Platforms',
  'SaaS Application Development',
  'API Integrations & Backend',
  'UI/UX Engineering & Design Systems',
  'Cloud Architecture & DevOps',
  'Shreephal Handicrafts',
  'Ashray Wellness',
  'The Preceptor',
]

export default function Marquee() {
  const track1Items = [...TECHNOLOGIES, ...TECHNOLOGIES]
  const track2Items = [...CORE_FEATURES, ...CORE_FEATURES]
  const track3Items = [...SERVICES, ...SERVICES]

  return (
    <div className="relative overflow-hidden border-y border-brand-gray-100 bg-white py-8">
      {/* Side Fade Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 md:w-36 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 md:w-36 bg-gradient-to-l from-white to-transparent" />

      <div className="flex flex-col gap-6">
        {/* TRACK 1: Technologies (Moves Left) */}
        <div className="overflow-hidden flex">
          <motion.div
            animate={{ x: ['0%', '-30%'] }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
            className="flex items-center gap-12 whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {track1Items.map((item, i) => (
              <MarqueeItem key={`t1-${i}`} text={item} />
            ))}
          </motion.div>
        </div>

        {/* TRACK 2: Core Features (Moves Right) */}
        <div className="overflow-hidden flex">
          <motion.div
            animate={{ x: ['-30%', '0%'] }}
            transition={{
              duration: 42,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
            className="flex items-center gap-12 whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {track2Items.map((item, i) => (
              <MarqueeItem key={`t2-${i}`} text={item} />
            ))}
          </motion.div>
        </div>

        {/* TRACK 3: Services & Projects (Moves Left) */}
        <div className="overflow-hidden flex">
          <motion.div
            animate={{ x: ['0%', '-30%'] }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
            className="flex items-center gap-12 whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {track3Items.map((item, i) => (
              <MarqueeItem key={`t3-${i}`} text={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function MarqueeItem({ text }) {
  return (
    <div className="text-lg sm:text md:text-xl font-medium text-brand-gray-700 tracking-tight hover:text-brand-black transition-colors duration-200 flex items-center gap-12 select-none">
      <span>{text}</span>
      <span className="w-2 h-2 rounded-full bg-brand-gray-300 shrink-0" />
    </div>
  )
}

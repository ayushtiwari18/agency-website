import { motion } from 'framer-motion'

const CLIENTS = [
  'Rahul M.',
  'Priya Designs',
  'NexaStudio',
  'Freelance Devs',
  'StartupIndia',
  'BrandForge',
  'PixelCraft',
  'GrowthLabs',
]

export default function Marquee() {
  const repeated = [...CLIENTS, ...CLIENTS, ...CLIENTS]
  return (
    <div className="overflow-hidden border-y border-brand-gray-100 py-5 bg-white">
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex gap-12 whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {repeated.map((name, i) => (
          // contrast fix: brand-gray-400 (#a3a3a3) on white = 2.52 ✗ → brand-gray-600 (#525252) = 7.0 ✓
          <span key={i} className="text-sm font-medium text-brand-gray-600 tracking-wide">
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'

const CLIENTS = [
  { name: 'Shreephal Handicrafts', url: 'https://shreephalhandicrafts.com/' },
  { name: 'Ashray Wellness',       url: 'https://ashray-wellness.com/' },
  { name: 'The Preceptor',         url: 'https://www.thepreceptorglobal.com/' },
]

export default function Marquee() {
  const repeated = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS]
  return (
    <div className="overflow-hidden border-y border-brand-gray-100 py-5 bg-white">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex gap-16 whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {repeated.map((client, i) => (
          <a
            key={i}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-gray-600 tracking-wide hover:text-brand-black transition-colors duration-200"
          >
            {client.name}
          </a>
        ))}
      </motion.div>
    </div>
  )
}

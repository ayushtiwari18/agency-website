import { motion } from 'framer-motion'

const dirs = {
  up:    { y: 28, x: 0 },
  down:  { y: -28, x: 0 },
  left:  { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none:  { y: 0, x: 0 },
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

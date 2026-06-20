import { motion } from 'framer-motion'

const directionMap = {
  up:    { y: 28, x: 0 },
  down:  { y: -20, x: 0 },
  left:  { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none:  { x: 0,  y: 0 },
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.65,
  direction = 'up',
  className = '',
  once = true,
  amount = 0.15,
}) {
  const { x, y } = directionMap[direction] ?? directionMap.up

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

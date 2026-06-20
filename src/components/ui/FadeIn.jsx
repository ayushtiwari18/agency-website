import { motion } from 'framer-motion'

const directionMap = {
  up:    { y: 24, x: 0 },
  down:  { y: -16, x: 0 },
  left:  { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none:  { x: 0,  y: 0 },
}

/**
 * Buttery FadeIn — elements appear WHILE scrolling into view,
 * not after. margin: '-40px' triggers early so the card is
 * already animating before it hits centre.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  className = '',
  once = true,
}) {
  const { x, y } = directionMap[direction] ?? directionMap.up

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-40px', amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

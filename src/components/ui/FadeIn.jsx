import { motion } from 'framer-motion'

const directionMap = {
  up:    { y: 20, x: 0 },
  down:  { y: -14, x: 0 },
  left:  { x: 20, y: 0 },
  right: { x: -20, y: 0 },
  none:  { x: 0,  y: 0 },
}

/**
 * FadeIn tuned for native scroll:
 * - Very early trigger (margin: '-10px', amount: 0.01)
 *   so animation starts the moment the element enters viewport
 * - Short duration so it completes while scrolling past
 * - No layout-triggering props (no scale, no rotateX)
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  className = '',
  once = true,
}) {
  const { x, y } = directionMap[direction] ?? directionMap.up

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-10px', amount: 0.01 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo out — fast start, soft land
      }}
      className={className}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  )
}

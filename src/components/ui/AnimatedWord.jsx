import { motion } from 'framer-motion'

/**
 * Splits text into words and staggers each word up into view.
 * Used for hero headlines.
 */
export function AnimatedWord({ text, className = '', delay = 0 }) {
  const words = text.split(' ')

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  }

  const word = {
    hidden: { opacity: 0, y: 48, rotateX: -20 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
      style={{ perspective: 800 }}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} style={{ display: 'inline-block' }}>
          {w}
        </motion.span>
      ))}
    </motion.span>
  )
}

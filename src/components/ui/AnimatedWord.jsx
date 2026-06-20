import { motion } from 'framer-motion'

/**
 * Splits text into words and staggers each word upward.
 * NO rotateX — pure Y + opacity. Eliminates perspective glitch.
 */
export function AnimatedWord({ text, className = '', delay = 0 }) {
  const words = text.split(' ')

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  }

  const word = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
    >
      {words.map((w, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span variants={word} style={{ display: 'inline-block' }}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

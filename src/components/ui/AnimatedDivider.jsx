import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * A horizontal rule that draws itself left-to-right (scaleX 0→1)
 * using expo-out easing over 900ms when it enters the viewport.
 */
export function AnimatedDivider({ className = '' }) {
  const { ref, revealed } = useScrollReveal({ once: true })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        animate={revealed ? { scaleX: 1 } : { scaleX: 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="h-px w-full bg-brand-gray-200"
      />
    </div>
  )
}

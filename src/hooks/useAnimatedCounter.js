import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animates a number from 0 to `end` over `duration` ms
 * only once when the element scrolls into view.
 */
export function useAnimatedCounter(end, duration = 1800, suffix = '') {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime = null
    const numericEnd = parseFloat(end)

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericEnd))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(numericEnd)
    }

    requestAnimationFrame(tick)
  }, [isInView, end, duration])

  return { ref, display: `${count}${suffix}` }
}

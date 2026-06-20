import { useEffect, useRef, useState } from 'react'

/**
 * Layer 5 — Slot-machine number ticker.
 * Digits blur through intermediate values before landing.
 * Triggers once on IntersectionObserver hit.
 */
export function useAnimatedCounter(end, duration = 1600, suffix = '') {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [blur, setBlur] = useState(false)
  const triggered = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          observer.disconnect()

          const numericEnd = parseFloat(end)
          let startTime = null
          setBlur(true)

          const tick = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            // Expo ease out
            const eased = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(eased * numericEnd)
            setCount(current)

            if (progress < 0.85) {
              // blur during slot roll
              setBlur(true)
            } else {
              setBlur(false)
            }

            if (progress < 1) {
              requestAnimationFrame(tick)
            } else {
              setCount(numericEnd)
              setBlur(false)
            }
          }

          requestAnimationFrame(tick)
        }
      },
      { rootMargin: '0px 0px -1px 0px', threshold: 0 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return {
    ref,
    display: `${count}${suffix}`,
    style: {
      filter: blur ? 'blur(3px)' : 'blur(0px)',
      transition: blur ? 'filter 80ms' : 'filter 300ms ease',
    },
  }
}

import { useEffect, useRef, useState } from 'react'

/**
 * IntersectionObserver-based reveal.
 * Fires the instant the element enters the bottom of viewport.
 */
export function useScrollReveal({ once = true, delay = 0 } = {}) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const t = setTimeout(() => setRevealed(true), delay)
            if (once) observer.disconnect()
            return () => clearTimeout(t)
          }
          setRevealed(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setRevealed(false)
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -1px 0px',
        threshold: 0,
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, delay])

  return { ref, revealed }
}

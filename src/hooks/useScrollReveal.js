import { useEffect, useRef, useState } from 'react'

/**
 * Fires the instant the element's top edge crosses
 * the bottom of the viewport. No delay, no debounce.
 */
export function useScrollReveal({ once = true } = {}) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If element is already above the fold on load — reveal immediately
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, [once])

  return { ref, revealed }
}

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal({ once = true } = {}) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

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
        // negative bottom margin = element must be 80px INTO the viewport
        // before it was 0px = fired when top pixel JUST entered bottom edge
        // This means elements that start in viewport (hero) fire immediately,
        // elements below fold stay hidden until user actually scrolls to them
        rootMargin: '0px 0px -80px 0px',
        threshold: 0,
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return { ref, revealed }
}

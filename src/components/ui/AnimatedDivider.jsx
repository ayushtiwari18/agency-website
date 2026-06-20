import { useRef, useState, useEffect } from 'react'

/**
 * Layer 4 — Divider line that draws itself left-to-right
 * the moment it enters the viewport.
 */
export function AnimatedDivider({ className = '', delay = 0 }) {
  const ref = useRef(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight) { setDrawn(true); return }
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setDrawn(true); observer.disconnect() } },
      { rootMargin: '0px 0px -1px 0px', threshold: 0 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ height: '1px', background: 'transparent' }}
    >
      <div
        style={{
          height: '1px',
          background: 'currentColor',
          opacity: 0.15,
          transformOrigin: 'left center',
          transform: drawn ? 'scaleX(1)' : 'scaleX(0)',
          transition: `transform 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          willChange: 'transform',
        }}
      />
    </div>
  )
}

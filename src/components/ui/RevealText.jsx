import { useRef, useState, useEffect } from 'react'

/**
 * Layer 1 — Line-by-line clip reveal.
 * Each line slides up from behind a clip mask.
 * Looks editorial. Used on all section H2s.
 */
export function RevealText({ children, as: Tag = 'h2', className = '', delay = 0 }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight) { setRevealed(true); return }
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRevealed(true); observer.disconnect() } },
      { rootMargin: '0px 0px -1px 0px', threshold: 0 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Split into lines by wrapping in a clip container
  const lines = typeof children === 'string'
    ? children.split('\n')
    : [children]

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
          <span
            style={{
              display: 'block',
              transform: revealed ? 'translateY(0)' : 'translateY(105%)',
              opacity: revealed ? 1 : 0,
              transition: `transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay + i * 80}ms, opacity 400ms ease ${delay + i * 80}ms`,
              willChange: 'transform',
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}

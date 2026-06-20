import { useRef, useState, useEffect } from 'react'

/**
 * Layer 1 — Line-by-line clip reveal.
 * Each \n-delimited line slides up from behind an overflow:hidden clip.
 * className is applied to the Tag so max-w, font-size etc. all work correctly.
 */
export function RevealText({ children, as: Tag = 'h2', className = '', delay = 0 }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If already in viewport on mount, reveal immediately
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight - 80) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      // -80px: element must be 80px inside viewport before revealing
      { rootMargin: '0px 0px -80px 0px', threshold: 0 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const lines = typeof children === 'string'
    ? children.split('\n')
    : [children]

  return (
    // className goes on the Tag — so max-w-*, font-size, tracking all apply correctly
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: 'block',
            overflow: 'hidden',
            // tiny padding so descenders (g, y, p) don’t clip
            paddingBottom: '0.06em',
          }}
        >
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

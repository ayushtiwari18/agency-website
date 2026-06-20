import { useEffect, useRef } from 'react'

/**
 * Layer 2 — Cursor glow for dark sections.
 * Soft radial gradient follows mouse with spring lag.
 * GPU composited — zero layout impact.
 */
export function CursorGlow({ color = 'rgba(255,255,255,0.07)', size = 400 }) {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const parent = el.parentElement
    if (!parent) return

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect()
      pos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.08)
      current.current.y = lerp(current.current.y, pos.current.y, 0.08)
      el.style.background = `radial-gradient(${size}px circle at ${current.current.x}px ${current.current.y}px, ${color}, transparent 70%)`
      raf.current = requestAnimationFrame(tick)
    }

    parent.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    return () => {
      parent.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [color, size])

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        borderRadius: 'inherit',
        transition: 'opacity 0.3s',
      }}
    />
  )
}

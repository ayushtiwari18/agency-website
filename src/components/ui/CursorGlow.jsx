import { useEffect, useRef } from 'react'

/**
 * CursorGlow — soft light that follows the mouse inside a dark section.
 *
 * PERFORMANCE FIX (was flagged by Lighthouse as non-composited animation):
 * OLD approach: updated `el.style.background` (radial-gradient) every rAF frame.
 *   → Triggers a PAINT on every frame. Cannot be GPU-composited.
 *
 * NEW approach:
 *   - The gradient lives in a ::before-style pseudo wrapper that is STATIC
 *     (fixed radial-gradient centred at 50% 50%).
 *   - We only move the wrapper via `transform: translate(x, y)` which is
 *     composited — ZERO layout, ZERO paint.
 *   - A fixed `will-change: transform` promotes the layer once at mount.
 */
export function CursorGlow({ color = 'rgba(255,255,255,0.07)', size = 400 }) {
  const wrapRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const curr    = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const el     = wrapRef.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return

    // Make sure parent has a positioning context
    const parentPos = getComputedStyle(parent).position
    if (parentPos === 'static') parent.style.position = 'relative'

    const half = size / 2

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect()
      pos.current = {
        x: e.clientX - rect.left - half,
        y: e.clientY - rect.top  - half,
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      curr.current.x = lerp(curr.current.x, pos.current.x, 0.08)
      curr.current.y = lerp(curr.current.y, pos.current.y, 0.08)
      // Only animating `transform` — composited, no paint
      el.style.transform = `translate(${curr.current.x}px, ${curr.current.y}px)`
      raf.current = requestAnimationFrame(tick)
    }

    parent.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    return () => {
      parent.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [size])

  return (
    <div
      ref={wrapRef}
      aria-hidden
      style={{
        position:      'absolute',
        top:           0,
        left:          0,
        width:         size,
        height:        size,
        borderRadius:  '50%',
        // Static gradient — never changes, never triggers repaint
        background:    `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex:        1,
        // GPU layer promoted once — transform updates stay on compositor
        willChange:    'transform',
        // Start centred so it doesn't flash at top-left on mount
        transform:     'translate(-9999px, -9999px)',
      }}
    />
  )
}

import { Reveal } from './Reveal'

/**
 * Layer 3 — Staggered children reveal.
 * Wraps each child in a Reveal with incremental delay.
 * Use instead of mapping Reveal manually.
 */
export function StaggerReveal({ children, baseDelay = 0, stagger = 90, direction = 'up', className = '' }) {
  const items = Array.isArray(children) ? children : [children]
  return (
    <>
      {items.map((child, i) => (
        <Reveal key={i} delay={baseDelay + i * stagger} direction={direction} className={className}>
          {child}
        </Reveal>
      ))}
    </>
  )
}

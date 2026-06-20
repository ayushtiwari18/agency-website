import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * CSS-based reveal for buttery smooth viewport entry.
 * No Framer whileInView overhead.
 */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const { ref, revealed } = useScrollReveal({ once, delay })

  const directionClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    none: 'reveal-none',
  }[direction] || 'reveal-up'

  return (
    <div
      ref={ref}
      className={[
        'reveal-base',
        directionClass,
        revealed ? 'is-revealed' : '',
        className,
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

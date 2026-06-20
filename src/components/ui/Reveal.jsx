import { useScrollReveal } from '../../hooks/useScrollReveal'

const HIDDEN_TRANSFORMS = {
  up:    'translate3d(0, 32px, 0)',
  down:  'translate3d(0, -24px, 0)',
  left:  'translate3d(24px, 0, 0)',
  right: 'translate3d(-24px, 0, 0)',
  none:  'translate3d(0, 0, 0)',
}

/**
 * Elements start hidden via INLINE STYLE (not CSS class)
 * so opacity:0 is guaranteed before any stylesheet loads.
 * On reveal, transition to opacity:1 + translate(0,0,0).
 */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const { ref, revealed } = useScrollReveal({ once })

  const hiddenTransform = HIDDEN_TRANSFORMS[direction] ?? HIDDEN_TRANSFORMS.up

  const style = revealed
    ? {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transition: `opacity 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'auto',
      }
    : {
        opacity: 0,
        transform: hiddenTransform,
        transition: 'none',
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
      }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

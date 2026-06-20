/**
 * FadeIn is now an alias for Reveal.
 * Kept so any page-level imports don't break.
 * delay prop: Framer used seconds (0.08), Reveal uses ms (80) — convert here.
 */
import { Reveal } from './Reveal'

export function FadeIn({ children, delay = 0, direction = 'up', className = '', once = true }) {
  // Old FadeIn used delay in seconds, Reveal uses ms
  const delayMs = delay < 2 ? Math.round(delay * 1000) : delay
  return (
    <Reveal delay={delayMs} direction={direction} className={className} once={once}>
      {children}
    </Reveal>
  )
}

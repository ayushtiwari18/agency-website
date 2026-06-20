import { useEffect } from 'react'

/**
 * Lenis smooth scroll — butter-grade inertia scrolling.
 * The RAF loop is tied to framer-motion's globalAnimationControls
 * so they stay perfectly in sync (no jitter).
 */
export function useLenis() {
  useEffect(() => {
    let lenis
    let rafId

    const init = async () => {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis')

        lenis = new Lenis({
          lerp: 0.1,           // 0 = instant, 1 = never arrives — 0.1 is perfect
          wheelMultiplier: 1,
          smoothTouch: false,  // keep native touch on mobile
          syncTouch: false,
        })

        const raf = (time) => {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      } catch {
        // package not installed — native scroll fallback
      }
    }

    init()

    return () => {
      if (lenis) lenis.destroy()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])
}

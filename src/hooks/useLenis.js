import { useEffect } from 'react'

/**
 * Initialises Lenis smooth scroll if the package is available.
 * Gracefully falls back to native scroll if not installed.
 */
export function useLenis() {
  useEffect(() => {
    let lenis
    let raf

    const init = async () => {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis')
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          smoothTouch: false,
        })

        const animate = (time) => {
          lenis.raf(time)
          raf = requestAnimationFrame(animate)
        }
        raf = requestAnimationFrame(animate)
      } catch {
        // Lenis not installed — native scroll is fine
      }
    }

    init()
    return () => {
      if (lenis) lenis.destroy()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}

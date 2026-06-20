import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * Slot-machine style counter.
 * Ticks from 0 to the numeric part of `value` with blur during roll.
 * Suffix ('+', '%', etc.) appends immediately after.
 */
export function SlotCounter({ value, className = '' }) {
  // Split e.g. "10+" → num=10, suffix="+" | "100%" → num=100, suffix="%"
  const match = String(value).match(/^(\d+)(.*)/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''

  const { ref, revealed } = useScrollReveal({ once: true })
  const [display, setDisplay] = useState(0)
  const [rolling, setRolling] = useState(false)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    if (!revealed) return
    const DURATION = 1600
    setRolling(true)
    startRef.current = null

    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(elapsed / DURATION, 1)
      // expo-out easing
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(target)
        setRolling(false)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [revealed, target])

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        filter: rolling ? 'blur(2px)' : 'blur(0px)',
        transition: rolling ? 'none' : 'filter 200ms ease-out',
        willChange: 'filter',
      }}
    >
      {display}{suffix}
    </span>
  )
}

import { useState, useEffect } from 'react'

export function useCountdown(durationInDays = 50) {
  const [timeLeft, setTimeLeft] = useState({
    days: durationInDays,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // 50 days in milliseconds
    const durationMs = durationInDays * 24 * 60 * 60 * 1000

    // Retrieve or initialize the target date in localStorage
    let targetDateStr = localStorage.getItem('tj_pricing_offer_target')
    let targetDate = targetDateStr ? parseInt(targetDateStr, 10) : null

    if (!targetDate || isNaN(targetDate) || targetDate < Date.now()) {
      targetDate = Date.now() + durationMs
      localStorage.setItem('tj_pricing_offer_target', targetDate.toString())
    }

    const calculateTimeLeft = () => {
      const difference = targetDate - Date.now()
      
      if (difference <= 0) {
        // Reset to another 50 days if it expires, to keep the offer active
        const newTarget = Date.now() + durationMs
        localStorage.setItem('tj_pricing_offer_target', newTarget.toString())
        return { days: durationInDays, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    // Set initial values
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [durationInDays])

  return timeLeft
}

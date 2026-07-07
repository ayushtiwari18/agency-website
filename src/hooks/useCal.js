import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

export function useCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  const openBooking = async (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault()
    }
    const cal = await getCalApi({ namespace: '30min' })
    cal('modal', {
      calLink: 'archi-jain-23/30min',
      config: {
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
      },
    })
  }

  return openBooking
}

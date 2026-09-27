'use client'

import { useEffect, useState } from 'react'
import type { YouTubeEvent } from '@/app/utility/types'

interface UseEventsResult {
  events: YouTubeEvent[]
  loading: boolean
  error: string | null
}

export function useEvents(): UseEventsResult {
  const [events, setEvents] = useState<YouTubeEvent[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/events')
        if (!response.ok) throw new Error('Failed to load events')

        const data = await response.json()

        const sortedEvents = (data.events ?? []).sort((a: YouTubeEvent, b: YouTubeEvent) => {
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)
          return dateA < dateB ? -1 : dateA > dateB ? 1 : 0
        })
        .filter((event: YouTubeEvent) => {
          var eventDate = new Date(event.date)
          eventDate.setHours(23, 59, 59, 999)
          const now = new Date()
          return eventDate >= now
        })

        setEvents(sortedEvents);
      } 
      catch (error) {
        setError(error instanceof Error? error.message : 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  return {
    events,
    loading,
    error,
  }
}
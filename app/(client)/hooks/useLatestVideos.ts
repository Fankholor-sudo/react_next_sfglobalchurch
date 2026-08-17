'use client'

import { useEffect, useState } from 'react'
import type { YouTubeVideo } from '@/app/api/youtube'

interface UseLatestVideosResult {
  videos: YouTubeVideo[]
  loading: boolean
  error: string | null
}

export function useLatestVideos(): UseLatestVideosResult {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadVideos() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/youtube')

        if (!response.ok) {
          throw new Error('Failed to load videos')
        }

        const data = await response.json()
        setVideos(data.videos ?? [])
      } catch (error) {
        setError(error instanceof Error? error.message: 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }
    loadVideos()
  }, [])

  return {
    videos,
    loading,
    error,
  }
}
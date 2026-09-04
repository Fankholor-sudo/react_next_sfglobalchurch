const YOUTUBE_API_URL = process.env.YOUTUBE_API_URL

export type YouTubeVideoDetails = {
  id: string
  contentDetails: {
    duration: string
  }
}

export function parseYouTubeDuration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/,)

  if (!match) return '0 min'

  const hours = Number(match[1] ?? 0)
  const minutes = Number(match[2] ?? 0)

  if (hours > 0) return `${hours}h ${minutes}min`

  return `${minutes} min`
}

export async function fetchVideoDurations(
  videoIds: string[],
): Promise<Map<string, string>> {
  if (videoIds.length === 0) {
    return new Map()
  }

  const apiKey = process.env.YOUTUBE_API_KEY

  if (!apiKey) {
    throw new Error('YOUTUBE_API_KEY is not configured')
  }

  const params = new URLSearchParams({
    part: 'contentDetails',
    id: videoIds.join(','),
    key: apiKey,
  })

  const response = await fetch(
    `${YOUTUBE_API_URL}/videos?${params.toString()}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  )

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)

    throw new Error(
      `YouTube video details request failed: ${
        errorData?.error?.message ?? 'Unknown YouTube API error'
      }`,
    )
  }

  const data: {
    items: YouTubeVideoDetails[]
  } = await response.json()

  const durations = new Map<string, string>()

  for (const video of data.items) {
    durations.set(
      video.id,
      parseYouTubeDuration(video.contentDetails.duration),
    )
  }

  return durations
}
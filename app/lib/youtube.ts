import { formatDate } from './utils'
import { fetchVideoDurations } from './fetchVideoDuration'

const YOUTUBE_API_URL = process.env.YOUTUBE_API_URL
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
const API_KEY = process.env.YOUTUBE_API_KEY

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  publishedAt: string
  duration: string
  thumbnail: string
  url: string
}

interface YouTubePlaylistItem {
  snippet: {
    title: string
    description: string
    publishedAt: string
    thumbnails: {
      maxres?: {
        url: string
      }
      standard?: {
        url: string
      }
      high?: {
        url: string
      }
      medium?: {
        url: string
      }
    }
    resourceId: {
      videoId: string
    }
  }
}

interface YouTubePlaylistResponse {
  items: YouTubePlaylistItem[]
  nextPageToken?: string
}

export async function getLatestYouTubeVideos(
  limit = 10
): Promise<YouTubeVideo[]> {
  if (!CHANNEL_ID) {
    throw new Error('YOUTUBE_CHANNEL_ID is not configured')
  }

  if (!API_KEY) {
    throw new Error('YOUTUBE_API_KEY is not configured')
  }

  // Get the channel's uploads playlist
  const channelUrl = new URL(`${YOUTUBE_API_URL}/channels`)
  channelUrl.searchParams.set('part', 'contentDetails')
  channelUrl.searchParams.set('id', CHANNEL_ID)
  channelUrl.searchParams.set('key', API_KEY)

  const channelResponse = await fetch(channelUrl.toString(), {
    next: {
      revalidate: 3600,
    },
  })

  if (!channelResponse.ok) throw new Error('Failed to fetch YouTube channel')

  const channelData = await channelResponse.json()
  const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads
  if (!uploadsPlaylistId) throw new Error('YouTube uploads playlist was not found')

  // Get videos from uploads playlist
  const videosUrl = new URL(`${YOUTUBE_API_URL}/playlistItems`)
  videosUrl.searchParams.set('part', 'snippet')
  videosUrl.searchParams.set('playlistId', uploadsPlaylistId)
  videosUrl.searchParams.set('maxResults', String(limit))
  videosUrl.searchParams.set('key', API_KEY)

  const videosResponse = await fetch(videosUrl.toString(), {
    next: {
      revalidate: 3600,
    },
  })

  if (!videosResponse.ok) {
    const errorData = await videosResponse.json().catch(() => null)
    throw new Error(errorData?.error?.message ?? 'Failed to fetch YouTube videos')
  }

  const videosData: YouTubePlaylistResponse = await videosResponse.json()
  const videoIds = videosData.items.map((item) => item.snippet.resourceId.videoId)
  const durations = await fetchVideoDurations(videoIds)

  return videosData.items.map((item) => {
    const videoId = item.snippet.resourceId.videoId
    let publishedAt = formatDate(new Date(item.snippet.publishedAt))
    return {
      id: videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: publishedAt,
      duration: durations.get(videoId) || '00:00',
      thumbnail:
        item.snippet.thumbnails.maxres?.url ??
        item.snippet.thumbnails.standard?.url ??
        item.snippet.thumbnails.high?.url ??
        item.snippet.thumbnails.medium?.url ?? '',
      url: `https://www.youtube.com/watch?v=${videoId}`,
    }
  })
}
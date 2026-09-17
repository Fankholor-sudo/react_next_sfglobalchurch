import { parseDescription } from '@/app/helpers/parseDescription'
import { YouTubeEvent, PlaylistItem, VideoDetails } from '@/app/utility/types'

export async function fetchEvents(): Promise<YouTubeEvent[]> {
  const apiKey = process.env.YOUTUBE_API_KEY
  const playlistId = process.env.YOUTUBE_EVENTS_PLAYLIST_ID

  if (!apiKey || !playlistId) {
    throw new Error('YouTube API environment variables are missing')
  }

  const playlistResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
      new URLSearchParams({
        part: 'snippet',
        playlistId,
        maxResults: '10',
        key: apiKey,
      }),
    {
      next: {
        revalidate: 60,//3600,
      },
    }
  )

  if (!playlistResponse.ok) {
    const errorData = await playlistResponse.text()
    console.error('YouTube playlist API error:', {
      status: playlistResponse.status,
      response: errorData,
    })

    throw new Error(
      `Failed to fetch YouTube event playlist (${playlistResponse.status})`
    )
  }

  const playlistData = await playlistResponse.json()
  const items: PlaylistItem[] = playlistData.items ?? []

  if (items.length === 0) {
    return []
  }

  const videoIds = items.map((item) => item.snippet.resourceId.videoId).join(',')

  // Get full video details
  const videosResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?` +
      new URLSearchParams({
        part: 'snippet',
        id: videoIds,
        key: apiKey,
      }),
    {
      next: {
        revalidate: 60,//3600,
      },
    }
  )

  if (!videosResponse.ok) {
    throw new Error('Failed to fetch YouTube event details')
  }

  const videosData = await videosResponse.json()
  const videoDetails: VideoDetails[] = videosData.items ?? []

  return items.map((item) => {
    const videoId = item.snippet.resourceId.videoId
    const video = videoDetails.find(
      (video) => video.id === videoId
    )

    const description = video?.snippet.description ?? ''
    const parsed = parseDescription(description)

    return {
      id: videoId,
      title: item.snippet.title,
      thumbnail:
        item.snippet.thumbnails.high?.url ??
        item.snippet.thumbnails.medium?.url ??
        '',
      url: `https://www.youtube.com/watch?v=${videoId}`,
      publishedAt: item.snippet.publishedAt,
      date: parsed.date,
      time: parsed.time,
      location: parsed.location,
      theme: parsed.theme,
      tag: parsed.tag,
      speakers: parsed.speakers,
      description: parsed.description,
    }
  })
}
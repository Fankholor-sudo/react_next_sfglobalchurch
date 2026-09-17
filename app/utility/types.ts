
export interface YouTubeVideo {
  id: string
  title: string
  description: string
  publishedAt: string
  duration: string
  thumbnail: string
  url: string
}

export interface YouTubePlaylistItem {
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

//__________

export interface YouTubeEvent {
  id: string
  title: string
  thumbnail: string
  url: string
  publishedAt: string
  date: string
  time: string
  location: string
  theme: string
  tag: string
  speakers: string[]
  description: string
}

export interface PlaylistItem {
  snippet: {
    publishedAt: string
    title: string
    thumbnails: {
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

export interface VideoDetails {
  id: string
  snippet: {
    description: string
  }
}

export interface YouTubeDetails {
  date: string
  time: string
  location: string
  theme: string
  tag: string
  speakers: string[]
  description: string
}
//____________


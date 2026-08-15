import { NextResponse } from 'next/server'
import { getLatestYouTubeVideos } from '@/app/lib/youtube'

export async function GET() {
  try {
    const videos = await getLatestYouTubeVideos()

    return NextResponse.json({
      videos,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch YouTube videos' }, { status: 500 })
  }
}
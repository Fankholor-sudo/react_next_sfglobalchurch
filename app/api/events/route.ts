import { NextResponse } from 'next/server'
import { fetchEvents } from '@/app/lib/youtube/events'

export async function GET() {
  try {
    const events = await fetchEvents()
    return NextResponse.json({ events })
  } 
  catch (error) {
    console.error('Events API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },{ status: 500 }
    )
  }
}
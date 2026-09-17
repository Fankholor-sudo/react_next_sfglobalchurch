import { YouTubeDetails } from '@/app/utility/types'

export function parseDescription(
  description: string
): YouTubeDetails {
  const getField = (field: string): string => {
    const regex = new RegExp(
      `^${field}:\\s*(.+)$`,
      'im'
    )

    return description.match(regex)?.[1]?.trim() || ''
  }

  const date = getField('DATE')
  const time = getField('TIME')
  const location = getField('LOCATION')
  const theme = getField('THEME')
  const tag = getField('TAG')
  const speakers = description
    .split('\n')
    .find((line) => line.startsWith('SPEAKERS:'))
    ?.replace(/^SPEAKERS:\s*/, '')
    .split(',')
    .map((speaker) => speaker.trim())
    .filter(Boolean) ?? []

  // Remove the structured fields from the description
  const remainingDescription = description
    .replace(/^DATE:.*$/im, '')
    .replace(/^TIME:.*$/im, '')
    .replace(/^LOCATION:.*$/im, '')
    .replace(/^THEME:.*$/im, '')
    .replace(/^TAG:.*$/im, '')
    .replace(/^SPEAKERS:.*$/im, '')
    .trim()

  return {
    date,
    time,
    location,
    theme,
    tag,
    speakers,
    description: remainingDescription,
  }
}
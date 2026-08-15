'use client'

import PageLayout from '@/components/PageLayout'
import PageHero from '@/components/PageHero'
import SermonsTabs from '@/components/sermons/SermonsTabs'
import { useLatestVideos } from '@/app/hooks/useLatestVideos'

export default function SermonsPage() {
  const { videos, loading, error} = useLatestVideos()

  return (
    <PageLayout>
      <PageHero
        title="Sermons"
        subtitle="Powerful, life-transforming messages from the Word of God. Watch, listen, and be changed."
        bgImage="/images/leaders/Ps_V_Sermons.jpg"
      />
      <SermonsTabs videos={videos} loading={loading} error={error} />
    </PageLayout>
  )
}

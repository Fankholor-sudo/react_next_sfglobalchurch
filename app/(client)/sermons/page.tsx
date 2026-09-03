'use client'

import PageLayout from '@/app/components/PageLayout'
import PageHero from '@/app/components/PageHero'
import SermonsTabs from '@/app/components/sermons/SermonsTabs'
import { useLatestVideos } from '@/app/(client)/hooks/useLatestVideos'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Watch and listen to sermons from Spirit Fountain Global Church in Pretoria. Grow in faith through the Word of God.",
};

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

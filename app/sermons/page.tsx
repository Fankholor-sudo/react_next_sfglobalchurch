import PageLayout from '@/components/PageLayout'
import PageHero from '@/components/PageHero'
import SermonsTabs from '@/components/sermons/SermonsTabs'

export default function SermonsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Sermons"
        subtitle="Powerful, life-transforming messages from the Word of God. Watch, listen, and be changed."
        bgImage="/images/sermon-thumb.png"
      />
      <SermonsTabs />
    </PageLayout>
  )
}

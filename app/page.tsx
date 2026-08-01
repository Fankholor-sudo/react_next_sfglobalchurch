import PageLayout from '@/components/PageLayout'
import HeroSection from '@/components/home/HeroSection'
import WelcomeSection from '@/components/home/WelcomeSection'
import StatsStrip from '@/components/home/StatsStrip'
import LatestSermons from '@/components/home/LatestSermons'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import GiveStrip from '@/components/home/GiveStrip'

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <WelcomeSection />
      <StatsStrip />
      <LatestSermons />
      <UpcomingEvents />
      <GiveStrip />
    </PageLayout>
  )
}

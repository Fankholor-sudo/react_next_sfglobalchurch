import PageLayout from '@/app/components/PageLayout'
import HeroSection from '@/app/components/home/HeroSection'
import WelcomeSection from '@/app/components/home/WelcomeSection'
import StatsStrip from '@/app/components/home/StatsStrip'
import LatestSermons from '@/app/components/home/LatestSermons'
import UpcomingEvents from '@/app/components/home/UpcomingEvents'
import GiveStrip from '@/app/components/home/GiveStrip'

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

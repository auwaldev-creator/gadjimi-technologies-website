import { HeroSection } from '@/components/hero-section'
import { TrustBar } from '@/components/trust-bar'
import { ServicesSection } from '@/components/services-section'
import { StatsSection } from '@/components/stats-section'
import { BlockchainSection } from '@/components/blockchain-section'
import { Footer } from '@/components/footer'
import { CursorParticles } from '@/components/cursor-particles'
import { LoadingAnimation } from '@/components/loading-animation'
import { Navigation } from '@/components/navigation'
import { Web3Widget } from '@/components/web3-widget'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Page() {
  return (
    <>
      <LoadingAnimation />
      <Navigation />
      <CursorParticles />
      <Web3Widget />
      <ScrollToTop />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <StatsSection />
        <BlockchainSection />
        <Footer />
      </main>
    </>
  )
}

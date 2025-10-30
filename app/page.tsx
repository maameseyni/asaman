import { Navigation } from "@/components/navigation"
import { VideoHero } from "@/components/video-hero"
import { FeaturedProperties } from "@/components/featured-properties"
import { GoogleMaps } from "@/components/google-maps"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PremiumFooter } from "@/components/premium-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <VideoHero />
      <FeaturedProperties />
      <GoogleMaps />
      <ServicesSection />
      <AboutSection />
      <PremiumFooter />
    </main>
  )
}

import { Hero } from "@/components/hero"
import { AboutCampaign } from "@/components/about-campaign"
import { Projects } from "@/components/projects"
import { Statistics } from "@/components/statistics"
import { Testimonies } from "@/components/testimonies"
import { Media } from "@/components/media"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutCampaign />
      <Projects />
      <Statistics />
      <Testimonies />
      <Media />
      <Partners />
      <Footer />
    </main>
  )
}

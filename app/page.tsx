import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ApproachSection } from "@/components/approach-section"
import { PublicationsSection } from "@/components/publications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

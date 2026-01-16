import { Button } from "@/components/ui/button"
import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { ScheduleButton } from "./schedule-button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-balance leading-tight text-foreground">
                {"Cuidar da mente é cuidar da vida"}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                {
                  "Psicóloga com atuação fundamentada na Terapia Cognitivo-Comportamental (TCC), oferecendo um atendimento acolhedor e baseado em evidências científicas."
                }
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <ScheduleButton />

              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <Link href="https://www.instagram.com/s.vianapsi?igsh=cHplMnR0aHhram05" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <Link href="https://www.linkedin.com/in/stella-viana-santos-b10994160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative aspect-square lg:aspect-[3/4] overflow-hidden bg-muted transition-transform duration-300 hover:scale-105" style={{ borderRadius: '15rem 1.5rem 1.5rem 1.5rem' }}>
            <img
              src="/professional-psychologist-in-calm-office-environme.jpg"
              alt="Psicóloga em ambiente acolhedor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

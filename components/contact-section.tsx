import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { MapEmbed } from "./map-embed"

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">{"Contato"}</h2>
              <h3 className="text-4xl md:text-5xl font-light text-balance leading-tight">
                {"Vamos conversar sobre como posso ajudar você"}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Entre em contato para agendar uma primeira sessão ou esclarecer dúvidas. Será um prazer conhecer você e sua história."
                }
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">{"E-mail"}</div>
                  <Link
                    href="mailto:contato@stellavianapsi.com.br"
                    className="text-base hover:text-accent transition-colors"
                  >
                    {"contato@stellavianapsi.com.br"}
                  </Link>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">{"WhatsApp"}</div>
                  <Link
                    href="https://wa.me/5511978791985"
                    className="text-base hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"(11) 98789-1985"}
                  </Link>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">{"Consultório"}</div>
                  <div className="text-base">
                    {"Rua Alexandre Dumas, 495 - Santo Amaro"}
                    <br />
                    {"São Paulo - SP"}
                  </div>
                </div>
              </Card>
            </div>

            <div className="pt-4">
              <div className="text-sm text-muted-foreground mb-3">{"Redes Sociais"}</div>
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

          {/* Right side - CTA Card */}
          <Card className="p-8 lg:p-12 bg-accent text-accent-foreground lg:sticky lg:top-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-2xl md:text-3xl font-light text-balance leading-tight">
                  {"Pronto para dar o primeiro passo?"}
                </h4>
                <p className="text-accent-foreground/80 leading-relaxed">
                  {
                    "A terapia é um investimento em você mesmo. Agende sua primeira sessão e comece sua jornada de autoconhecimento e transformação."
                  }
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-background text-foreground hover:bg-background/90 rounded-full"
                  asChild
                >
                  <Link href="https://forms.gle/dQRM8mK47pBzseAE7" target="_blank" rel="noopener noreferrer">
                    {"Agendar Sessão"}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-accent-foreground/20 hover:bg-accent-foreground/10 rounded-full bg-transparent"
                  asChild
                >
                  <Link href="https://forms.gle/CCgEVpoDepjoDYjA8" target="_blank" rel="noopener noreferrer">{"Agendar Mentoria"}</Link>
                </Button>
              </div>

              <div className="pt-4 border-t border-accent-foreground/20">
                <div className="text-sm text-accent-foreground/70">
                  {"Atendimento presencial em São Paulo e online para todo Brasil"}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <div className="space-y-4 mb-8">
            <h3 className="text-3xl md:text-4xl font-light text-balance leading-tight">
              {"Localização do Consultório"}
            </h3>
            <p className="text-lg text-muted-foreground">
              {"Verifique a localização do consultório no mapa para facilitar sua visita."}
            </p>
          </div>
          <MapEmbed />
        </div>
      </div>
    </section>
  )
}

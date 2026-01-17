import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Presentation, Building2, GraduationCap, Lightbulb } from "lucide-react"
import Link from "next/link"

export function PalestrasSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                {"Palestras e eventos"}
              </h2>
              <h3 className="text-4xl md:text-5xl font-light text-balance leading-tight">
                {"Expandindo diálogos sobre saúde mental"}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Compartilho reflexões, conhecimentos e práticas psicológicas em formatos dinâmicos e acessíveis para diferentes públicos, incluindo instituições, empresas, escolas e eventos. Minhas palestras são elaboradas com base em evidências científicas e traduzidas para uma linguagem que promove engajamento, acolhimento e reflexão crítica sobre temas relevantes de saúde mental e bem-estar."
                }
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium">{"Temas sugeridos:"}</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <div className="font-medium">{"Autocuidado"}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <div className="font-medium">{"Superprodutividade"}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <div className="font-medium">{"Relações Familiares"}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <div className="font-medium">{"Ansiedade Contextualizada"}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <div className="font-medium">{"Burnout"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-medium">{"Formatos disponíveis:"}</h4>
              <div className="flex gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>{"Online"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>{"Presencial"}</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link href="https://wa.me/5511978791985">{"Solicitar Proposta"}</Link>
              </Button>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="space-y-4 order-1 lg:order-2">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium">{"Empresas"}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Palestras e eventos corporativos focados em saúde mental e bem-estar no ambiente de trabalho."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium">{"Escolas e Instituições"}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Conteúdos voltados para comunidades educacionais e institucionais sobre temas de saúde mental."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Presentation className="w-7 h-7 text-accent" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium">{"Eventos"}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Participação em eventos, congressos e encontros com reflexões sobre saúde mental e práticas psicológicas."}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

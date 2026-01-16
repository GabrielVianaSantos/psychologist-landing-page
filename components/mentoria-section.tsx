import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Users, Calendar, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MentoriaSection() {
  return (
    <section className="py-32 px-4 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Header with badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">{"Mentoria"}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-balance leading-tight mb-6">
            {"Mentoria para Psicólogos Iniciantes"}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {
              "Ofereço mentoria para psicólogos e estudantes de psicologia em início de carreira, com foco em organização da vida profissional, construção de identidade clínica e desenvolvimento de segurança no início da trajetória."
            }
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Benefits */}
          <div className="space-y-6">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{"Orientação Prática"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Orientação prática\nApoio na transição da formação para a vida profissional, com orientação prática e acolhedora voltada à organização do percurso e das escolhas profissionais."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{"Estruturação Clínica"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Auxílio na organização do modo de trabalho do psicólogo, considerando posicionamento profissional, rotina, escuta qualificada e postura ética."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <Card className="p-10 lg:p-14 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground border-0 shadow-2xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-light text-balance leading-tight">
                  {"Sua transição profissional com acolhimento"}
                </h3>
                <p className="text-accent-foreground/90 text-lg leading-relaxed">
                  {
                    "Programa pensado especialmente para psicólogos e estudantes de psicologia que estão começando sua caminhada profissional."
                  }
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-accent-foreground/10 rounded-lg p-4">
                  <p className="text-sm italic text-accent-foreground/90">
                    {"*Importante salientar que este serviço não substitui psicoterapia ou supervisão clínica."}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full bg-background text-foreground hover:bg-background/90 rounded-full group"
                  asChild
                >
                  <Link href="#contato">
                    {"Quero saber mais"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom stats/highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-light text-accent mb-2">{"Prática"}</div>
            <div className="text-sm text-muted-foreground">{"Orientação e reflexão clínica"}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-accent mb-2">{"Ética"}</div>
            <div className="text-sm text-muted-foreground">{"Escuta cuidadosa e consciente"}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-accent mb-2">{"Foco"}</div>
            <div className="text-sm text-muted-foreground">{"Estratégia e resultados"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

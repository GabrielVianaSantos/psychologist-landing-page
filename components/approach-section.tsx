'use client'
import { Card } from "@/components/ui/card"
import { Brain, Heart, Target, Users } from "lucide-react"

export function ApproachSection() {
  const approaches = [
    {
      icon: Brain,
      title: "Terapia Cognitivo-Comportamental",
      description:
        "Abordagem baseada em evidências que trabalha a relação entre pensamentos, emoções e comportamentos para promover mudanças significativas.",
    },
    {
      icon: Target,
      title: "Atendimento Focado",
      description:
        "Trabalho orientado por objetivos claros e mensuráveis, respeitando o ritmo e as necessidades individuais de cada paciente.",
    },
    {
      icon: Heart,
      title: "Acolhimento e Empatia",
      description:
        "Ambiente seguro e livre de julgamentos, onde você pode se expressar livremente e ser compreendido em sua totalidade.",
    },
    {
      icon: Users,
      title: "Atendimento Individualizado",
      description:
        "Cada pessoa é única. O processo terapêutico é personalizado de acordo com suas demandas, histórico e objetivos específicos.",
    },
  ]

  return (
    <section id="abordagem" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">{"Minha Abordagem"}</h2>
          <h3 className="text-4xl md:text-5xl font-light text-balance leading-tight">{"Como posso ajudar você?"}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {
              "A Terapia Cognitivo-Comportamental é uma das abordagens mais estudadas e eficazes da psicologia contemporânea, com resultados comprovados no tratamento de diversas questões emocionais."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {approaches.map((approach, index) => (
            <Card key={index} className="p-8 space-y-4 border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <approach.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-xl font-medium">{approach.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted/50 rounded-2xl space-y-6">
          <h4 className="text-2xl font-light">{"Informações sobre Atendimento Psicológico"}</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">{"Modalidades"}</div>
              <div className="text-base">{"Presencial e Online (via Google Meet)"}</div>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">{"Público Atendido"}</div>
              <div className="text-base">{"Adultos"}</div>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">{"Duração das Sessões"}</div>
              <div className="text-base">{"50 minutos"}</div>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">{"Investimento"}</div>
              <div className="text-base">{"Entre em contato para valores e disponibilidade"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
          onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
        >
          Agendar uma Sessão
        </button>
      </div>
    </section>
  )
}

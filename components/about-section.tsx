export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">{"Sobre Mim"}</h2>
            <h3 className="text-4xl md:text-5xl font-light text-balance leading-tight">
              {"Comprometida com o seu bem-estar emocional"}
            </h3>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              {
                "Sou psicóloga, formada pela Universidade Nove de Julho, pós graduada em Terapia Cognitivo-Comportamental (TCC). Atuo há mais de três anos na clínica, acompanhando pessoas na compreensão de seus pensamentos, emoções e comportamentos, sempre a partir de uma construção colaborativa."
              }
            </p>
            <p>
              {
                "Meu trabalho é fundamentado em evidências científicas, sem perder de vista a singularidade de cada história. Acredito em uma psicoterapia que fortalece recursos internos, amplia a consciência e possibilita mudanças reais, respeitando o tempo e o modo de cada pessoa. Ofereço um espaço acolhedor, seguro e livre de julgamentos, onde o cuidado psicológico acontece com profundidade e humanidade."
              }
            </p>
            <p>
              {
                "Ao longo da minha trajetória, também compartilhei conhecimento por meio de palestras e da condução de uma oficina social em saúde mental, ampliando o cuidado para além do setting terapêutico. Sou autora do artigo “Impacto da esquizofrenia nas relações familiares: desafios, estratégias de enfrentamento e apoio psicológico”, publicado na Revista Brasileira de Terapia Familiar, e coautora da antologia “O ciclo da superprodutividade: trabalhe, produza, adoeça”, obra que propõe uma reflexão crítica sobre os impactos psicológicos da cultura do desempenho. Essas produções refletem meu compromisso com uma psicologia ética, crítica e profundamente humana , um cuidado que não patologiza a existência, mas ajuda a construir uma vida que faça sentido em diálogo com o mundo."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <div className="text-3xl font-light text-primary">{"CRP 06/192977"}</div>
              <div className="text-sm text-muted-foreground">{"Registro Profissional"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

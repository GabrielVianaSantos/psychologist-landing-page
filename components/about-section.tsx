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
                "Sou psicóloga, formada pela Universidade Nove de Julho, com especialização em Terapia Cognitivo-Comportamental (TCC) pela Universidade Pitágoras Unopar Anhanguera. Minha trajetória profissional é guiada pela crença de que cada pessoa carrega, dentro de si, recursos internos capazes de sustentar mudanças reais e uma vida mais equilibrada, mesmo em meio ao caos. Atuo há mais de três anos na clínica, acompanhando pessoas no processo de compreender seus padrões de pensamento, emoções e comportamentos. Acredito que a psicoterapia é uma construção conjunta: uma parceria colaborativa em que, juntos, desenvolvemos estratégias possíveis, éticas e eficazes para o seu desenvolvimento pessoal."
              }
            </p>
            <p>
              {
                "Meu trabalho é fundamentado em evidências científicas, sem jamais perder de vista a singularidade de cada indivíduo. Busco oferecer um espaço acolhedor, seguro e livre de julgamentos, onde você possa se sentir à vontade para explorar suas questões e construir mudanças significativas, no seu tempo e do seu jeito. Ao longo da minha trajetória, também tive a oportunidade de compartilhar conhecimento por meio de palestras e da condução de uma oficina social em saúde mental, experiências que ampliaram meu olhar para o cuidado psicológico para além do setting terapêutico."
              }
            </p>
            <p>
              {
                "Sou autora do artigo “Impacto da esquizofrenia nas relações familiares: desafios, estratégias de enfrentamento e apoio psicológico”, publicado na Revista Brasileira de Terapia Familiar. Nesse trabalho, aprofundo os desafios vivenciados por familiares de pessoas com esquizofrenia e destaco a importância do suporte psicológico como ferramenta de cuidado e fortalecimento emocional. Também tive a honra de participar como coautora da antologia “O ciclo da superprodutividade: trabalhe, produza, adoeça”, ao lado de outros 19 autores. A obra propõe uma reflexão crítica sobre os impactos psicológicos e sociais da cultura do desempenho a qualquer custo, um grito coletivo contra o adoecimento silencioso que se disfarça de sucesso."
              }
            </p>
            <p>
              {
                "Essas produções refletem não apenas minha trajetória acadêmica e profissional, mas também meu compromisso com uma psicologia ética, crítica e profundamente humana. Acredito em um cuidado que não patologiza a existência, mas amplia a consciência, fortalece recursos internos e ajuda cada pessoa a construir uma vida que faça sentido, não apesar do mundo em que vivemos, mas em diálogo com ele."
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

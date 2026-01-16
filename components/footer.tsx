import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2">
            <div className="text-lg font-medium">{"Dra. Stella Viana Santos"}</div>
            <div className="text-sm text-muted-foreground">{"Psicóloga - CRP 06/192977"}</div>
            <div className="text-sm text-muted-foreground">{"Abordagem em Terapia Cognitivo-Comportamental"}</div>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <nav className="flex flex-wrap gap-6 text-sm">
              <Link href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                {"Sobre"}
              </Link>
              <Link href="#abordagem" className="text-muted-foreground hover:text-foreground transition-colors">
                {"Abordagem"}
              </Link>
              <Link href="#publicacoes" className="text-muted-foreground hover:text-foreground transition-colors">
                {"Publicações"}
              </Link>
              <Link href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
                {"Contato"}
              </Link>
            </nav>
            <div className="text-sm text-muted-foreground">{"© 2026 Todos os direitos reservados"}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

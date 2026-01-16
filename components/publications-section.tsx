import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import { link } from "fs"

export function PublicationsSection() {
  const articles = [
    {
      title: "Impacto da esquizofrenia nas relações familiares: desafios, estratégias de enfrentamento e apoio psicológico",
      publication: "Revista Brasileira de Terapia Familiar",
      year: "2025",
      link: "https://revbrasterapiafamiliar.abratef.org.br/revista/article/view/148/132?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRzdgPWPN9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacXSyDU0Vu8Eh_ebuEYv-tgKCSL-cjpBdyD3tAa1X5UDqEbZCGUUYYnk3cpLA_aem_dit4BcDrDveW5Fu-YGk7YQ",
    },
  ]

  const books = [
    {
      title: "O Ciclo da Superprodutividade: Trabalhe, Produza, Adoeça",
      role: "Coautora",
      publisher: "Editora UICLAP",
      year: "2025",
      description: 'Capítulo: "A Mente que não desliga"',
      link: "https://amzn.to/49El9IK",
    },
  ]

  return (
    <section id="publicacoes" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div 
        className="absolute right-[3%] top-[60%] -translate-y-1/2 w-[50%] h-[90%] opacity-7 pointer-events-none"
        style={{
          backgroundImage: "url('/icon.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">{"Publicações"}</h2>
          <h3 className="text-4xl md:text-5xl font-light text-balance leading-tight">{"Contribuições científicas"}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {"A prática clínica aliada à produção de conhecimento científico. Confira alguns dos trabalhos publicados."}
          </p>
        </div>

        {/* Articles */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-accent" />
            <h4 className="text-xl font-medium">{"Artigos Científicos"}</h4>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <Card key={index} className="p-6 space-y-3 hover:border-accent transition-colors">
                <h5 className="font-medium leading-snug line-clamp-2">{article.title}</h5>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>{article.publication}</div>
                  <div>{article.year}</div>
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                  <Link href={article.link}>
                    {"Ler artigo"}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Books */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-accent" />
            <h4 className="text-xl font-medium">{"Livros"}</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <Card key={index} className="p-8 space-y-4 hover:border-accent transition-colors">
                <div className="space-y-2">
                  <div className="text-sm text-accent font-medium">{book.role}</div>
                  <h5 className="text-xl font-medium leading-snug">{book.title}</h5>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>{book.publisher}</div>
                  <div>{book.year}</div>
                  {book.description && <div className="pt-2 text-foreground">{book.description}</div>}
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                  <Link href={book.link}>
                    {"Ver livro"}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

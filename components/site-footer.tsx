import Link from "next/link";
import { categories } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="font-display text-2xl tracking-[0.2em] text-cream">
              AURUM
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-dim">
              Curadoria de automóveis de alto padrão. Cada carro em nosso
              acervo é selecionado a dedo por sua história, performance e
              exclusividade.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Categorias
            </p>
            <ul className="mt-4 space-y-2">
              {categories.slice(0, 4).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/categorias/${category.slug}`}
                    className="text-sm text-cream-dim transition-colors hover:text-cream"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Institucional
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/carros"
                  className="text-sm text-cream-dim transition-colors hover:text-cream"
                >
                  Todo o acervo
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-cream-dim transition-colors hover:text-cream"
                >
                  Sobre a AURUM
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-cream-dim transition-colors hover:text-cream"
                >
                  Fale com um consultor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Contato
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream-dim">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  WhatsApp (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@aurum.com.br"
                  className="transition-colors hover:text-cream"
                >
                  contato@aurum.com.br
                </a>
              </li>
              <li>Av. Faria Lima, 3477 &middot; São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-cream-dim sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} AURUM. Todos os direitos reservados.</p>
          <p>Showroom por convite &middot; Curadoria exclusiva</p>
        </div>
      </div>
    </footer>
  );
}

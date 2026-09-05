import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { RouteTransition } from "@/components/route-transition";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CategoryCard } from "@/components/category-card";
import { CarCard } from "@/components/car-card";
import { categories, getFeaturedCars } from "@/lib/data";

export default function Home() {
  const featured = getFeaturedCars();

  return (
    <RouteTransition>
      <HeroVideo />

      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            A AURUM
          </p>
          <p className="mt-6 text-balance font-display text-2xl leading-relaxed text-cream sm:text-3xl">
            Não vendemos carros. Apresentamos máquinas que já provaram seu
            valor &mdash; em performance, em design e em história &mdash;
            para colecionadores que reconhecem a diferença entre possuir e
            escolher.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <SectionHeading
          eyebrow="Acervo"
          title="Seis categorias, uma única exigência: excelência"
          description="Do rugido de um V10 ao silêncio de um elétrico de alta performance, cada categoria reúne carros escolhidos por sua personalidade."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-soft">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <SectionHeading
            eyebrow="Seleção em destaque"
            title="Os mais desejados do momento"
            description="Uma amostra do que há de mais cobiçado em nosso showroom no momento."
          />

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((car, index) => (
              <Reveal key={car.slug} delay={index * 0.08}>
                <CarCard car={car} priority={index === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 text-center">
            <Link
              href="/carros"
              className="inline-block rounded-full border border-gold px-8 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Ver acervo completo
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/images/showroom-wide.jpg"
          alt="Showroom AURUM"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">
              Curadoria &amp; procedência
            </p>
            <p className="mt-6 text-balance font-display text-3xl leading-snug text-cream sm:text-4xl">
              Cada veículo passa por uma inspeção técnica minuciosa e tem sua
              história documentada antes de entrar em nosso acervo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-28 text-center sm:px-10">
        <Reveal>
          <p className="font-display text-3xl text-cream sm:text-4xl">
            Pronto para encontrar o seu próximo carro?
          </p>
          <p className="mt-4 text-cream-dim">
            Fale com um de nossos consultores e agende uma visita privativa
            ao showroom.
          </p>
          <Link
            href="/contato"
            transitionTypes={["nav-forward"]}
            className="mt-8 inline-block rounded-full bg-gold px-10 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
          >
            Fale Conosco
          </Link>
        </Reveal>
      </section>
    </RouteTransition>
  );
}

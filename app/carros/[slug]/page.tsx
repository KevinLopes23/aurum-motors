import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import { RouteTransition } from "@/components/route-transition";
import { Reveal } from "@/components/reveal";
import { CarCard } from "@/components/car-card";
import { cars, getCar, getCategory, getRelatedCars } from "@/lib/data";
import { formatPrice, formatNumber } from "@/lib/format";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata(
  props: PageProps<"/carros/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const car = getCar(slug);
  if (!car) return {};
  return {
    title: `${car.brand} ${car.model} | AURUM`,
    description: car.description,
  };
}

export default async function CarPage(props: PageProps<"/carros/[slug]">) {
  const { slug } = await props.params;
  const car = getCar(slug);
  if (!car) notFound();

  const category = getCategory(car.categorySlug);
  const related = getRelatedCars(car);
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no ${car.brand} ${car.model} ${car.year}.`,
  );

  return (
    <RouteTransition>
      <div className="relative flex h-[64vh] min-h-[440px] items-end overflow-hidden">
        <ViewTransition name={`car-${car.slug}`} share="morph" default="none">
          <Image
            src={car.cover}
            alt={`${car.brand} ${car.model}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </ViewTransition>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 sm:px-10">
          <Link
            href="/carros"
            transitionTypes={["nav-back"]}
            className="text-xs uppercase tracking-[0.2em] text-cream-dim transition-colors hover:text-cream"
          >
            &larr; Acervo
          </Link>
          {category && (
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">
              {category.name}
            </p>
          )}
          <h1 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
            {car.brand} {car.model}
          </h1>
          <p className="mt-2 text-cream-dim">{car.year}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-cream-dim">
              {car.description}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Destaques
            </p>
            <ul className="mt-4 space-y-3">
              {car.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-cream-dim sm:text-base"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 overflow-hidden rounded-sm">
            <div className="relative aspect-video w-full">
              <Image
                src={car.detail}
                alt={`${car.brand} ${car.model} detalhe`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          </Reveal>

          {car.video && (
            <Reveal delay={0.2} className="mt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Em movimento
              </p>
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-sm bg-panel">
                <video
                  src={car.video}
                  poster={car.cover}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-cover"
                >
                  Seu navegador não suporta vídeo.
                </video>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.1}>
          <div className="sticky top-28 rounded-sm border border-line bg-panel p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Investimento
            </p>
            <p className="mt-2 font-display text-3xl text-cream">
              {formatPrice(car.price)}
            </p>

            <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
              <div className="flex justify-between">
                <dt className="text-cream-dim">Potência</dt>
                <dd className="text-cream">{car.powerHp} cv</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cream-dim">0&ndash;100 km/h</dt>
                <dd className="text-cream">{car.zeroToHundred}s</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cream-dim">Velocidade máxima</dt>
                <dd className="text-cream">
                  {formatNumber(car.topSpeedKmh)} km/h
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cream-dim">Ano</dt>
                <dd className="text-cream">{car.year}</dd>
              </div>
            </dl>

            <a
              href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full bg-gold px-6 py-3 text-center text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
            >
              Consultar disponibilidade
            </a>
            <Link
              href="/contato"
              transitionTypes={["nav-forward"]}
              className="mt-3 block rounded-full border border-cream/30 px-6 py-3 text-center text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:border-cream"
            >
              Agendar visita
            </Link>
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="border-t border-line bg-ink-soft">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Você também pode gostar
              </p>
              <h2 className="mt-3 font-display text-3xl text-cream">
                Mais em {category?.name}
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedCar, index) => (
                <Reveal key={relatedCar.slug} delay={index * 0.08}>
                  <CarCard car={relatedCar} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}
    </RouteTransition>
  );
}

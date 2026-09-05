import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RouteTransition } from "@/components/route-transition";
import { Reveal } from "@/components/reveal";
import { CarCard } from "@/components/car-card";
import { categories, getCategory, getCarsByCategory, getCategoryCover } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata(
  props: PageProps<"/categorias/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} | AURUM`,
    description: category.description,
  };
}

export default async function CategoriaPage(props: PageProps<"/categorias/[slug]">) {
  const { slug } = await props.params;
  const category = getCategory(slug);
  if (!category) notFound();

  const carsInCategory = getCarsByCategory(slug);

  return (
    <RouteTransition>
      <div className="relative flex h-[52vh] min-h-[380px] items-end overflow-hidden">
        <Image
          src={withBasePath(getCategoryCover(slug))}
          alt={category.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 sm:px-10">
          <Link
            href="/categorias"
            transitionTypes={["nav-back"]}
            className="text-xs uppercase tracking-[0.2em] text-cream-dim transition-colors hover:text-cream"
          >
            &larr; Categorias
          </Link>
          <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-2 text-gold-soft">{category.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-cream-dim">{category.description}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {carsInCategory.map((car, index) => (
            <Reveal key={car.slug} delay={index * 0.08}>
              <CarCard car={car} priority={index === 0} />
            </Reveal>
          ))}
        </div>

        {carsInCategory.length === 0 && (
          <p className="mt-8 text-cream-dim">
            Novos modelos desta categoria chegam em breve ao acervo.
          </p>
        )}
      </div>
    </RouteTransition>
  );
}

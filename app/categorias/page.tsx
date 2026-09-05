import type { Metadata } from "next";
import { RouteTransition } from "@/components/route-transition";
import { Reveal } from "@/components/reveal";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Categorias | AURUM",
  description:
    "Explore nossas categorias de automóveis de luxo: esportivos, SUVs, sedãs executivos, conversíveis, elétricos e clássicos raros.",
};

export default function CategoriasPage() {
  return (
    <RouteTransition>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-36 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Categorias
          </p>
          <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
            Encontre o estilo que fala por você
          </h1>
          <p className="mt-4 text-cream-dim">
            Cada categoria do acervo AURUM foi desenhada para um tipo de
            emoção diferente ao volante.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </RouteTransition>
  );
}

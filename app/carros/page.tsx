import type { Metadata } from "next";
import { RouteTransition } from "@/components/route-transition";
import { Reveal } from "@/components/reveal";
import { CarFilter } from "@/components/car-filter";
import { cars, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Acervo | AURUM",
  description: "Explore todo o acervo de automóveis de luxo da AURUM.",
};

export default function CarrosPage() {
  return (
    <RouteTransition>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-36 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Acervo completo
          </p>
          <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
            {cars.length} carros, uma única exigência
          </h1>
          <p className="mt-4 text-cream-dim">
            Filtre por categoria e encontre o carro que combina com sua
            próxima história.
          </p>
        </Reveal>

        <div className="mt-12">
          <CarFilter cars={cars} categories={categories} />
        </div>
      </div>
    </RouteTransition>
  );
}

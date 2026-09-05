"use client";

import { useState, useTransition, ViewTransition } from "react";
import { CarCard } from "@/components/car-card";
import type { Car, Category } from "@/lib/types";

export function CarFilter({
  cars,
  categories,
}: {
  cars: Car[];
  categories: Category[];
}) {
  const [selected, setSelected] = useState<string>("todos");
  const [, startTransition] = useTransition();

  const filtered =
    selected === "todos"
      ? cars
      : cars.filter((car) => car.categorySlug === selected);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => startTransition(() => setSelected("todos"))}
          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
            selected === "todos"
              ? "border-gold bg-gold text-ink"
              : "border-line text-cream-dim hover:border-cream/40 hover:text-cream"
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => startTransition(() => setSelected(category.slug))}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
              selected === category.slug
                ? "border-gold bg-gold text-ink"
                : "border-line text-cream-dim hover:border-cream/40 hover:text-cream"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <ViewTransition key={selected} share="auto" enter="auto" default="none">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((car, index) => (
            <CarCard car={car} key={car.slug} priority={index === 0} />
          ))}
        </div>
      </ViewTransition>

      {filtered.length === 0 && (
        <p className="mt-10 text-cream-dim">
          Nenhum modelo encontrado nesta categoria no momento.
        </p>
      )}
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import type { Car } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/base-path";

export function CarCard({ car, priority = false }: { car: Car; priority?: boolean }) {
  return (
    <Link
      href={`/carros/${car.slug}`}
      transitionTypes={["nav-forward"]}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-panel">
        <ViewTransition name={`car-${car.slug}`} share="morph" default="none">
          <Image
            src={withBasePath(car.cover)}
            alt={`${car.brand} ${car.model}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </ViewTransition>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/60 bg-ink/60 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-gold-soft backdrop-blur-sm">
          {car.year}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-cream-dim">
            {car.brand}
          </p>
          <h3 className="font-display text-xl text-cream">{car.model}</h3>
        </div>
        <p className="whitespace-nowrap pt-1 text-sm text-gold-soft">
          {formatPrice(car.price)}
        </p>
      </div>
    </Link>
  );
}

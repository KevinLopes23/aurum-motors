import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/types";
import { getCategoryCover, getCarsByCategory } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";

export function CategoryCard({ category }: { category: Category }) {
  const count = getCarsByCategory(category.slug).length;

  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-panel sm:aspect-[4/5]"
    >
      <Image
        src={withBasePath(getCategoryCover(category.slug))}
        alt={category.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">
          {count} {count === 1 ? "modelo" : "modelos"}
        </p>
        <h3 className="mt-2 font-display text-2xl text-cream">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-cream-dim">{category.tagline}</p>
      </div>
      <span className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold/50" />
    </Link>
  );
}

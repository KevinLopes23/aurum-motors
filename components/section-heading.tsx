import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-cream-dim sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}

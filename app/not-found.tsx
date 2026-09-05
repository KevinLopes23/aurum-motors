import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-20 text-center">
      <p className="font-display text-7xl text-gold">404</p>
      <h1 className="mt-4 font-display text-3xl text-cream">
        Este caminho não está em nosso acervo
      </h1>
      <p className="mt-3 max-w-md text-cream-dim">
        A página que você procura não existe ou foi movida. Volte ao início
        e continue explorando.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
      >
        Voltar ao início
      </Link>
    </div>
  );
}

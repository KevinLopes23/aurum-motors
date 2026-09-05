"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <motion.video
        style={{ y }}
        className="absolute inset-0 h-full w-full scale-110 object-cover"
        src="/videos/hero-driving.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.4em] text-gold-soft"
        >
          Curadoria de automóveis de alto padrão
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-balance font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl"
        >
          A arte de dirigir o extraordinário
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 max-w-xl text-balance text-base text-cream-dim sm:text-lg"
        >
          Esportivos, SUVs, sedãs, conversíveis, elétricos e clássicos raros
          &mdash; cada carro do nosso acervo é selecionado a dedo para quem
          exige o máximo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/carros"
            transitionTypes={["nav-forward"]}
            className="rounded-full bg-gold px-8 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
          >
            Ver o acervo
          </Link>
          <Link
            href="/categorias"
            className="rounded-full border border-cream/30 px-8 py-3 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:border-cream hover:bg-cream/5"
          >
            Explorar categorias
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold-soft"
          />
        </div>
      </motion.div>
    </div>
  );
}

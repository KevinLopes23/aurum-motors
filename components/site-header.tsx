"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/categorias", label: "Categorias" },
  { href: "/carros", label: "Carros" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.2em] text-cream"
        >
          AURUM
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-[0.15em] transition-colors ${
                  active ? "text-gold" : "text-cream-dim hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-ink md:inline-block"
        >
          Fale Conosco
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-ink px-6 pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-sm uppercase tracking-[0.15em] ${
                pathname === link.href ? "text-gold" : "text-cream-dim"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-gold/40 bg-panel p-8 text-center">
        <p className="font-display text-2xl text-cream">Mensagem enviada</p>
        <p className="mt-3 text-sm text-cream-dim">
          Obrigado pelo contato. Um de nossos consultores retornará em
          breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="text-xs uppercase tracking-[0.15em] text-cream-dim"
        >
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-[0.15em] text-cream-dim"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-xs uppercase tracking-[0.15em] text-cream-dim"
          >
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-[0.15em] text-cream-dim"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-none rounded-sm border border-line bg-ink px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:scale-[1.02]"
      >
        Enviar mensagem
      </button>
    </form>
  );
}

import type { Metadata } from "next";
import { RouteTransition } from "@/components/route-transition";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contato | AURUM",
  description: "Fale com um consultor AURUM e agende sua visita ao showroom.",
};

export default function ContatoPage() {
  return (
    <RouteTransition>
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-36 sm:px-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Contato
          </p>
          <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
            Vamos conversar sobre seu próximo carro
          </h1>
          <p className="mt-6 text-cream-dim">
            Preencha o formulário ou fale diretamente com nossa equipe pelos
            canais abaixo. Atendemos por agendamento, com visitas privativas
            ao showroom.
          </p>

          <div className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
            <div className="flex justify-between">
              <span className="text-cream-dim">WhatsApp</span>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream transition-colors hover:text-gold"
              >
                (11) 99999-9999
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-cream-dim">E-mail</span>
              <a
                href="mailto:contato@aurum.com.br"
                className="text-cream transition-colors hover:text-gold"
              >
                contato@aurum.com.br
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-cream-dim">Showroom</span>
              <span className="text-cream">Av. Faria Lima, 3477 &middot; SP</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cream-dim">Horário</span>
              <span className="text-cream">Seg a Sáb, 10h &ndash; 19h</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </RouteTransition>
  );
}

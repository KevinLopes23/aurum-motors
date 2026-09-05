import type { Metadata } from "next";
import Image from "next/image";
import { RouteTransition } from "@/components/route-transition";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Sobre | AURUM",
  description:
    "Conheça a história e a filosofia por trás da curadoria de automóveis de luxo AURUM.",
};

export default function SobrePage() {
  return (
    <RouteTransition>
      <div className="mx-auto max-w-3xl px-6 pb-10 pt-36 text-center sm:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Nossa história
          </p>
          <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
            Paixão por máquinas extraordinárias
          </h1>
          <p className="mt-6 text-cream-dim">
            A AURUM nasceu da convicção de que um automóvel de luxo é mais do
            que um meio de transporte &mdash; é uma obra de engenharia, um
            objeto de desejo e, para muitos, uma paixão que atravessa
            gerações.
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-8 h-[50vh] min-h-[360px] max-w-6xl overflow-hidden rounded-sm px-6 sm:px-10">
        <div className="relative h-full w-full overflow-hidden rounded-sm">
          <Image
            src="/images/showroom-wide.jpg"
            alt="Showroom AURUM"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:px-10 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-2xl text-cream">
            Curadoria rigorosa
          </h2>
          <p className="mt-4 leading-relaxed text-cream-dim">
            Cada carro que chega ao nosso showroom passa por um processo de
            avaliação técnica completo: procedência, histórico de manutenção,
            estado mecânico e autenticidade são verificados por especialistas
            antes de qualquer negociação.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-2xl text-cream">
            Atendimento por convite
          </h2>
          <p className="mt-4 leading-relaxed text-cream-dim">
            Trabalhamos com um número limitado de clientes por vez, o que nos
            permite oferecer atenção verdadeiramente personalizada, do
            primeiro contato à entrega do veículo em suas mãos.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-display text-2xl text-cream">
            Coleção viva
          </h2>
          <p className="mt-4 leading-relaxed text-cream-dim">
            Nosso acervo muda constantemente. Novos esportivos, clássicos
            raros e elétricos de última geração entram no showroom assim que
            passam por nossa curadoria.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-display text-2xl text-cream">
            Além da venda
          </h2>
          <p className="mt-4 leading-relaxed text-cream-dim">
            Acompanhamos nossos clientes também após a compra, com suporte
            para manutenção especializada, seguro e futura revenda do
            veículo.
          </p>
        </Reveal>
      </div>
    </RouteTransition>
  );
}

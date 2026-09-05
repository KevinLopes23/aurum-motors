import type { Car, Category } from "./types";

export const categories: Category[] = [
  {
    slug: "esportivos",
    name: "Esportivos",
    tagline: "Adrenalina em estado puro",
    description:
      "Motores que respiram performance. Cada curva foi desenhada para acelerar sua pulsação antes mesmo de girar a chave.",
  },
  {
    slug: "suvs-de-luxo",
    name: "SUVs de Luxo",
    tagline: "Potência e presença em qualquer terreno",
    description:
      "A robustez de um SUV com o acabamento de uma alta-costura automotiva. Espaço, força e refinamento sem concessões.",
  },
  {
    slug: "sedas-executivos",
    name: "Sedãs Executivos",
    tagline: "Conforto e autoridade para quem lidera",
    description:
      "Cabines que parecem escritórios de luxo em movimento. Silêncio, conforto e tecnologia para decisões importantes.",
  },
  {
    slug: "conversiveis",
    name: "Conversíveis",
    tagline: "Céu aberto, elegância sem limites",
    description:
      "Para quem entende que dirigir também é sobre ser visto. Capota aberta, vento no rosto, motor cantando.",
  },
  {
    slug: "eletricos-de-luxo",
    name: "Elétricos de Luxo",
    tagline: "O futuro já chegou, com todo o refinamento",
    description:
      "Torque instantâneo e silêncio absoluto. A vanguarda da mobilidade, sem abrir mão do requinte.",
  },
  {
    slug: "classicos-raros",
    name: "Clássicos Raros",
    tagline: "Peças de coleção com alma própria",
    description:
      "Máquinas que atravessaram décadas e ainda emocionam. Raridade, história e caráter que não se fabricam mais.",
  },
];

export const cars: Car[] = [
  {
    slug: "ferrari-296-gtb",
    brand: "Ferrari",
    model: "296 GTB",
    year: 2024,
    categorySlug: "esportivos",
    price: 4200000,
    powerHp: 830,
    zeroToHundred: 2.9,
    topSpeedKmh: 330,
    description:
      "Um V6 híbrido que redefine o que se espera de um motor central-traseiro. A 296 GTB entrega a alma de uma Ferrari de competição com a docilidade necessária para o dia a dia.",
    highlights: [
      "Motor V6 biturbo híbrido de 830 cv",
      "0-100 km/h em 2,9 segundos",
      "Modo 100% elétrico para baixa velocidade",
      "Aerodinâmica ativa desenvolvida na Fórmula 1",
    ],
    cover: "/images/cars/ferrari-296-gtb-cover.jpg",
    detail: "/images/cars/ferrari-296-gtb-detail.jpg",
    video: "/videos/cars/ferrari-296-gtb.mp4",
    featured: true,
  },
  {
    slug: "lamborghini-huracan-sto",
    brand: "Lamborghini",
    model: "Huracán STO",
    year: 2023,
    categorySlug: "esportivos",
    price: 3850000,
    powerHp: 640,
    zeroToHundred: 3.0,
    topSpeedKmh: 310,
    description:
      "Direto das pistas para a rua. A STO carrega a genética dos protótipos de endurance da Lamborghini em um pacote homologado para o asfalto público.",
    highlights: [
      "V10 aspirado de 640 cv",
      "Fibra de carbono em 75% da carroceria",
      "Capô único em peça inspirado em carros de corrida",
      "Setup de suspensão derivado do automobilismo",
    ],
    cover: "/images/cars/lamborghini-huracan-sto-cover.jpg",
    detail: "/images/cars/lamborghini-huracan-sto-detail.jpg",
    video: "/videos/cars/lamborghini-huracan-sto.mp4",
    featured: true,
  },
  {
    slug: "lamborghini-urus",
    brand: "Lamborghini",
    model: "Urus S",
    year: 2024,
    categorySlug: "suvs-de-luxo",
    price: 2650000,
    powerHp: 666,
    zeroToHundred: 3.5,
    topSpeedKmh: 305,
    description:
      "O SUV mais rápido do mundo em sua categoria continua sendo o único capaz de levar a família e ainda envergonhar esportivos em um sinal fechado.",
    highlights: [
      "V8 biturbo de 666 cv",
      "0-100 km/h em 3,5 segundos",
      "6 modos de condução, do asfalto à areia",
      "Interior em couro e Alcantara sob medida",
    ],
    cover: "/images/cars/lamborghini-urus-cover.jpg",
    detail: "/images/cars/lamborghini-urus-detail.jpg",
    featured: true,
  },
  {
    slug: "bentley-bentayga",
    brand: "Bentley",
    model: "Bentayga Azure",
    year: 2024,
    categorySlug: "suvs-de-luxo",
    price: 3100000,
    powerHp: 550,
    zeroToHundred: 5.2,
    topSpeedKmh: 290,
    description:
      "A definição britânica de conforto sobre rodas. Cada costura é feita à mão, cada detalhe pensado para isolar você do mundo lá fora.",
    highlights: [
      "V8 de 550 cv com suspensão pneumática adaptativa",
      "Mais de 1.000 componentes de couro costurados à mão",
      "Isolamento acústico de referência no segmento",
      "Sistema de assentos com massagem e aquecimento",
    ],
    cover: "/images/cars/bentley-bentayga-cover.jpg",
    detail: "/images/cars/bentley-bentayga-detail.jpg",
    video: "/videos/cars/bentley-bentayga.mp4",
  },
  {
    slug: "mercedes-s-class",
    brand: "Mercedes-Benz",
    model: "S 580",
    year: 2024,
    categorySlug: "sedas-executivos",
    price: 1480000,
    powerHp: 503,
    zeroToHundred: 4.4,
    topSpeedKmh: 250,
    description:
      "O sedã que define o segmento executivo há décadas. Tecnologia de ponta, silêncio de cabine incomparável e a sensação de estar sempre um passo à frente.",
    highlights: [
      "V8 biturbo com sistema mild-hybrid de 503 cv",
      "Suspensão E-Active Body Control",
      "Bancos traseiros com massagem e reclínio total",
      "Central multimídia MBUX com telas em toda a cabine",
    ],
    cover: "/images/cars/mercedes-s-class-cover.jpg",
    detail: "/images/cars/mercedes-s-class-detail.jpg",
    video: "/videos/cars/mercedes-s-class.mp4",
    featured: true,
  },
  {
    slug: "bmw-7-series",
    brand: "BMW",
    model: "760i xDrive",
    year: 2024,
    categorySlug: "sedas-executivos",
    price: 1390000,
    powerHp: 544,
    zeroToHundred: 4.4,
    topSpeedKmh: 250,
    description:
      "Tração integral, presença imponente e uma cabine que trata cada passageiro como protagonista. O sedã para quem lidera sem levantar a voz.",
    highlights: [
      "V8 biturbo de 544 cv com tração xDrive",
      "Tela de cinema traseira de 31,3 polegadas",
      "Isolamento acústico ativo",
      "Suspensão a ar em todos os eixos",
    ],
    cover: "/images/cars/bmw-7-series-cover.jpg",
    detail: "/images/cars/bmw-7-series-detail.jpg",
    video: "/videos/cars/bmw-7-series.mp4",
  },
  {
    slug: "ferrari-portofino-m",
    brand: "Ferrari",
    model: "Portofino M",
    year: 2023,
    categorySlug: "conversiveis",
    price: 2950000,
    powerHp: 620,
    zeroToHundred: 3.45,
    topSpeedKmh: 320,
    description:
      "Um Gran Turismo conversível capaz de abrir o teto rígido em 14 segundos e transformar qualquer trajeto em uma cena de cinema.",
    highlights: [
      "V8 biturbo de 620 cv",
      "Teto rígido retrátil em 14 segundos",
      "Modo Race com resposta de câmbio mais rápida",
      "Interior em couro pintado à mão",
    ],
    cover: "/images/cars/ferrari-portofino-m-cover.jpg",
    detail: "/images/cars/ferrari-portofino-m-detail.jpg",
    video: "/videos/cars/ferrari-portofino-m.mp4",
  },
  {
    slug: "porsche-911-cabriolet",
    brand: "Porsche",
    model: "911 Carrera S Cabriolet",
    year: 2024,
    categorySlug: "conversiveis",
    price: 1250000,
    powerHp: 450,
    zeroToHundred: 3.7,
    topSpeedKmh: 306,
    description:
      "A prova de que um ícone pode evoluir por seis décadas sem perder a essência. Capota de lona premium e a resposta de motor que só um 911 entrega.",
    highlights: [
      "Motor boxer biturbo de 450 cv",
      "Capota de lona com acionamento em 12 segundos",
      "Chassi com geometria de suspensão dianteira dianteira revisada",
      "Modo Sport Chrono de série",
    ],
    cover: "/images/cars/porsche-911-cabriolet-cover.jpg",
    detail: "/images/cars/porsche-911-cabriolet-detail.jpg",
    featured: true,
  },
  {
    slug: "porsche-taycan-turbo-s",
    brand: "Porsche",
    model: "Taycan Turbo S",
    year: 2024,
    categorySlug: "eletricos-de-luxo",
    price: 1950000,
    powerHp: 1050,
    zeroToHundred: 2.8,
    topSpeedKmh: 260,
    description:
      "Torque elétrico com alma esportiva. O Taycan prova que a transição para a eletrificação não precisa custar nenhuma emoção.",
    highlights: [
      "Dois motores elétricos, até 1050 cv em overboost",
      "0-100 km/h em 2,8 segundos",
      "Arquitetura de 800V para recarga ultrarrápida",
      "Tração integral com torque vectoring",
    ],
    cover: "/images/cars/porsche-taycan-turbo-s-cover.jpg",
    detail: "/images/cars/porsche-taycan-turbo-s-detail.jpg",
    featured: true,
  },
  {
    slug: "lucid-air",
    brand: "Lucid",
    model: "Air Grand Touring",
    year: 2024,
    categorySlug: "eletricos-de-luxo",
    price: 1680000,
    powerHp: 819,
    zeroToHundred: 3.0,
    topSpeedKmh: 270,
    description:
      "A maior autonomia entre os elétricos de luxo, embalada em um design minimalista que redefine o conceito de sedã premium.",
    highlights: [
      "Autonomia de até 830 km por carga",
      "819 cv e tração integral dupla",
      "Interior com painel de vidro curvo Glass Cockpit",
      "Espaço de porta-malas duplo (frontal e traseiro)",
    ],
    cover: "/images/cars/lucid-air-cover.jpg",
    detail: "/images/cars/lucid-air-detail.jpg",
  },
  {
    slug: "porsche-911-classic",
    brand: "Porsche",
    model: "911 Carrera 964",
    year: 1991,
    categorySlug: "classicos-raros",
    price: 980000,
    powerHp: 250,
    zeroToHundred: 5.7,
    topSpeedKmh: 260,
    description:
      "O último 911 a manter a silhueta original antes da modernização da década de 90. Motor boxer refrigerado a ar e uma mecânica pura, sem filtros eletrônicos.",
    highlights: [
      "Motor boxer 3.6 refrigerado a ar",
      "Exemplar revisado e documentado",
      "Interior original preservado",
      "Peça de coleção com valorização histórica",
    ],
    cover: "/images/cars/porsche-911-classic-cover.jpg",
    detail: "/images/cars/porsche-911-classic-detail.jpg",
    video: "/videos/cars/porsche-911-classic.mp4",
  },
  {
    slug: "jaguar-e-type",
    brand: "Jaguar",
    model: "E-Type Série 1",
    year: 1965,
    categorySlug: "classicos-raros",
    price: 1550000,
    powerHp: 265,
    zeroToHundred: 6.9,
    topSpeedKmh: 240,
    description:
      "Chamado por Enzo Ferrari de 'o carro mais bonito já feito'. Linhas atemporais que continuam parando o trânsito seis décadas depois.",
    highlights: [
      "Motor 6 cilindros em linha de 265 cv",
      "Um dos designs automotivos mais premiados da história",
      "Restauração completa documentada",
      "Raridade: produção limitada e alta valorização",
    ],
    cover: "/images/cars/jaguar-e-type-cover.jpg",
    detail: "/images/cars/jaguar-e-type-detail.jpg",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCarsByCategory(slug: string): Car[] {
  return cars.filter((car) => car.categorySlug === slug);
}

export function getCar(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function getFeaturedCars(): Car[] {
  return cars.filter((car) => car.featured);
}

export function getRelatedCars(car: Car, limit = 3): Car[] {
  return cars
    .filter((c) => c.slug !== car.slug && c.categorySlug === car.categorySlug)
    .slice(0, limit);
}

export function getCategoryCover(slug: string): string {
  const [firstCar] = getCarsByCategory(slug);
  return firstCar?.cover ?? "/images/showroom-wide.jpg";
}

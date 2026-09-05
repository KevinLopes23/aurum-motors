export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
};

export type Car = {
  slug: string;
  brand: string;
  model: string;
  year: number;
  categorySlug: string;
  price: number;
  powerHp: number;
  zeroToHundred: number;
  topSpeedKmh: number;
  description: string;
  highlights: string[];
  cover: string;
  detail: string;
  video?: string;
  featured?: boolean;
};

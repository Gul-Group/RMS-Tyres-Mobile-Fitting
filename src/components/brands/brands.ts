export const topBrandSlugs = [
  "michelin",
  "pirelli",
  "bridgestone",
  "continental",
  "goodyear",
  "dunlop",
  "hankook",
  "yokohama",
  "falken",
  "firestone"
] as const;

export type BrandSlug = (typeof topBrandSlugs)[number];

export const brandNames: Record<BrandSlug, string> = {
  michelin: "Michelin",
  pirelli: "Pirelli",
  bridgestone: "Bridgestone",
  continental: "Continental",
  goodyear: "Goodyear",
  dunlop: "Dunlop",
  hankook: "Hankook",
  yokohama: "Yokohama",
  falken: "Falken",
  firestone: "Firestone",
};

export const totalBrands = topBrandSlugs.length;



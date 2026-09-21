export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nicholasdias.com",
  name: "Nicholas Dias | Director & Filmmaker",
  description:
    "Portfolio criativo e audiovisual de Nicholas Dias. Direção criativa, filmes publicitários, aftermovies e narrativas de alto impacto visual.",
  author: "Nicholas Dias",
  location: "São Paulo, SP - Disponível globalmente",
  socials: {
    instagram: "https://instagram.com",
    vimeo: "https://vimeo.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;

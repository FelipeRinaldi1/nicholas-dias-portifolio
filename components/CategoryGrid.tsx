import React from "react";
import { CategoryCard, CategoryCardData } from "./CategoryCard";

interface CategoryGridProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  categories?: CategoryCardData[];
}

const DEFAULT_CATEGORIES: CategoryCardData[] = [
  {
    id: "aftermovies",
    count: "01 / 05",
    title: "Aftermovies & Eventos",
    tagline: "Coberturas cinematográficas de festivais, tours e grandes experiências ao vivo.",
    href: "#contact",
  },
  {
    id: "commercial",
    count: "02 / 05",
    title: "Commercial & TV / Campanhas",
    tagline: "Filmes publicitários conceituais orientados a posicionamento de marca e vendas.",
    href: "#contact",
  },
  {
    id: "social-media",
    count: "03 / 05",
    title: "Social Media & Conteúdo Rápido",
    tagline: "Vídeos verticais e peças de alta retenção para plataformas digitais.",
    href: "#contact",
  },
  {
    id: "branding",
    count: "04 / 05",
    title: "Branding & Identidade Visual",
    tagline: "Direção criativa e desdobramento visual completo para marcas em expansão.",
    href: "#contact",
  },
  {
    id: "photography",
    count: "05 / 05",
    title: "Fotografia & Direção de Arte",
    tagline: "Ensaios editoriais, still de produto e registros com estética autoral.",
    href: "#contact",
  },
];

export function CategoryGrid({
  sectionTitle = "SELECTED DISCIPLINES",
  sectionSubtitle = "Navegue pelo portfólio de acordo com o formato da sua produção.",
  categories = DEFAULT_CATEGORIES,
}: CategoryGridProps) {
  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
          {sectionTitle}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
          PORTFOLIO SEGMENTATION
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl font-light">
          {sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;

import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface CategoryCardData {
  id: string;
  title: string;
  tagline: string;
  count?: string;
  thumbnailUrl?: string;
  href?: string;
}

interface CategoryCardProps {
  category: CategoryCardData;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { title, tagline, count, thumbnailUrl, href = "#" } = category;

  return (
    <a
      href={href}
      className="group relative flex flex-col md:flex-row justify-between items-stretch overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-6 md:p-8 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40"
    >
      {/* Left side: Category information */}
      <div className="flex flex-col justify-between flex-1 pr-0 md:pr-8 mb-6 md:mb-0 z-10">
        <div>
          {count && (
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              {count}
            </span>
          )}
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 mt-3 max-w-md font-light">
            {tagline}
          </p>
        </div>

        <div className="pt-6 mt-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white uppercase group-hover:underline underline-offset-4 decoration-zinc-400">
            View projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>

      {/* Right side: Thumbnail with smooth zoom */}
      <div className="relative w-full md:w-64 lg:w-72 aspect-[16/10] md:aspect-auto rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/60 shrink-0">
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full min-h-[160px] bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
            <span className="text-xs font-mono tracking-widest text-zinc-600 uppercase">
              PREVIEW
            </span>
          </div>
        )}
      </div>
    </a>
  );
}

export default CategoryCard;

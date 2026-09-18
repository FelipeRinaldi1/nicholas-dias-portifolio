import React from "react";
import { ArrowRight } from "lucide-react";

interface AboutManifestoProps {
  quote?: string;
  authorName?: string;
  role?: string;
  imageSrc?: string;
  aboutUrl?: string;
}

export function AboutManifesto({
  quote = "Capturing the raw essence of subjects, translating vision into visceral cinematic stories that resonate globally.",
  authorName = "Nicholas Dias",
  role = "Filmmaker & Creative Director",
  imageSrc,
  aboutUrl = "#contact",
}: AboutManifestoProps) {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950 p-8 sm:p-12 md:p-16">
        {/* Background Image / Texture with low opacity */}
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt="Behind the scenes"
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-950 to-black pointer-events-none" />
        )}

        <div className="relative z-10 max-w-3xl">
          <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-6">
            MANIFESTO & PROCESS
          </span>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 leading-snug sm:leading-tight mb-8">
            &ldquo;{quote}&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-zinc-900">
            <div>
              <p className="text-sm font-bold tracking-wide uppercase text-white">
                {authorName}
              </p>
              <p className="text-xs text-zinc-500 tracking-wider uppercase font-medium mt-0.5">
                {role}
              </p>
            </div>

            <a
              href={aboutUrl}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-300 hover:text-white uppercase group transition-colors"
            >
              About Me / Minha História
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutManifesto;

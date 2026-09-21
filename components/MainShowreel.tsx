"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { ShowreelModal } from "./ShowreelModal";
import {trackEvent} from "@/lib/analytics";

interface MainShowreelProps {
  positioningTag?: string;
  headline?: string;
  description?: string;
  thumbnailUrl?: string;
  showreelVideoUrl?: string;
}

export function MainShowreel({
  positioningTag = "CREATIVE DIRECTOR & FILMMAKER",
  headline = "THE 2025 SHOWREEL",
  description = "A curated selection of cinematic commercials, brand films, and music videos directed over the past two years.",
  thumbnailUrl,
  showreelVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
}: MainShowreelProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePlayReel = () => {
    trackEvent("showreel_play", { video_title: headline, video_url: showreelVideoUrl });
    setIsModalOpen(true);
  }

  return (
    <section id="showreel" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center md:text-left mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
            {positioningTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            {headline}
          </h2>
        </div>
        <p className="text-sm md:text-base text-zinc-400 max-w-md font-light">
          {description}
        </p>
      </div>

      {/* Showreel Card with Trigger */}
      <div
        onClick={handlePlayReel}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handlePlayReel()}
        className="group relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 cursor-pointer shadow-2xl transition-all duration-500 hover:border-zinc-700 hover:shadow-zinc-900/40"
        aria-label="Assistir showreel oficial completo com áudio"
      >
        {/* Background / Thumbnail */}
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt={headline}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700/20 via-transparent to-transparent" />
          </div>
        )}

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Center Play Badge / Circular Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Outer pulsating ring */}
            <div className="absolute -inset-4 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
            {/* Main Play Circle */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 fill-black" />
            </div>
          </div>
        </div>

        {/* Corner labels */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
          <span className="text-[11px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-300">
            FULL SOUND REEL • 4K
          </span>
          <span className="text-xs font-semibold tracking-wider text-white hidden sm:block uppercase underline decoration-zinc-500 underline-offset-4">
            CLICK TO PLAY
          </span>
        </div>
      </div>

      {/* Modal Player */}
      <ShowreelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={showreelVideoUrl}
        title={`${headline} - ${positioningTag}`}
      />
    </section>
  );
}

export default MainShowreel;

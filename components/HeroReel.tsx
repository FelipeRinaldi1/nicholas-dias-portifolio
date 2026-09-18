import { ChevronDown } from "lucide-react";

interface HeroReelProps {
  videoSrc?: string;
  posterSrc?: string;
  headline?: string;
  subheadline?: string;
}

export function HeroReel({
  videoSrc,
  posterSrc,
  headline = "NICHOLAS DIAS",
  subheadline = "DIRECTOR & CINEMATOGRAPHER",
}: HeroReelProps) {
  return (
    <section className="relative w-full h-[90vh] min-h-[560px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video or Placeholder */}
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-zinc-900 via-black to-black opacity-90 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-transparent to-black" />
        </div>
      )}

      {/* Subtle Bottom Gradient Overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-4">
        <span className="text-xs md:text-sm tracking-[0.3em] font-medium text-zinc-400 uppercase">
          {subheadline}
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight uppercase leading-none">
          {headline}
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light">
          Visual stories engineered for emotion, impact, and high retention.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#clients"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
        aria-label="Rolar para a próxima seção"
      >
        <span className="text-[10px] tracking-[0.25em] font-semibold uppercase group-hover:tracking-[0.3em] transition-all">
          SCROLL DOWN
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-zinc-400 group-hover:text-white" />
      </a>
    </section>
  );
}

export default HeroReel;

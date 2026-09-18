import { HeroReel } from "@/components/HeroReel";
import { ClientLogos } from "@/components/ClientLogos";
import { MainShowreel } from "@/components/MainShowreel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { AboutManifesto } from "@/components/AboutManifesto";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* 1. Demoreel Hero (Impacto Imediato) */}
      <HeroReel />

      {/* 2. Faixa de Marcas / Clientes (Prova Social) */}
      <ClientLogos />

      <main className="flex-1 flex flex-col space-y-8 sm:space-y-12">
        {/* 3. Posicionamento & Showreel Oficial (Apresentação com Som) */}
        <MainShowreel />

        {/* 4. Segmentação de Portfólio por Nicho / Demanda */}
        <CategoryGrid />

        {/* 5. Manifesto & Bastidores (Humanização) */}
        <AboutManifesto />

        {/* 6. CTA Final & Contato ("Get in Touch") */}
        <ContactSection />
      </main>

      {/* Rodapé & Créditos */}
      <Footer />
    </div>
  );
}

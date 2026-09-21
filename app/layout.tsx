import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Nicholas Dias",
    "Filmmaker",
    "Diretor de Cena",
    "Audiovisual",
    "Creative Director",
    "Showreel",
    "Videomaker",
  ],
  openGraph: {
    title: "Nicholas Dias | Director & Filmmaker",
    description:
      "Filmes publicitários, aftermovies, videoclipes e narrativas visuais de alto impacto.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nicholas Dias Portfolio Showreel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Dias | Director & Filmmaker",
    description:
      "Filmes publicitários, aftermovies, videoclipes e narrativas visuais de alto impacto.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
        const jsonLd = {                                                                                                                         
        "@context": "https://schema.org",                                                                                                      
        "@type": "Person",                                                                                                                     
        name: siteConfig.author,                                                                                                               
        jobTitle: "Director & Cinematographer",                                                                                                
        url: siteConfig.url,                                                                                                                   
        address: {                                                                                                                             
          "@type": "PostalAddress",                                                                                                            
          addressLocality: "São Paulo",                                                                                                        
          addressRegion: "SP",                                                                                                                 
          addressCountry: "BR",                                                                                                                
        },                                                                                                                                     
        sameAs: [                                                                                                                              
          siteConfig.socials.instagram,                                                                                                        
          siteConfig.socials.vimeo,                                                                                                            
          siteConfig.socials.youtube,                                                                                                          
          siteConfig.socials.linkedin,                                                                                                         
        ],                                                                                                                                     
        knowsAbout: [                                                                                                                          
          "Film Direction",                                                                                                                    
          "Cinematography",                                                                                                                    
          "Audiovisual Production",                                                                                                            
          "Commercial Films",                                                                                                                  
          "Aftermovies",                                                                                                                       
        ],                                                                                                                                     
      };        
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 selection:bg-white selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />}

      </body>

    </html>
  );
}

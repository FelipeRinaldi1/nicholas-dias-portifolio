import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicholasdias.com"),
  title: "Nicholas Dias | Director & Filmmaker",
  description:
    "Portfolio criativo e audiovisual de Nicholas Dias. Direção criativa, filmes publicitários, aftermovies e narrativas de alto impacto visual.",
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
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}

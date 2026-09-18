import React from "react";

export interface ClientLogoItem {
  id: string;
  name: string;
  logoUrl?: string;
}

interface ClientLogosProps {
  title?: string;
  clients?: ClientLogoItem[];
}

const DEFAULT_CLIENTS: ClientLogoItem[] = [
  { id: "1", name: "RED BULL" },
  { id: "2", name: "SPOTIFY" },
  { id: "3", name: "WARNER MUSIC" },
  { id: "4", name: "PORSCHE" },
  { id: "5", name: "NIKE" },
  { id: "6", name: "UNIVERSAL" },
];

export function ClientLogos({
  title = "TRUSTED BY LEADING BRANDS & CREATIVE AGENCIES",
  clients = DEFAULT_CLIENTS,
}: ClientLogosProps) {
  return (
    <section id="clients" className="py-14 border-y border-zinc-900 bg-zinc-950/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <p className="text-center text-[11px] tracking-[0.25em] text-zinc-500 uppercase font-medium mb-8">
            {title}
          </p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {client.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  className="max-h-8 w-auto object-contain filter grayscale invert"
                />
              ) : (
                <span className="text-sm font-bold tracking-widest text-zinc-300 uppercase">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;

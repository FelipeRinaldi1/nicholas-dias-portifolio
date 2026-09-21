"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import {trackEvent} from "@/lib/analytics";

interface ContactSectionProps {
  email?: string;
  whatsappNumber?: string;
  whatsappDisplay?: string;
  location?: string;
}

export function ContactSection({
  email = "contato@nicholasdias.com",
  whatsappNumber = "5512997707739",
  whatsappDisplay = "+55 (12) 99770-7739",
  location = "São Paulo, SP - Disponível globalmente",
}: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackEvent("lead_form_submitted",{form_name:"contact_form"});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="mb-14">
        <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
          LET&apos;S COLLABORATE
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white">
          GET IN TOUCH
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left column: Direct contact info & WhatsApp */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <p className="text-zinc-400 text-base leading-relaxed font-light">
              Disponível para direções criativas, campanhas comerciais, produções musicais e projetos sob demanda.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={()=>{trackEvent("whatsapp_click",{number: whatsappNumber})}}
                className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-800/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                    WhatsApp Direto
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {whatsappDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                    E-mail Comercial
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-950 border border-zinc-850">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Base
                  </span>
                  <span className="text-sm font-medium text-zinc-300">
                    {location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: 3-field Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-10 space-y-6"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <p className="text-lg font-bold text-white uppercase tracking-wide">
                  Mensagem Enviada!
                </p>
                <p className="text-sm text-zinc-400">
                  Obrigado pelo contato. Retornaremos em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome ou empresa"
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu.email@empresa.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2"
                  >
                    Como posso ajudar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Conte sobre o projeto, objetivo, formato e prazos..."
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Enviar Mensagem
                  <Send className="w-4 h-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

# Checklist de Produção e Lançamento Comercial (TO-DO)

Este documento reúne todas as etapas necessárias para transformar o boilerplate do portfólio de Nicholas Dias em um produto comercial de alta conversão, pronto para captação de clientes, produtoras e marcas.

---

## 1. Mídias e Assets Reais (Alta Prioridade)
- [ ] **Vídeo Demoreel Hero (`HeroReel`)**:
  - Inserir `.mp4` em `public/hero-reel.mp4` (ou Cloudflare R2).
  - Requisitos: compressão H.264, sem áudio, 24/30fps, peso entre 3MB e 5MB.
- [ ] **Showreel Oficial com Áudio (`MainShowreel`)**:
  - Inserir URL definitiva (Vimeo não-listado ou YouTube).
  - Adicionar thumbnail estática de alta resolução para o card principal.
- [ ] **Thumbnails das Disciplinas (`CategoryGrid`)**:
  - Imagem de capa para cada um dos 5 nichos (Aftermovies, Commercial, Social Media, Branding, Fotografia).
- [ ] **Logos dos Clientes / Prova Social (`ClientLogos`)**:
  - Substituir os placeholders por SVGs monocromáticos de marcas/agências atendidas.
- [ ] **Foto de Bastidores / Manifesto (`AboutManifesto`)**:
  - Foto autoral em set ou processo de direção.
- [ ] **Assets de Identidade Visual e Redes**:
  - Adicionar `public/og-image.jpg` (1200x630px para WhatsApp, LinkedIn, etc.).
  - Adicionar `favicon.ico` e ícones de toque (`apple-touch-icon.png`).

---

## 2. Mecanismo de Captação e Contato (Leads Comerciais)
- [ ] **Integração do Formulário de Contato**:
  - O projeto é estático (`output: 'export'`), sendo necessário integrar via serviço serverless/SaaS (Resend, Web3Forms, Formspree ou Cloudflare Worker).
  - Ou implementar botão com redirecionamento direto preenchendo o texto no WhatsApp.
- [ ] **Informações de Contato Oficiais**:
  - Confirmar número de WhatsApp com DDI/DDD.
  - Definir e-mail comercial (ex: `contato@nicholasdias.com`).
  - Atualizar links sociais no rodapé (Instagram, Vimeo, YouTube, LinkedIn).

---

## 3. Experiência de Navegação dos Projetos
- [ ] **Destino dos cards em `CategoryGrid`**:
  - Definir se continuarão com âncora direta para orçamentos (`#contact`) ou se abrirão uma gaveta/modal com projetos em destaque de cada categoria (vídeos incorporados, ficha técnica e fotos).

---

## 4. SEO, Tracking e Analytics Comercial
- [X] **Domínio Oficial e URLs Canônicas**:
  - Configurar `metadataBase` com o domínio de produção definitivo em `app/layout.tsx`.
- [X] **Google Tag Manager (GTM) ou Google Analytics 4 (GA4)**:
  - Adicionar o script do GA4/GTM usando `@next/third-parties/google`.
- [X] **Eventos de Conversão Personalizados**:
  - Clique no botão de WhatsApp Direto.
  - Play / Abertura do modal do Showreel oficial.
  - Envio do formulário de contato.
  - Clique em "View projects" de nichos específicos.
- [ ] **Meta Pixel / LinkedIn Insight Tag (Opcional)**:
  - Configurar caso haja campanhas pagas para captação de clientes B2B.

---

## 5. Infraestrutura, Deploy e Performance
- [ ] **Deploy no Cloudflare Pages**:
  - Conectar repositório GitHub com build command `npm run build` e diretório de saída `out`.
- [ ] **Domínio Customizado e SSL**:
  - Apontar DNS e ativar SSL estrito no Cloudflare.
- [ ] **Otimização de Cache**:
  - Adicionar headers de cache para arquivos de mídia estáticos no Cloudflare Pages (`_headers`).

# Especificação Técnica e de Design: Portfolio Criativo / Audiovisual

Documento base para implementação da landing page de alta conversão, inspirado na estrutura de showreels internacionais e direcionado para profissionais criativos, videomakers e publicitários.

---

## 1. Identidade Visual e Estilo

* **Tema Base:** Dark Mode minimalista (`bg-black` e `bg-zinc-950`).
* **Tipografia:** * Títulos: Sans-serif geométrica em caixa alta (`tracking-wider`, `font-bold` ou `font-extrabold`). Ex: Inter, Montserrat ou Geist Sans.
* Corpo e apoios: Leve e legível (`text-zinc-400`).


* **Cores de Destaque (Accents):** Branco puro (`#FFFFFF`) e cinzas neutros (`zinc-800` a `zinc-600`), com cor primária de ação customizável (ex: Verde Lima, Rosa Neon ou Laranja Âmbar para botões e detalhes interativos).
* **Bordas e Containers:** Linhas sutis com opacidade (`border-zinc-800/80`), cantos levemente arredondados (`rounded-2xl` a `rounded-3xl`) e blur de vidro (`backdrop-blur-md`).

---

## 2. Estrutura e Arquitetura de Seções

A página segue um fluxo vertical de 6 blocos com objetivos de conversão definidos:

### Seção 1: Demoreel Hero

* **Objetivo:** Prender a atenção em 2 segundos sem atrito.
* **Componente:** `<HeroReel />`
* **Especificação:**
* Vídeo full screen ou 90vh rodando em loop contínuo.
* Parâmetros obrigatórios: `autoPlay`, `loop`, `muted`, `playsInline`.
* Arquivo `.mp4` altamente comprimido (3 a 5MB máx, sem áudio).
* Overlay gradiente sutil na base para suavizar a transição com a próxima seção.
* Indicador sutil de rolagem no centro inferior (*"SCROLL DOWN"* com seta animada).



### Seção 2: Faixa de Marcas / Clientes

* **Objetivo:** Estabelecer autoridade visual e confiança rápida.
* **Componente:** `<ClientLogos />`
* **Especificação:**
* Faixa horizontal de logos monocromáticos (brancos com opacidade `opacity-60 hover:opacity-100`).
* Layout em grid flexível ou carrossel infinito (ticker suave) contendo de 4 a 8 marcas parceiras, clientes ou agências atendidas.



### Seção 3: Posicionamento & Showreel Oficial 

* **Objetivo:** Permitir que o cliente veja a narrativa audiovisual completa com áudio.
* **Componente:** `<MainShowreel />`
* **Especificação:**
* Título de posicionamento em caixa alta: `[CARGO / ESPECIALIDADE]` (ex: *CREATIVE DIRECTOR & COPYWRITER*).
* Card interativo com thumbnail de alto impacto visual.
* Selo circular rotativo ou botão central: *"PLAY REEL / CLICK TO VIEW"*.
* Comportamento: Dispara um modal limpo carregando o vídeo completo com áudio ativado via YouTube, Vimeo ou link direto.



### Seção 4: Segmentação de Portfólio por Nicho / Demanda

* **Objetivo:** Facilitar a navegação para quem busca um tipo específico de entrega.
* **Componente:** `<CategoryGrid />`
* **Especificação:**
* Lista vertical ou grid de 2 colunas com cards horizontais.
* Categorias sugeridas:
* *Aftermovies & Eventos*
* *Commercial & TV / Campanhas*
* *Social Media & Conteúdo Rápido*
* *Branding & Identidade Visual*
* *Fotografia & Direção de Arte*


* Anatomia de cada card:
* Lado esquerdo: Título da categoria (H3 grande), micro-copy explicativa de 1 linha e link *"View projects →"*.
* Lado direito: Thumbnail do projeto mais marcante daquela categoria (com hover de zoom suave).





### Seção 5: Manifesto & Bastidores

* **Objetivo:** Conectar a pessoa física e o método de trabalho à entrega técnica.
* **Componente:** `<AboutManifesto />`
* **Especificação:**
* Banner horizontal com foto real de bastidores (ex: trabalhando em set, reunião ou processo criativo).
* Frase de manifesto em tipografia expressiva: *"Capturing the essence of my subjects and bringing their stories to life"* (ou equivalente focada em marcas).
* Botão discreto *"About Me / Minha História"*.



### Seção 6: CTA Final & Contato ("Get in Touch")

* **Objetivo:** Canal direto para fechamento de propostas.
* **Componente:** `<ContactSection />` + `<Footer />`
* **Especificação:**
* Título dominante: `GET IN TOUCH`.
* Bloco esquerdo:
* Número de WhatsApp direto clicável.
* E-mail comercial e endereço/cidade base de atendimento.


* Bloco direito:
* Formulário enxuto de 3 campos: *Nome*, *E-mail* e *Como posso ajudar? (textarea)*.


* Rodapé: Assinatura visual da marca, links de redes sociais, botão *"Back to top"* e crédito de desenvolvimento: *"Design & Development by Felipe Rinaldi"*.



---

## 3. Matriz de Componentes no Next.js

```text
components/
├── HeroReel.tsx         # Vídeo mudo em loop com scroll indicator
├── ClientLogos.tsx      # Ticker/grid de marcas atendidas
├── MainShowreel.tsx     # Headline + card que abre modal com áudio
├── ShowreelModal.tsx    # Modal acessível (Radix/shadcn dialog) para o player
├── CategoryGrid.tsx     # Seção de nichos de trabalho
├── CategoryCard.tsx     # Card reutilizável com imagem e link
├── AboutManifesto.tsx   # Foto de bastidores + frase de impacto
├── ContactSection.tsx   # Informações diretas + formulário
└── Footer.tsx           # Navegação secundária e créditos

```

---

## 4. Requisitos Técnicos e Otimizações

* **Vídeo Estático:** Arquivos colocados em `public/` devem passar por compressão H.264, sem faixa de áudio no arquivo do Hero, taxa de quadros a 24fps ou 30fps para manter o peso inferior a 5MB.
* **Build Estático:** Compatibilidade total com Cloudflare Pages (`output: 'export'` no `next.config.mjs`).
* **SEO e Metadados:** Tags OpenGraph configuradas com imagem de preview 1200x630px para gerar miniatura rica quando o link for enviado por WhatsApp ou redes sociais.
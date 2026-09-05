# AURUM Motors

Site institucional para uma concessionária fictícia de carros de luxo, construído como vitrine de alto padrão: fotos e vídeos reais dos veículos, transições de página nativas do React 19 (`ViewTransition`), animações de entrada com scroll e uma identidade visual escura com detalhes dourados.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/) — incluindo `ViewTransition` para as transições entre páginas
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animações de entrada com scroll
- TypeScript

## Funcionalidades

- **Home** com vídeo em tela cheia, categorias, carros em destaque e seção editorial
- **Catálogo de carros** (`/carros`) com filtro por categoria
- **Página de categoria** (`/categorias/[slug]`)
- **Ficha do carro** (`/carros/[slug]`) com galeria de fotos, vídeo do carro (quando disponível), especificações técnicas e CTA de WhatsApp
- **Sobre** e **Contato**
- Transições de página com morph de imagem (carro na listagem → carro no detalhe), slide direcional entre rotas e crossfade ao trocar filtros, usando a API nativa `ViewTransition` do React
- Catálogo de dados em `lib/data.ts` (sem banco de dados — fácil de editar manualmente)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Outros comandos

```bash
npm run build   # build de produção
npm run start   # roda o build de produção
npm run lint    # eslint
npx tsc --noEmit  # checagem de tipos
```

## Estrutura do projeto

```
app/                  rotas (App Router)
  carros/             catálogo e ficha de cada carro
  categorias/         listagem e página de cada categoria
  sobre/, contato/
components/           componentes de UI (header, footer, cards, reveal, etc.)
lib/                  dados dos carros/categorias e funções utilitárias
public/images/        fotos dos carros e da marca
public/videos/        vídeo de hero e vídeos individuais de alguns carros
```

## Editando o catálogo

Todos os carros e categorias estão em `lib/data.ts` — não há banco de dados nem CMS. Para adicionar, remover ou editar um carro, edite o array `cars` (ou `categories`) diretamente nesse arquivo. Cada carro aponta para arquivos de imagem/vídeo dentro de `public/`.

## Mídia

As fotos e vídeos foram buscados em bancos de imagem gratuitos de uso comercial (Pexels), priorizando fotos reais que correspondem à marca e modelo de cada carro do catálogo. Duas ressalvas importantes:

- **Fotos**: em 2 dos 12 carros (Lucid Air e Porsche Taycan) não havia foto de estoque do modelo exato disponível gratuitamente, então foi usada uma foto real de um modelo/ângulo próximo como substituto.
- **Vídeos**: apenas 7 dos 12 carros têm vídeo próprio na ficha técnica. Para os outros 5 (Lamborghini Urus, Porsche 911 Cabriolet, Porsche Taycan, Lucid Air, Jaguar E-Type), o estoque gratuito só tinha vídeos de marca diferente da anunciada — nesses casos a seção de vídeo simplesmente não aparece na página, em vez de mostrar um carro errado.

Antes de usar este projeto em produção para um negócio real, considere substituir a mídia por fotos/vídeos próprios do estoque real de veículos.

## Configuração pendente antes de publicar de verdade

- Número de WhatsApp e demais contatos em `components/site-footer.tsx` e `app/carros/[slug]/page.tsx` estão com um placeholder (`5511999999999`) — troque pelo número real.
- Preços, especificações e textos são fictícios/ilustrativos.

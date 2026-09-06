# RAIZ Restaurante — site

Site institucional de uma página para o **RAIZ Restaurante** (Barreiro) — cozinha
portuguesa contemporânea. Construído pela [Kubo Loko](https://kuboloko.pt).

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Deploy: Vercel (importar o repositório do GitHub)

## Scripts

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # build de produção para dist/
npm run preview  # servir o build localmente
npm run typecheck
```

## Estrutura

```
public/img/            imagens (logótipo, pratos, ambiente)
src/
  App.tsx              composição das secções
  index.css            Tailwind + tokens e utilitários
  lib/
    site.ts            CONTEÚDO editável: morada, horário, menu, avaliações…
    useReveal.ts       hook de animação on-scroll (IntersectionObserver)
  components/
    Header, Hero, About, Menu, Gallery, Reviews,
    Hours, Reservations, Contact, Footer, Reveal, Icons
```

## Editar conteúdo

Quase tudo vive em [`src/lib/site.ts`](src/lib/site.ts): morada, telefone,
Instagram, classificação Google, preços, horário, pratos em destaque, galeria e
avaliações.

### Por fazer / a confirmar com o cliente

- **Google Reserve:** `site.reserveUrl` aponta, por agora, para a ficha do Google.
  Substituir pelo link directo de reserva (`google.com/maps/reserve/...`) quando
  estiver activo.
- **WhatsApp:** `site.whatsappNumber` usa o número fixo publicado. Trocar por um
  número WhatsApp dedicado, se existir.
- **Avaliações:** as três avaliações em `reviews` são exemplos assinalados com
  `PLACEHOLDER`. Substituir por avaliações reais copiadas do perfil Google.
- **Fotografia:** as imagens em `public/img/` vêm do Instagram do RAIZ. Trocar por
  fotografia de sala/ambiente quando disponível.

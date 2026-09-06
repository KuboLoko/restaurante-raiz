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

- **⚠️ Google Reserve — NEEDS CLIENT CONFIRMATION:** `site.reserveUrl` aponta,
  por agora, para a pesquisa genérica da ficha Google do RAIZ, **não** para o
  link directo de "Reservar mesa" (Google Reserve, `google.com/maps/reserve/...`).
  Confirmar com o cliente qual é o URL correcto de reserva e substituir. Não
  adivinhar o link.
- **⚠️ WhatsApp — a confirmar com o cliente:** `site.whatsappNumber` está a
  `null` por defeito. Enquanto for `null`, o botão de WhatsApp fica escondido nas
  secções Reservas/Contactos e mostra-se apenas o link `tel:`. Confirmar se o
  cliente tem um número WhatsApp Business dedicado; se sim, colocar em
  `site.whatsappNumber` (formato internacional sem "+" nem espaços, ex.
  `351912345678`). **Não** assumir que o fixo publicado (21 826 5057) tem WhatsApp.
- **Avaliações:** as três avaliações em `reviews` são reais, copiadas do perfil
  Google do RAIZ (texto traduzido para pt-PT quando o original estava em inglês).
- **Fotografia:** as imagens em `public/img/` vêm do Instagram do RAIZ. Trocar por
  fotografia de sala/ambiente quando disponível.

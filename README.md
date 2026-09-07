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

## CLIENT QUESTIONS — confirmar antes do lançamento

Quatro pontos por fechar com o cliente. Tudo o resto está pronto.

1. **Pratos do menu.** A secção mostra agora 8 pratos, cada um com a fotografia
   real correspondente (ficheiros em `public/img/menu-*.jpg`): Lingueirão à
   pil-pil, Pica-pau de atum, Queijo da Maçussa, Couve à alhada, Arroz de forno,
   Magret de pato, Nectarina com nata fresca, Torta do Tóni.
   → Confirmar que estes 8 estão certos (nome e foto). Se **Vieiras na Braza**,
   **Bacalhau à Brás** ou **Lomo Saltado** devem aparecer, enviar o **nome exacto
   + fotografia** de cada um — não temos foto destes pratos no material actual.

2. **Preços.** Neste momento não há preço por prato; a secção mostra apenas
   "refeição média de 20–25 € por pessoa".
   → Enviar os **preços reais por prato**, ou confirmar que se mantém só o
   intervalo 20–25 €. (Campo `price` em cada item de `menu` em `src/lib/site.ts`.)

3. **Reserva Google.** `site.reserveUrl` aponta para a pesquisa genérica da ficha
   Google, **não** para o link directo de "Reservar mesa".
   → Enviar o **link Google Reserve correcto** (`google.com/maps/reserve/...`).

4. **WhatsApp.** `site.whatsappNumber` está a `null`, por isso o botão de WhatsApp
   não aparece (só o telefone `tel:`). Não assumimos que o fixo 21 826 5057 tem
   WhatsApp.
   → Confirmar se existe um **número WhatsApp Business**; se sim, indicá-lo
   (formato internacional sem "+" nem espaços, ex. `351912345678`).

### Notas

- **Avaliações:** as três em `reviews` são reais, do perfil Google do RAIZ
  (traduzidas para pt-PT quando o original estava em inglês).
- **Fotografia:** as imagens vêm do Instagram do RAIZ; trocar por fotografia de
  sala/ambiente quando existir. O logótipo (`public/img/logo.jpg`) também é o
  favicon e a imagem de partilha (Open Graph).

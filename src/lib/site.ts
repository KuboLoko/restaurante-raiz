/**
 * Language-neutral restaurant data (numbers, links, image paths, times).
 * All translatable copy lives in src/lib/i18n.tsx.
 */

export const site = {
  name: 'RAIZ',
  legalName: 'RAIZ Restaurante',

  address: {
    street: 'R. Capitães de Abril 41, Q.ta da Lomba',
    postal: '2830-189 Barreiro',
    full: 'R. Capitães de Abril 41, Q.ta da Lomba, 2830-189 Barreiro',
  },

  phone: {
    display: '21 826 5057',
    href: 'tel:+351218265057',
  },

  // NEEDS CLIENT CONFIRMATION — see README. Confirm the dedicated WhatsApp
  // Business number. While null the WhatsApp button stays hidden and only the
  // tel: link shows. International format, no "+" or spaces (e.g. '351912345678').
  whatsappNumber: null as string | null,

  instagram: {
    url: 'https://www.instagram.com/by.raiz/',
    handle: '@by.raiz',
  },

  rating: {
    value: 4.8,
    count: 187,
    url: 'https://www.google.com/maps/search/?api=1&query=RAIZ+Restaurante+Barreiro',
  },

  /** Average-spend figure shown in the menu intro (currency symbol reads the same in pt/en/es). */
  priceRange: '20–25 €',

  // NEEDS CLIENT CONFIRMATION — see README. Points to the generic Google profile
  // search, NOT the "Reservar mesa" (Google Reserve) deep link.
  reserveUrl: 'https://www.google.com/maps/search/?api=1&query=RAIZ+Restaurante+Barreiro',

  maps: {
    link: 'https://www.google.com/maps/search/?api=1&query=RAIZ+Restaurante%2C+R.+Capit%C3%A3es+de+Abril+41%2C+Barreiro',
    embed:
      'https://www.google.com/maps?q=RAIZ%20Restaurante%2C%20R.%20Capit%C3%A3es%20de%20Abril%2041%2C%202830-189%20Barreiro&z=15&output=embed',
  },
} as const

/** Sections in nav order. Labels come from i18n (`t.nav[id]`). */
export const navSections = ['sobre', 'menu', 'galeria', 'horario', 'contactos'] as const
export type NavId = (typeof navSections)[number]

/**
 * Menu dishes — photo + (optional) price only. The dish name is language-neutral
 * (matches the photo filename in public/img/). Descriptions/alt text: i18n
 * `t.menu.items[i]`, joined by index — keep this order in sync with the dict.
 * Prices: none supplied yet (see README CLIENT QUESTIONS).
 */
export const menuBase: { name: string; image: string; price?: string }[] = [
  { name: 'Lingueirão à pil-pil', image: '/img/menu-lingueirao-pil-pil.jpg' },
  { name: 'Pica-pau de atum', image: '/img/menu-picapau-atum.jpg' },
  { name: 'Queijo da Maçussa', image: '/img/menu-queijo-macussa.jpg' },
  { name: 'Couve à alhada', image: '/img/menu-couve-alhada.jpg' },
  { name: 'Arroz de forno', image: '/img/menu-arroz-de-forno.jpg' },
  { name: 'Magret de pato', image: '/img/menu-magret-pato.jpg' },
  { name: 'Nectarina com nata fresca', image: '/img/menu-nectarina-nata.jpg' },
  { name: 'Torta do Tóni', image: '/img/menu-torta-toni.jpg' },
]

/** Gallery photos. Alt text: i18n `t.gallery.alt[i]`, joined by index. */
export const galleryBase = [
  { src: '/img/galeria-1.jpg' },
  { src: '/img/galeria-2.jpg' },
  { src: '/img/galeria-3.jpg' },
  { src: '/img/galeria-4.jpg' },
  { src: '/img/galeria-5.jpg' },
  { src: '/img/galeria-6.jpg' },
]

/** Real Google review authors (language-neutral). meta + text: i18n `t.reviews.items[i]`. */
export const reviewAuthors = ['Anastasiia Krokhmaleva', 'Joana Aiveca Palma', 'Ricardo'] as const

/** Opening hours, keyed by Date.getDay() (0 = Sunday). Day labels come from i18n. */
export const hoursTimes: Record<
  number,
  { lunch: string | null; dinner: string | null; closed?: boolean }
> = {
  1: { lunch: '12:30 – 14:30', dinner: '19:30 – 22:30' },
  2: { lunch: '12:30 – 14:30', dinner: '19:30 – 22:30' },
  3: { lunch: '12:30 – 14:30', dinner: '19:30 – 22:30' },
  4: { lunch: '12:30 – 14:30', dinner: '19:30 – 22:30' },
  5: { lunch: '12:30 – 15:00', dinner: '19:30 – 23:00' },
  6: { lunch: '12:30 – 15:00', dinner: '19:30 – 23:00' },
  0: { lunch: null, dinner: null, closed: true },
}

/** Monday-first display order. */
export const weekOrder = [1, 2, 3, 4, 5, 6, 0]

/** Builds a wa.me link with a pre-filled message, or null when no number is set. */
export function waHref(text: string): string | null {
  return site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
    : null
}

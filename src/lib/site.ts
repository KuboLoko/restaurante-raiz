/**
 * Single source of truth for every piece of restaurant content on the site.
 * Update values here — components read from this file only.
 */

export const site = {
  name: 'RAIZ',
  legalName: 'RAIZ Restaurante',
  tagline: 'Cozinha portuguesa de raiz',
  heroSubtitle:
    'Sabores de Portugal com um gesto contemporâneo. Produto fresco, mesa honesta, no coração do Barreiro.',
  shortAbout:
    'Quatro amigos, um regresso às origens e uma cozinha que junta a tradição portuguesa a técnica e produto de hoje.',

  address: {
    street: 'R. Capitães de Abril 41, Q.ta da Lomba',
    postal: '2830-189 Barreiro',
    full: 'R. Capitães de Abril 41, Q.ta da Lomba, 2830-189 Barreiro',
  },

  phone: {
    display: '21 826 5057',
    href: 'tel:+351218265057',
  },

  // Confirm with client whether they have a dedicated WhatsApp Business number.
  // If null, hide the WhatsApp button in the Reservations/Contact sections and
  // show only the tel: link. Do NOT assume the published landline (21 826 5057)
  // supports WhatsApp. Set to the number in international format without "+" or
  // spaces (e.g. '351912345678') once confirmed.
  whatsappNumber: null as string | null,
  whatsappText: 'Olá! Gostava de reservar uma mesa no RAIZ.',

  instagram: {
    url: 'https://www.instagram.com/by.raiz/',
    handle: '@by.raiz',
  },

  rating: {
    value: 4.8,
    count: 187,
    url: 'https://www.google.com/maps/search/?api=1&query=RAIZ+Restaurante+Barreiro',
  },

  priceRange: '20–25 € por pessoa',

  // NEEDS CLIENT CONFIRMATION: verify this is the correct Google Reserve deep link.
  // This currently points to the generic Google Business profile search, NOT the
  // "Reservar mesa" (Google Reserve) deep link (google.com/maps/reserve/...).
  // Replace with the real reservation URL once confirmed with the client.
  reserveUrl: 'https://www.google.com/maps/search/?api=1&query=RAIZ+Restaurante+Barreiro',

  maps: {
    link: 'https://www.google.com/maps/search/?api=1&query=RAIZ+Restaurante%2C+R.+Capit%C3%A3es+de+Abril+41%2C+Barreiro',
    embed:
      'https://www.google.com/maps?q=RAIZ%20Restaurante%2C%20R.%20Capit%C3%A3es%20de%20Abril%2041%2C%202830-189%20Barreiro&z=15&output=embed',
  },

  services: ['Sala', 'Take away', 'Entrega'],
} as const

export type Day = {
  label: string
  lunch: string | null
  dinner: string | null
  closed?: boolean
}

/** Segunda = 1 … Domingo = 0, alinhado com Date.getDay() */
export const hours: Record<number, Day> = {
  1: { label: 'Segunda', lunch: '12:30 – 14:30', dinner: '19:30 – 22:30' },
  2: { label: 'Terça', lunch: '12:30 – 14:30', dinner: '19:30 – 22:30' },
  3: { label: 'Quarta', lunch: '12:30 – 14:30', dinner: '19:30 – 22:30' },
  4: { label: 'Quinta', lunch: '12:30 – 14:30', dinner: '19:30 – 22:30' },
  5: { label: 'Sexta', lunch: '12:30 – 15:00', dinner: '19:30 – 23:00' },
  6: { label: 'Sábado', lunch: '12:30 – 15:00', dinner: '19:30 – 23:00' },
  0: { label: 'Domingo', lunch: null, dinner: null, closed: true },
}

export type Dish = {
  name: string
  description: string
  price?: string
  image: string
  alt: string
}

export const menu: Dish[] = [
  {
    name: 'Vieiras na braza',
    description:
      'Vieiras grelhadas na brasa, manteiga de algas e um toque cítrico. O prato que toda a gente pede.',
    price: '16 €',
    image: '/img/menu-vieiras.jpg',
    alt: 'Vieiras grelhadas na brasa com couve e coentros num prato de porcelana azul',
  },
  {
    name: 'Lomo saltado',
    description:
      'Lombo de vaca maturado, salteado no wok, cebola roxa em pickle e o seu próprio jus.',
    price: '19 €',
    image: '/img/menu-lomo.jpg',
    alt: 'Fatias de lombo de vaca grelhado com cebola roxa e molho num prato de aro vermelho',
  },
  {
    name: 'Bacalhau à Brás de raiz',
    description:
      'A nossa leitura do clássico: lascas de bacalhau, batata palha crocante, gema curada e azeite.',
    price: '17 €',
    image: '/img/menu-bacalhau.jpg',
    alt: 'Releitura de bacalhau à brás com batata crocante e coentros num prato azul e branco',
  },
  {
    name: 'Arancino',
    description:
      'Esfera de arroz cremosa e estaladiça, recheio do dia e emulsão de ervas frescas.',
    price: '9 €',
    image: '/img/menu-arancino.jpg',
    alt: 'Arancino dourado e estaladiço sobre prato florido vintage',
  },
  {
    name: 'Barriga de porco estaladiça',
    description:
      'Cozinhada em baixa temperatura, pele estaladiça, guarnição de época e molho encorpado.',
    price: '18 €',
    image: '/img/menu-porco.jpg',
    alt: 'Tiras de barriga de porco com pele estaladiça e molho num prato azul willow',
  },
  {
    name: 'Leite-creme queimado',
    description:
      'Leite-creme cremoso com crosta caramelizada na hora e fruta da estação. Assim se acaba uma refeição.',
    price: '6 €',
    image: '/img/menu-leitecreme.jpg',
    alt: 'Sobremesa de leite-creme com merengue queimado e fruta vermelha',
  },
]

export const galleryImages = [
  { src: '/img/galeria-1.jpg', alt: 'Carpaccio com alcaparras, nozes e azeite de ervas' },
  { src: '/img/galeria-2.jpg', alt: 'Peito de pato laqueado com cebola roxa e rebentos' },
  { src: '/img/galeria-3.jpg', alt: 'Pêssego grelhado com creme e crocante de frutos secos' },
  { src: '/img/galeria-4.jpg', alt: 'Tártaro de vaca com pão torrado na brasa' },
  { src: '/img/galeria-5.jpg', alt: 'Rolhas de vinho português na garrafeira do RAIZ' },
  { src: '/img/galeria-6.jpg', alt: 'Prato de couve grelhada com molho cremoso e coentros' },
]

export type Review = {
  name: string
  /** Free-form sub-caption: source and reviewer context (e.g. "Google · Guia Local · 12 críticas"). */
  meta: string
  text: string
}

// Avaliações reais do perfil Google do RAIZ. Texto traduzido para pt-PT quando
// o original estava em inglês; nomes e contexto do avaliador mantidos fiéis.
export const reviews: Review[] = [
  {
    name: 'Anastasiia Krokhmaleva',
    meta: 'Google · Guia Local · 12 críticas',
    text: 'Espaço simpático e com pessoal atencioso. Ficámos verdadeiramente surpreendidos com o sabor de tudo! A comida estava incrivelmente fresca e deliciosa.',
  },
  {
    name: 'Joana Aiveca Palma',
    meta: 'Google',
    text: 'Um sítio fantástico para provar a verdadeira cozinha portuguesa com um toque moderno.',
  },
  {
    name: 'Ricardo',
    meta: 'Google · Guia Local · 68 críticas',
    text: 'O melhor restaurante de Portugal. Ingredientes frescos, uma excelente volta moderna à cozinha portuguesa, óptimo ambiente, óptimo serviço — e muito mais!',
  },
]

export const navLinks = [
  { href: '#sobre', label: 'A casa' },
  { href: '#menu', label: 'Menu' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#horario', label: 'Horário' },
  { href: '#contactos', label: 'Contactos' },
]

/** wa.me link, or null when no WhatsApp number is configured (see site.whatsappNumber). */
export const whatsappHref = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappText)}`
  : null

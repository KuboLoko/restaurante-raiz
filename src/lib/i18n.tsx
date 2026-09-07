/**
 * Internationalisation: pt-PT (default), English, Español.
 *
 * - Language-neutral data (numbers, links, image paths) lives in site.ts.
 * - Everything textual lives in the `pt` / `en` / `es` dictionaries below.
 * - The active language is: ?lang= query param → localStorage → browser language
 *   → 'pt'. It is persisted and reflected in <html lang>, <title>, the meta
 *   description and the URL (?lang=en / ?lang=es; pt drops the param).
 */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { galleryBase, menuBase, reviewAuthors } from './site'

export type Lang = 'pt' | 'en' | 'es'

export const LANGS: { code: Lang; short: string }[] = [
  { code: 'pt', short: 'PT' },
  { code: 'en', short: 'EN' },
  { code: 'es', short: 'ES' },
]

/* ------------------------------------------------------------------ pt-PT --- */

const pt = {
  htmlLang: 'pt-PT',
  langName: 'Português',
  ratingValue: '4,8',

  meta: {
    title: 'RAIZ Restaurante — Cozinha portuguesa de raiz, no Barreiro',
    description:
      'RAIZ Restaurante — cozinha portuguesa contemporânea no Barreiro. Ingredientes frescos, tradição com um toque moderno. Reserve a sua mesa.',
  },

  a11y: { skip: 'Saltar para o conteúdo' },

  nav: {
    sobre: 'A casa',
    menu: 'Menu',
    galeria: 'Galeria',
    horario: 'Horário',
    contactos: 'Contactos',
  },

  header: {
    reservar: 'Reservar',
    reservarMesa: 'Reservar mesa',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    menuSr: 'Menu',
    homeAria: 'RAIZ Restaurante — início',
    navMain: 'Navegação principal',
    navMobile: 'Navegação (telemóvel)',
    langGroup: 'Idioma',
  },

  hero: {
    eyebrow: 'Barreiro · Cozinha portuguesa contemporânea',
    subtitle:
      'Sabores de Portugal com um gesto contemporâneo. Produto fresco, mesa honesta, no coração do Barreiro.',
    verMenu: 'Ver o menu',
    ratingSuffix: 'avaliações no Google',
    descobrir: 'Descobrir',
    imgAlt: 'Prato de lingueirão grelhado servido no RAIZ, iluminado sobre mesa escura',
  },

  about: {
    eyebrow: 'A casa',
    title: 'Voltámos às origens para abrir mesa no Barreiro',
    p1: 'O RAIZ nasce de quatro amigos que decidiram regressar ao sítio onde tudo começou. Trouxemos na bagagem anos de cozinha por várias casas e uma ideia simples: servir comida portuguesa a sério, sem solenidade.',
    p2: 'Na cozinha, respeitamos o produto de época e os fornecedores da região, e deixamos a técnica trabalhar para o sabor, não para o espectáculo. O resultado é uma carta curta que muda com as estações, onde o clássico e o contemporâneo se sentam à mesma mesa.',
    p3: 'Quatro amigos, um regresso às origens e uma cozinha que junta a tradição portuguesa a técnica e produto de hoje.',
    foundedLabel: 'Fundado por',
    foundedValue: '4 amigos',
    kitchenLabel: 'Cozinha',
    kitchenValue: 'De raiz',
    whereLabel: 'Onde',
    whereValue: 'Barreiro',
    quote: '“Raiz” é de onde tudo cresce.',
    imgAlt:
      'Peito de pato fatiado com salada de laranja, servido à luz do dia numa mesa de madeira do RAIZ',
  },

  menu: {
    eyebrow: 'À mesa',
    title: 'Alguns favoritos da casa',
    intro:
      'Uma amostra do que servimos com mais orgulho. A carta completa muda com a época e está sempre disponível no restaurante. Refeição média de {price} por pessoa.',
    takeaway: 'Também pode levantar (take away) ou pedir entrega ao domicílio.',
    items: [
      {
        description:
          'Lingueirão salteado em azeite, alho e malagueta, ligado num pil-pil bem montado. Para começar como deve ser.',
        alt: 'Lingueirões grelhados alinhados num prato azul willow, regados com azeite de ervas',
      },
      {
        description:
          'Tacos de atum corados no ponto, molho de manteiga e pickles, com batata frita à parte. Um petisco para partilhar.',
        alt: 'Tacos de atum corado num prato de vidro com molho, ao lado de uma taça de batata frita',
      },
      {
        description:
          'Tártaro de novilho picado à faca sob um manto de queijo da Maçussa curado, gema e pão torrado na brasa.',
        alt: 'Tártaro de novilho coberto de queijo curado ralado e cebolinho, com torradas ao lado',
      },
      {
        description:
          'Couve-coração grelhada na brasa, refogada com alho e algas, broa torrada e um fio de malagueta.',
        alt: 'Couve-coração grelhada com refogado de couve, coentros e broa torrada num prato azul willow',
      },
      {
        description:
          'Arroz assado no forno em cazuela de barro, beterraba, cebola roxa em pickle e ervas frescas. Conforto com assinatura.',
        alt: 'Cazuela de barro com arroz assado, beterraba assada e cebola roxa em pickle',
      },
      {
        description:
          'Peito de pato laqueado e fatiado no ponto rosado, com salada de laranja e agrião.',
        alt: 'Fatias de peito de pato laqueado com salada de laranja e agrião num prato de loiça azul',
      },
      {
        description:
          'Nectarina grelhada e caramelizada, crocante de frutos secos e uma quenelle de nata fresca batida na hora.',
        alt: 'Gomos de nectarina grelhada com crocante de frutos secos sobre nata fresca batida',
      },
      {
        description:
          'A torta de sempre, fofa e húmida, com raspa de citrinos e flor de sal. Receita do Tóni, claro.',
        alt: 'Fatia de torta enrolada dourada com raspa de citrinos e flor de sal num prato vintage',
      },
    ],
  },

  gallery: {
    eyebrow: 'Galeria',
    title: 'Um bocadinho da sala e da cozinha',
    introBefore: 'Pratos, produto e ambiente. Para ver o dia a dia do RAIZ, siga-nos em ',
    introAfter: '.',
    alt: [
      'Carpaccio com alcaparras, nozes e azeite de ervas',
      'Peito de pato laqueado com cebola roxa e rebentos',
      'Pêssego grelhado com creme e crocante de frutos secos',
      'Tártaro de vaca com pão torrado na brasa',
      'Rolhas de vinho português na garrafeira do RAIZ',
      'Prato de couve grelhada com molho cremoso e coentros',
    ],
  },

  reviews: {
    eyebrow: 'Quem nos visita',
    title: '{rating} estrelas, {count} avaliações',
    seeGoogle: 'Ver no Google',
    ariaStars: '5 em 5 estrelas',
    items: [
      {
        meta: 'Google · Guia Local · 12 críticas',
        text: 'Espaço simpático e com pessoal atencioso. Ficámos verdadeiramente surpreendidos com o sabor de tudo! A comida estava incrivelmente fresca e deliciosa.',
      },
      {
        meta: 'Google',
        text: 'Um sítio fantástico para provar a verdadeira cozinha portuguesa com um toque moderno.',
      },
      {
        meta: 'Google · Guia Local · 68 críticas',
        text: 'O melhor restaurante de Portugal. Ingredientes frescos, uma excelente volta moderna à cozinha portuguesa, óptimo ambiente, óptimo serviço — e muito mais!',
      },
    ],
  },

  hours: {
    eyebrow: 'Horário',
    title: 'Quando estamos de portas abertas',
    intro:
      'Servimos almoço e jantar de segunda a sábado. Ao domingo, descansamos para voltar melhores.',
    openNow: 'Aberto agora',
    closedToday: 'Encerrado hoje',
    closedNow: 'Fechado neste momento',
    weekHeader: 'Semana',
    closed: 'Encerrado',
    today: '(hoje)',
    days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  },

  reservations: {
    eyebrow: 'Reservas',
    title: 'Guarde a sua mesa no RAIZ',
    introWa:
      'Reserve em segundos pelo Google, ou fale connosco directamente por WhatsApp ou telefone. Para grupos grandes e eventos, contacte-nos e tratamos de tudo.',
    introNoWa:
      'Reserve em segundos pelo Google, ou fale connosco directamente por telefone. Para grupos grandes e eventos, contacte-nos e tratamos de tudo.',
    reservarGoogle: 'Reservar pelo Google',
    whatsapp: 'WhatsApp',
  },

  contact: {
    eyebrow: 'Contactos & morada',
    title: 'Encontre-nos no Barreiro',
    addressLabel: 'Morada',
    phoneLabel: 'Telefone',
    hoursLabel: 'Horário',
    hoursLines: [
      'Seg–Qui 12:30–14:30 · 19:30–22:30',
      'Sex–Sáb 12:30–15:00 · 19:30–23:00',
      'Domingo encerrado',
    ],
    instagramLabel: 'Instagram',
    mapTitle: 'Mapa — RAIZ Restaurante, Barreiro',
  },

  footer: {
    rights: 'Todos os direitos reservados.',
    madeBy: 'Site por',
    reservas: 'Reservas',
  },

  wa: { prefill: 'Olá! Gostava de reservar uma mesa no RAIZ.' },
}

export type Dict = typeof pt

/* ---------------------------------------------------------------- English --- */

const en: Dict = {
  htmlLang: 'en',
  langName: 'English',
  ratingValue: '4.8',

  meta: {
    title: 'RAIZ Restaurante — Modern Portuguese cooking in Barreiro',
    description:
      'RAIZ Restaurante — contemporary Portuguese cooking in Barreiro. Fresh produce, tradition with a modern touch. Book your table.',
  },

  a11y: { skip: 'Skip to content' },

  nav: {
    sobre: 'The place',
    menu: 'Menu',
    galeria: 'Gallery',
    horario: 'Hours',
    contactos: 'Contact',
  },

  header: {
    reservar: 'Book',
    reservarMesa: 'Book a table',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuSr: 'Menu',
    homeAria: 'RAIZ Restaurante — home',
    navMain: 'Main navigation',
    navMobile: 'Navigation (mobile)',
    langGroup: 'Language',
  },

  hero: {
    eyebrow: 'Barreiro · Contemporary Portuguese cooking',
    subtitle:
      'The flavours of Portugal with a contemporary hand. Fresh produce and an honest table, in the heart of Barreiro.',
    verMenu: 'See the menu',
    ratingSuffix: 'reviews on Google',
    descobrir: 'Discover',
    imgAlt: 'A plate of grilled razor clams served at RAIZ, lit over a dark table',
  },

  about: {
    eyebrow: 'The place',
    title: 'We went back to our roots to open a table in Barreiro',
    p1: 'RAIZ was started by four friends who decided to return to where it all began. We brought years of cooking in other kitchens and one simple idea: serve proper Portuguese food, without the fuss.',
    p2: 'In the kitchen we respect what is in season and the region’s producers, and we let technique work for flavour, not for show. The result is a short menu that changes with the seasons, where the classic and the contemporary share the same table.',
    p3: 'Four friends, a return to their roots, and a kitchen that brings Portuguese tradition together with the produce and technique of today.',
    foundedLabel: 'Founded by',
    foundedValue: '4 friends',
    kitchenLabel: 'Kitchen',
    kitchenValue: 'Rooted',
    whereLabel: 'Where',
    whereValue: 'Barreiro',
    quote: '“Raiz” is where everything grows from.',
    imgAlt:
      'Sliced duck breast with orange salad, served in daylight on a wooden table at RAIZ',
  },

  menu: {
    eyebrow: 'At the table',
    title: 'A few house favourites',
    intro:
      'A taste of what we are proudest to serve. The full menu changes with the season and is always available at the restaurant. Average meal around {price} per person.',
    takeaway: 'Takeaway and home delivery are also available.',
    items: [
      {
        description:
          'Razor clams sautéed in olive oil, garlic and chilli, bound in a properly emulsified pil-pil. The right way to start.',
        alt: 'Grilled razor clams lined up on a blue willow plate, dressed with herb oil',
      },
      {
        description:
          'Cubes of tuna seared to a blush, butter-and-pickle sauce, with fries on the side. A dish to share.',
        alt: 'Seared tuna cubes in a glass dish with sauce, next to a bowl of fries',
      },
      {
        description:
          'Hand-cut beef tartare under a blanket of cured Maçussa cheese, egg yolk and charcoal-toasted bread.',
        alt: 'Beef tartare covered with grated cured cheese and chives, toast on the side',
      },
      {
        description:
          'Hispi cabbage grilled over coals, braised with garlic and seaweed, toasted cornbread and a thread of chilli.',
        alt: 'Grilled hispi cabbage with braised cabbage, coriander and toasted cornbread on a blue willow plate',
      },
      {
        description:
          'Rice baked in a clay dish with beetroot, pickled red onion and fresh herbs. Comfort, with a signature.',
        alt: 'Clay dish of baked rice with roasted beetroot and pickled red onion',
      },
      {
        description:
          'Glazed duck breast, sliced pink, with orange and watercress salad.',
        alt: 'Slices of glazed duck breast with orange and watercress salad on blue crockery',
      },
      {
        description:
          'Grilled, caramelised nectarine, nut crunch and a quenelle of cream whipped to order.',
        alt: 'Segments of grilled nectarine with nut crunch over freshly whipped cream',
      },
      {
        description:
          'The rolled sponge we always make, soft and moist, with citrus zest and sea salt. Tóni’s recipe, of course.',
        alt: 'A slice of golden rolled sponge cake with citrus zest and sea salt on a vintage plate',
      },
    ],
  },

  gallery: {
    eyebrow: 'Gallery',
    title: 'A little of the room and the kitchen',
    introBefore: 'Dishes, produce and atmosphere. For the day to day at RAIZ, follow us on ',
    introAfter: '.',
    alt: [
      'Carpaccio with capers, walnuts and herb oil',
      'Glazed duck breast with red onion and sprouts',
      'Grilled peach with cream and nut crunch',
      'Beef tartare with charcoal-toasted bread',
      'Portuguese wine corks in the RAIZ cellar',
      'Plate of grilled cabbage with creamy sauce and coriander',
    ],
  },

  reviews: {
    eyebrow: 'What guests say',
    title: '{rating} stars, {count} reviews',
    seeGoogle: 'See on Google',
    ariaStars: '5 out of 5 stars',
    items: [
      {
        meta: 'Google · Local Guide · 12 reviews',
        text: 'Lovely spot with friendly staff. We were genuinely surprised by how tasty everything was. The food was incredibly fresh and delicious.',
      },
      {
        meta: 'Google',
        text: 'An amazing place to try real Portuguese cuisine with a modern twist.',
      },
      {
        meta: 'Google · Local Guide · 68 reviews',
        text: 'Best restaurant in Portugal. Fresh ingredients, a great modern twist on Portuguese food, great atmosphere, great service and more.',
      },
    ],
  },

  hours: {
    eyebrow: 'Hours',
    title: 'When our doors are open',
    intro:
      'We serve lunch and dinner Monday to Saturday. On Sundays we rest, to come back better.',
    openNow: 'Open now',
    closedToday: 'Closed today',
    closedNow: 'Closed right now',
    weekHeader: 'Week',
    closed: 'Closed',
    today: '(today)',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },

  reservations: {
    eyebrow: 'Reservations',
    title: 'Save your table at RAIZ',
    introWa:
      'Book in seconds through Google, or talk to us directly by WhatsApp or phone. For large groups and events, get in touch and we will take care of everything.',
    introNoWa:
      'Book in seconds through Google, or talk to us directly by phone. For large groups and events, get in touch and we will take care of everything.',
    reservarGoogle: 'Book through Google',
    whatsapp: 'WhatsApp',
  },

  contact: {
    eyebrow: 'Contact & address',
    title: 'Find us in Barreiro',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    hoursLabel: 'Hours',
    hoursLines: [
      'Mon–Thu 12:30–14:30 · 19:30–22:30',
      'Fri–Sat 12:30–15:00 · 19:30–23:00',
      'Closed on Sunday',
    ],
    instagramLabel: 'Instagram',
    mapTitle: 'Map — RAIZ Restaurante, Barreiro',
  },

  footer: {
    rights: 'All rights reserved.',
    madeBy: 'Site by',
    reservas: 'Reservations',
  },

  wa: { prefill: 'Hi! I would like to book a table at RAIZ.' },
}

/* ---------------------------------------------------------------- Español --- */

const es: Dict = {
  htmlLang: 'es',
  langName: 'Español',
  ratingValue: '4,8',

  meta: {
    title: 'RAIZ Restaurante — Cocina portuguesa moderna en Barreiro',
    description:
      'RAIZ Restaurante — cocina portuguesa contemporánea en Barreiro. Producto fresco, tradición con un toque moderno. Reserva tu mesa.',
  },

  a11y: { skip: 'Saltar al contenido' },

  nav: {
    sobre: 'La casa',
    menu: 'Carta',
    galeria: 'Galería',
    horario: 'Horario',
    contactos: 'Contacto',
  },

  header: {
    reservar: 'Reservar',
    reservarMesa: 'Reservar mesa',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuSr: 'Menú',
    homeAria: 'RAIZ Restaurante — inicio',
    navMain: 'Navegación principal',
    navMobile: 'Navegación (móvil)',
    langGroup: 'Idioma',
  },

  hero: {
    eyebrow: 'Barreiro · Cocina portuguesa contemporánea',
    subtitle:
      'Los sabores de Portugal con gesto contemporáneo. Producto fresco y mesa honesta, en el corazón de Barreiro.',
    verMenu: 'Ver la carta',
    ratingSuffix: 'reseñas en Google',
    descobrir: 'Descubrir',
    imgAlt: 'Plato de navajas a la brasa servido en RAIZ, iluminado sobre una mesa oscura',
  },

  about: {
    eyebrow: 'La casa',
    title: 'Volvimos a nuestras raíces para abrir mesa en Barreiro',
    p1: 'RAIZ nace de cuatro amigos que decidieron volver al lugar donde todo empezó. Trajimos años de cocina en varias casas y una idea sencilla: servir comida portuguesa de verdad, sin solemnidad.',
    p2: 'En la cocina respetamos el producto de temporada y a los proveedores de la región, y dejamos que la técnica trabaje para el sabor, no para el espectáculo. El resultado es una carta corta que cambia con las estaciones, donde lo clásico y lo contemporáneo se sientan a la misma mesa.',
    p3: 'Cuatro amigos, una vuelta a los orígenes y una cocina que une la tradición portuguesa con el producto y la técnica de hoy.',
    foundedLabel: 'Fundado por',
    foundedValue: '4 amigos',
    kitchenLabel: 'Cocina',
    kitchenValue: 'De raíz',
    whereLabel: 'Dónde',
    whereValue: 'Barreiro',
    quote: '«Raiz» es de donde crece todo.',
    imgAlt:
      'Magret de pato en lonchas con ensalada de naranja, servido con luz de día en una mesa de madera de RAIZ',
  },

  menu: {
    eyebrow: 'A la mesa',
    title: 'Algunos favoritos de la casa',
    intro:
      'Una muestra de lo que servimos con más orgullo. La carta completa cambia con la temporada y está siempre disponible en el restaurante. Comida media de unos {price} por persona.',
    takeaway: 'También puedes recoger (para llevar) o pedir entrega a domicilio.',
    items: [
      {
        description:
          'Navajas salteadas en aceite de oliva, ajo y guindilla, ligadas en un pil-pil bien montado. Empezar como es debido.',
        alt: 'Navajas a la brasa alineadas en un plato azul willow, aliñadas con aceite de hierbas',
      },
      {
        description:
          'Tacos de atún marcados en su punto, salsa de mantequilla y encurtidos, con patatas fritas aparte. Un bocado para compartir.',
        alt: 'Tacos de atún marcado en un plato de cristal con salsa, junto a un cuenco de patatas fritas',
      },
      {
        description:
          'Tártaro de ternera cortado a cuchillo bajo un manto de queso curado de Maçussa, yema y pan tostado a la brasa.',
        alt: 'Tártaro de ternera cubierto de queso curado rallado y cebollino, con tostadas al lado',
      },
      {
        description:
          'Cogollo de col a la brasa, rehogado con ajo y algas, pan de maíz tostado y un hilo de guindilla.',
        alt: 'Col a la brasa con rehogado de col, cilantro y pan de maíz tostado en un plato azul willow',
      },
      {
        description:
          'Arroz al horno en cazuela de barro, remolacha, cebolla roja encurtida y hierbas frescas. Confort, con firma.',
        alt: 'Cazuela de barro con arroz al horno, remolacha asada y cebolla roja encurtida',
      },
      {
        description:
          'Magret de pato lacado y cortado en su punto rosado, con ensalada de naranja y berros.',
        alt: 'Lonchas de magret de pato lacado con ensalada de naranja y berros en vajilla azul',
      },
      {
        description:
          'Nectarina a la brasa y caramelizada, crujiente de frutos secos y una quenelle de nata fresca montada al momento.',
        alt: 'Gajos de nectarina a la brasa con crujiente de frutos secos sobre nata fresca montada',
      },
      {
        description:
          'La torta de siempre, esponjosa y jugosa, con ralladura de cítricos y flor de sal. Receta del Tóni, claro.',
        alt: 'Porción de torta enrollada dorada con ralladura de cítricos y flor de sal en un plato vintage',
      },
    ],
  },

  gallery: {
    eyebrow: 'Galería',
    title: 'Un trocito de la sala y la cocina',
    introBefore: 'Platos, producto y ambiente. Para ver el día a día de RAIZ, síguenos en ',
    introAfter: '.',
    alt: [
      'Carpaccio con alcaparras, nueces y aceite de hierbas',
      'Magret de pato lacado con cebolla roja y brotes',
      'Melocotón a la brasa con nata y crujiente de frutos secos',
      'Tártaro de ternera con pan tostado a la brasa',
      'Corchos de vino portugués en la bodega de RAIZ',
      'Plato de col a la brasa con salsa cremosa y cilantro',
    ],
  },

  reviews: {
    eyebrow: 'Lo que dicen',
    title: '{rating} estrellas, {count} reseñas',
    seeGoogle: 'Ver en Google',
    ariaStars: '5 de 5 estrellas',
    items: [
      {
        meta: 'Google · Guía local · 12 reseñas',
        text: 'Un sitio agradable y con personal atento. Nos sorprendió de verdad lo sabroso que estaba todo. La comida estaba increíblemente fresca y deliciosa.',
      },
      {
        meta: 'Google',
        text: 'Un lugar estupendo para probar la auténtica cocina portuguesa con un toque moderno.',
      },
      {
        meta: 'Google · Guía local · 68 reseñas',
        text: 'El mejor restaurante de Portugal. Ingredientes frescos, una gran vuelta moderna a la comida portuguesa, muy buen ambiente, muy buen servicio y más.',
      },
    ],
  },

  hours: {
    eyebrow: 'Horario',
    title: 'Cuándo tenemos las puertas abiertas',
    intro:
      'Servimos almuerzo y cena de lunes a sábado. Los domingos descansamos, para volver mejores.',
    openNow: 'Abierto ahora',
    closedToday: 'Cerrado hoy',
    closedNow: 'Cerrado en este momento',
    weekHeader: 'Semana',
    closed: 'Cerrado',
    today: '(hoy)',
    days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  },

  reservations: {
    eyebrow: 'Reservas',
    title: 'Guarda tu mesa en RAIZ',
    introWa:
      'Reserva en segundos por Google, o habla con nosotros directamente por WhatsApp o teléfono. Para grupos grandes y eventos, escríbenos y nos encargamos de todo.',
    introNoWa:
      'Reserva en segundos por Google, o habla con nosotros directamente por teléfono. Para grupos grandes y eventos, escríbenos y nos encargamos de todo.',
    reservarGoogle: 'Reservar por Google',
    whatsapp: 'WhatsApp',
  },

  contact: {
    eyebrow: 'Contacto y dirección',
    title: 'Encuéntranos en Barreiro',
    addressLabel: 'Dirección',
    phoneLabel: 'Teléfono',
    hoursLabel: 'Horario',
    hoursLines: [
      'Lun–Jue 12:30–14:30 · 19:30–22:30',
      'Vie–Sáb 12:30–15:00 · 19:30–23:00',
      'Domingo cerrado',
    ],
    instagramLabel: 'Instagram',
    mapTitle: 'Mapa — RAIZ Restaurante, Barreiro',
  },

  footer: {
    rights: 'Todos los derechos reservados.',
    madeBy: 'Web por',
    reservas: 'Reservas',
  },

  wa: { prefill: '¡Hola! Me gustaría reservar una mesa en RAIZ.' },
}

const dict: Record<Lang, Dict> = { pt, en, es }

/* --------------------------------------------------------------- runtime --- */

const STORAGE_KEY = 'raiz.lang'

function isLang(v: unknown): v is Lang {
  return v === 'pt' || v === 'en' || v === 'es'
}

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'pt'
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (isLang(q)) return q
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    /* private mode / disabled storage */
  }
  const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase()
  return isLang(nav) ? nav : 'pt'
}

type I18nValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang)

  useEffect(() => {
    const t = dict[lang]
    document.documentElement.lang = t.htmlLang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
      const url = new URL(window.location.href)
      if (lang === 'pt') url.searchParams.delete('lang')
      else url.searchParams.set('lang', lang)
      window.history.replaceState({}, '', url)
    } catch {
      /* ignore */
    }
  }, [lang])

  const value = useMemo<I18nValue>(() => ({ lang, setLang, t: dict[lang] }), [lang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>')
  return ctx
}

/** Menu dishes with the active language's description + alt text. */
export function useMenu() {
  const { t } = useI18n()
  return menuBase.map((base, i) => ({
    ...base,
    description: t.menu.items[i].description,
    alt: t.menu.items[i].alt,
  }))
}

/** Reviews with the active language's meta + text. */
export function useReviews() {
  const { t } = useI18n()
  return reviewAuthors.map((name, i) => ({
    name,
    meta: t.reviews.items[i].meta,
    text: t.reviews.items[i].text,
  }))
}

/** Gallery photos with the active language's alt text. */
export function useGallery() {
  const { t } = useI18n()
  return galleryBase.map((base, i) => ({ ...base, alt: t.gallery.alt[i] }))
}

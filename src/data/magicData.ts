export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  points: string[];
  image: string;
  category: 'empresas' | 'bodas' | 'coctelerias';
}

export interface ShowDetails {
  title: string;
  subtitle: string;
  theatre: string;
  location: string;
  city: string;
  capacity: string;
  recommendedAge: string;
  schedule: { day: string; time: string }[];
  description: string[];
  metrics: { value: string; label: string }[];
  bookingUrl: string;
}

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  youtubeId: string;
  category: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  source: string;
  rating: number;
}

export const SHOW_DETAILS: ShowDetails = {
  title: "EL REY DE TRÉBOL",
  subtitle: "Un espectáculo de magia de cerca único en Madrid",
  theatre: "Sala Houdini",
  location: "Calle García Luna 13, 28002 Madrid",
  city: "Madrid",
  capacity: "Aforo exclusivo de 25 personas",
  recommendedAge: "A partir de 10 años",
  schedule: [
    { day: "Viernes", time: "19:45h" },
    { day: "Sábados", time: "17:30h y 20:15h" },
    { day: "Domingos", time: "17:30h" },
  ],
  description: [
    "Disfruta de mi espectáculo en la mítica Sala Houdini de Madrid, el teatro de magia más importante y grande de toda Europa.",
    "Un show de magia de cerca (limitado a solo 25 espectadores) en el que prácticamente todos participan de forma activa. Humor elegante, emoción y asombro a escasos centímetros de tus ojos.",
    "Olvídate del mago cliché. Aquí no hay cuerdas ni pañuelos: relojes, anillos, billetes prestados, cartas, teléfonos móviles y mentalismo moderno crearán una experiencia irrepetible."
  ],
  metrics: [
    { value: "+9 Años", label: "En el Top Ventas nacional" },
    { value: "+16.000", label: "Espectadores asombrados" },
    { value: "+1.030", label: "Reseñas 5 estrellas" },
    { value: "4.9 / 5", label: "Puntuación Atrápalo" }
  ],
  bookingUrl: "https://www.atrapalo.com/entradas/el-rey-de-trebol-en-la-sala-houdini_e4835267/"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "empresas",
    title: "Magia para Empresas & Galas",
    tagline: "Convierte tu evento corporativo en una experiencia inolvidable",
    badge: "Corporativo & Galas",
    description: "Ilusionismo ad-hoc y personalizado a la marca para empresas y marcas de prestigio nacional e internacional. Sorprende a tus equipos y clientes con entretenimiento fresco, moderno y de alto impacto.",
    points: [
      "Maestro de ceremonias y presentador dinámico en entregas de premios y congresos",
      "Magia infiltrada entre asistentes: dinamización como un invitado más sin alterar el protocolo",
      "Personalización total: trucos diseñados alrededor de tu marca, producto o mensaje clave",
      "Ideal para cocktails, summits, cenas navideñas, lanzamientos y team building"
    ],
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=960,fit=crop/mxBXBX7KznSE6Zr6/sis-99-AzGNGLeKNXuxBb7L.jpg",
    category: "empresas"
  },
  {
    id: "bodas",
    title: "Magia en Bodas & Particulares",
    tagline: "El toque distintivo y emocionante para vuestro día más especial",
    badge: "Bodas Exclusivas",
    description: "Un espectáculo profesional diseñado para crear recuerdos imborrables entre familiares y amigos. Me integro en el ritmo de vuestro enlace para dinamizar cada momento sin robar protagonismo a los novios.",
    points: [
      "Durante el Cóctel: mini-shows itinerantes por corrillos, rompiendo el hielo y uniendo grupos",
      "Durante el Banquete: dinamización de esperas entre plato y plato con risas y asombro",
      "Personalización para la pareja: apariciones de regalos o barajas personalizadas con su fecha",
      "Magia adulta, elegante y participativa: smartphones, mentalismo y pickpocket cómico"
    ],
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1281,fit=crop/mxBXBX7KznSE6Zr6/786_nikoestudio_boda-en-villamaria_rebeca-cesar-Awv9vaPVDjFzoR6j.jpg",
    category: "bodas"
  },
  {
    id: "coctelerias",
    title: "Coctelerías & Restauración",
    tagline: "Fidelización de clientes y magia de cerca a pie de mesa",
    badge: "Restauración & Ocio",
    description: "Ameniza las esperas entre copa y copa o plato y plato. Años de experiencia en los locales más exclusivos de Madrid y España creando atmósferas mágicas que hacen que los clientes quieran volver.",
    points: [
      "Magia de cerca directamente en mesas o barra con objetos cotidianos y monedas",
      "Técnicas de afiliación y fidelización: una experiencia diferencial para tu local",
      "Entretenimiento no invasivo y perfectamente adaptado a la música y ritmo del local",
      "Ideal para eventos temáticos, aperturas y noches exclusivas de cócteles"
    ],
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=960,fit=crop/mxBXBX7KznSE6Zr6/club-YZ9jn58DJaCe8GwX.jpg",
    category: "coctelerias"
  }
];

export const CLIENT_LOGOS = [
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Rolex", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=214,fit=crop/mxBXBX7KznSE6Zr6/logo_da_rolex-38N3Rc4aWjEMpBDI.png" },
  { name: "Louis Vuitton", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop/mxBXBX7KznSE6Zr6/louis-vuitton-logo-eNJQGzp1WXBsGlLD.png" },
  { name: "Samsung", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=149,fit=crop/mxBXBX7KznSE6Zr6/samsung-AMq8wg3rXeCGDNB2.jpg" },
  { name: "Real Madrid", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=506,fit=crop/mxBXBX7KznSE6Zr6/real-madrid-logo-2021-t8RShwZCWJ0Gva3k.png" },
  { name: "KPMG", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=149,fit=crop/mxBXBX7KznSE6Zr6/kpmg_logo.svg-mePJXKpWw0TGX0rl.png" },
  { name: "AXA", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=384,fit=crop/mxBXBX7KznSE6Zr6/axa_logo.svg-mp8JoK5v1rtwLaBp.png" },
  { name: "Harley Davidson", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=297,fit=crop/mxBXBX7KznSE6Zr6/harley-davidson-logo-png_seeklogo-216797-d954Pn8KL3s7Ej0j.png" },
  { name: "Paradores", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=242,fit=crop/mxBXBX7KznSE6Zr6/paradores-dOqDEg197KH3RwN5.jpg" },
  { name: "MediaMarkt", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=153,fit=crop/mxBXBX7KznSE6Zr6/media-markt-logo-2-mxBX5KN3ZBh0jQXp.png" },
  { name: "Editorial Planeta", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=104,fit=crop/mxBXBX7KznSE6Zr6/logo_editorial_planeta-YleQNBXrLDFqJ0VM.jpg" },
  { name: "Cinesa", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=256,fit=crop/mxBXBX7KznSE6Zr6/logo_cinesa_2-AGBbqzZMEXfwkn1e.png" },
  { name: "Bimbo", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=143,fit=crop/mxBXBX7KznSE6Zr6/bimbo-logo-png_seeklogo-264453-m2WEPXVpLgcnn0vx.png" },
  { name: "Seedtag", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=149,fit=crop/mxBXBX7KznSE6Zr6/seedtag_logo-ALpPLgkXg2Hag0VK.jpg" }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "netflix",
    title: "Magia de Cóctel en Netflix España",
    subtitle: "Dinamización interactiva exclusiva para equipos de Netflix",
    youtubeId: "GUunSaoCWLc",
    category: "Corporativo"
  },
  {
    id: "boda-300",
    title: "Magia con 300 personas a la vez",
    subtitle: "Efecto multitudinario en boda de gran escala",
    youtubeId: "7pS04V0RgJA",
    category: "Bodas"
  },
  {
    id: "houdini-trailer",
    title: "Espectáculo 'El Rey de Trébol'",
    subtitle: "Magia de cerca en la Sala Houdini de Madrid",
    youtubeId: "crytUuAcxY0",
    category: "Teatro"
  },
  {
    id: "netflix-grupal",
    title: "Magia grupal corporativa",
    subtitle: "Sesión de alto impacto y mentalismo",
    youtubeId: "KUcjwVhphKc",
    category: "Corporativo"
  },
  {
    id: "coctel-reacciones",
    title: "Magia en coctelerías y locales nocturnos",
    subtitle: "Reacciones genuinas a centímetros de distancia",
    youtubeId: "52Qpq82m2ZY",
    category: "Coctelería"
  },
  {
    id: "pickpocket-mentalismo",
    title: "Robos imposibles y mentalismo moderno",
    subtitle: "Asombro garantizado con teléfonos y pertenencias",
    youtubeId: "vaDjg2UHZSY",
    category: "Mentalismo"
  }
];

export const GALLERY_PHOTOS = [
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=960,fit=crop/mxBXBX7KznSE6Zr6/sis-99-AzGNGLeKNXuxBb7L.jpg",
    title: "Magia de autor en eventos de gala",
    caption: "Presentación y magia corporativa para marcas líderes"
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=962,fit=crop/mxBXBX7KznSE6Zr6/reaccion-mk3JLjvNkockLPlZ.jpg",
    title: "Reacciones genuinas",
    caption: "El asombro auténtico que solo la magia de cerca produce"
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1281,fit=crop/mxBXBX7KznSE6Zr6/786_nikoestudio_boda-en-villamaria_rebeca-cesar-Awv9vaPVDjFzoR6j.jpg",
    title: "Bodas mágicas",
    caption: "Conectando invitados durante el cóctel nupcial"
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2800,h=1868,fit=crop/mxBXBX7KznSE6Zr6/uli-1051-0255-AzGN0PE9VVcJrwO5.jpg",
    title: "El Rey de Trébol",
    caption: "Show íntimo para 25 espectadores en Sala Houdini"
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=960,fit=crop/mxBXBX7KznSE6Zr6/club-YZ9jn58DJaCe8GwX.jpg",
    title: "Magia en locales exclusivos",
    caption: "Atmósfera nocturna con copas y cócteles de autor"
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2800,h=1866,fit=crop/mxBXBX7KznSE6Zr6/editada-04039-YbNJNLqoLGsgW08M.jpg",
    title: "Dominio de la escena",
    caption: "Carisma, humor y técnica depurada en cada juego"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: "¡Se me queda una cara de gili**llas con esto, eres increíble!",
    author: "Jorge Fernández",
    role: "Presentador de 'La Ruleta de la Suerte'",
    source: "Televisión & Evento privado",
    rating: 5
  },
  {
    quote: "Increíble cómo captó a los más de 200 asistentes en nuestra gala anual de empresa. Elegante, divertidísimo y con un nivel de magia que nos dejó con la boca abierta toda la noche.",
    author: "Dirección de Eventos Corporativos",
    role: "Multinacional tecnológica",
    source: "Gala Corporativa en Madrid",
    rating: 5
  },
  {
    quote: "Contratamos a Pablo para el cóctel de nuestra boda y fue sin duda la mejor decisión que tomamos. Todos nuestros amigos nos siguen recordando los trucos que les hizo a 10 centímetros.",
    author: "Rebeca & César",
    role: "Novios",
    source: "Boda en Villa María",
    rating: 5
  },
  {
    quote: "Fuimos a ver 'El Rey de Trébol' en la Sala Houdini. Estar a un metro del mago y no entender absolutamente nada de lo que pasa delante de tus ojos es fascinante. Lloramos de la risa.",
    author: "Carlos M.",
    role: "Espectador Sala Houdini",
    source: "Reseña en Atrápalo (5/5)",
    rating: 5
  },
  {
    quote: "Magia sin clichés. Nada de chisteras ni pañuelos de colores. Ilusionismo puro con billetes, móviles y relojes. Dinámico, fresco y con una empatía arrolladora.",
    author: "Lucía S.",
    role: "Espectadora habitual",
    source: "Google Reviews",
    rating: 5
  }
];

export const CONTACT_INFO = {
  name: "Pablo Costas",
  alias: "magicoster",
  email: "pablo.f.costas@gmail.com",
  phone: "+34 606 286 826",
  phoneRaw: "+34606286826",
  whatsappUrl: "https://wa.me/34606286826?text=%C2%A1Hola%20Pablo!%20Me%20encantar%C3%ADa%20contar%20con%20tu%20magia%20para%20un%20evento.%20%C2%BFCu%C3%A1ndo%20podr%C3%ADamos%20hablar?",
  instagram: "https://www.instagram.com/magicoster",
  tiktok: "https://www.tiktok.com/@magicoster?lang=es",
  facebook: "https://www.facebook.com/pablo.costas.505",
  location: "Madrid, España (disponible para desplazamientos nacionales e internacionales)",
  languages: "Español e Inglés (Bilingüe)"
};

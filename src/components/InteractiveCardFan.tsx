import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES_DATA, SHOW_DETAILS } from '../data/magicData';

interface MagicCard {
  id: string;
  rank: string;
  suit: string;
  suitColor: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  points: string[];
  actionText: string;
  actionUrl: string;
  rotation: number;
  offsetY: number;
}

const DECK_CARDS: MagicCard[] = [
  {
    id: 'houdini',
    rank: 'K',
    suit: '♣',
    suitColor: '#cba86e',
    category: 'Teatro Houdini',
    title: 'El Rey de Trébol',
    tagline: 'Espectáculo de magia de cerca en Sala Houdini',
    description: 'El show más exclusivo de Madrid, limitado a solo 25 personas por pase. Humor elegante, mentalismo y asombro a un metro de tus ojos en el teatro de magia más grande de Europa.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=960,fit=crop/mxBXBX7KznSE6Zr6/uli-1051-0255-AzGN0PE9VVcJrwO5.jpg',
    points: [
      'Top Ventas Nacional durante más de 9 años consecutivos',
      'Más de 1.030 opiniones en Atrápalo con nota 4.9 / 5',
      'Pases semanales: Viernes 19:45h, Sábados 17:30h/20:15h, Domingos 17:30h',
      'Aforo reducido de 25 localidades'
    ],
    actionText: 'Comprar Entradas en Atrápalo',
    actionUrl: SHOW_DETAILS.bookingUrl,
    rotation: -14,
    offsetY: 16
  },
  {
    id: 'empresas',
    rank: 'A',
    suit: '♠',
    suitColor: '#f4f4f5',
    category: 'Corporativo & Marcas',
    title: SERVICES_DATA[0].title,
    tagline: SERVICES_DATA[0].tagline,
    description: SERVICES_DATA[0].description,
    image: SERVICES_DATA[0].image,
    points: SERVICES_DATA[0].points,
    actionText: 'Presupuesto para Empresa',
    actionUrl: '#contacto',
    rotation: -7,
    offsetY: 4
  },
  {
    id: 'bodas',
    rank: 'Q',
    suit: '♥',
    suitColor: '#e11d48',
    category: 'Bodas de Autor',
    title: SERVICES_DATA[1].title,
    tagline: SERVICES_DATA[1].tagline,
    description: SERVICES_DATA[1].description,
    image: SERVICES_DATA[1].image,
    points: SERVICES_DATA[1].points,
    actionText: 'Consultar Fecha de Boda',
    actionUrl: '#contacto',
    rotation: 0,
    offsetY: 0
  },
  {
    id: 'coctelerias',
    rank: 'J',
    suit: '♦',
    suitColor: '#e11d48',
    category: 'Ocio & Restauración',
    title: SERVICES_DATA[2].title,
    tagline: SERVICES_DATA[2].tagline,
    description: SERVICES_DATA[2].description,
    image: SERVICES_DATA[2].image,
    points: SERVICES_DATA[2].points,
    actionText: 'Magia en mi Local',
    actionUrl: '#contacto',
    rotation: 7,
    offsetY: 4
  },
  {
    id: 'mentalismo',
    rank: '★',
    suit: '✦',
    suitColor: '#cba86e',
    category: 'Especialidades',
    title: 'Mentalismo, Smartphones & Pickpocket',
    tagline: 'Ilusionismo moderno sin clichés',
    description: 'Olvídate del mago cliché de pañuelos y chistera. Magia contemporánea que involucra la psicología de los invitados, robos cómicos de relojes devueltos al instante y predicciones con sus propios móviles.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=962,fit=crop/mxBXBX7KznSE6Zr6/reaccion-mk3JLjvNkockLPlZ.jpg',
    points: [
      'Lecturas mentales y sugestión psicológica',
      'Pickpocket cómico (relojes, carteras y corbatas)',
      'Magia tecnológica con los teléfonos de los asistentes',
      'Espectáculos bilingües en Español e Inglés'
    ],
    actionText: 'Solicitar Propuesta a Medida',
    actionUrl: '#contacto',
    rotation: 14,
    offsetY: 16
  }
];

export const InteractiveCardFan = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>('houdini');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const selectedCard = DECK_CARDS.find((c) => c.id === selectedCardId) || DECK_CARDS[0];

  return (
    <section id="experiencias" className="py-24 border-b border-zinc-800/80 bg-[#060608] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono uppercase tracking-widest text-antique-gold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-antique-gold" />
            <span>Elige tu experiencia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Despliega la baraja
          </h2>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Cada carta representa una de mis facetas artísticas. Pasa el cursor y selecciona una carta para conocer todos los detalles.
          </p>
        </div>

        {/* Tactile Fan of Cards */}
        <div className="flex justify-center items-end min-h-[220px] sm:min-h-[260px] pb-6 pt-4 select-none relative">
          <div className="flex items-end justify-center -space-x-8 sm:-space-x-12">
            {DECK_CARDS.map((card) => {
              const isSelected = selectedCardId === card.id;
              const isHovered = hoveredCardId === card.id;

              return (
                <motion.button
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id)}
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  whileHover={{ y: -28, scale: 1.06, zIndex: 30 }}
                  animate={{
                    rotate: isSelected ? 0 : card.rotation,
                    y: isSelected ? -24 : isHovered ? -28 : card.offsetY,
                    zIndex: isSelected ? 20 : isHovered ? 25 : 10,
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  className={`w-28 sm:w-36 h-44 sm:h-56 rounded-xl p-3 flex flex-col justify-between text-left cursor-pointer transition-colors relative card-shadow ${
                    isSelected
                      ? 'bg-[#181822] ring-2 ring-antique-gold shadow-[0_0_25px_rgba(203,168,110,0.3)]'
                      : 'bg-[#101015] hover:bg-[#14141c] border border-zinc-800'
                  }`}
                  aria-label={card.title}
                >
                  {/* Top-left card index */}
                  <div className="leading-none">
                    <div className="font-serif font-bold text-sm sm:text-base text-white">
                      {card.rank}
                    </div>
                    <div className="text-xs sm:text-sm font-serif" style={{ color: card.suitColor }}>
                      {card.suit}
                    </div>
                  </div>

                  {/* Card Center Symbol */}
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-serif mb-1" style={{ color: card.suitColor }}>
                      {card.suit}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-semibold line-clamp-2">
                      {card.category}
                    </div>
                  </div>

                  {/* Bottom-right card index inverted */}
                  <div className="leading-none self-end rotate-180">
                    <div className="font-serif font-bold text-sm sm:text-base text-white">
                      {card.rank}
                    </div>
                    <div className="text-xs sm:text-sm font-serif" style={{ color: card.suitColor }}>
                      {card.suit}
                    </div>
                  </div>

                  {/* Active pip indicator */}
                  {isSelected && (
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-antique-gold shadow-sm" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Selected Card Revelation Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCard.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/90 overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              {/* Left Column: Information */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center font-serif text-sm font-bold" style={{ color: selectedCard.suitColor }}>
                    {selectedCard.suit}
                  </span>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-antique-gold block">
                      {selectedCard.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {selectedCard.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-serif italic text-antique-light/90">
                  "{selectedCard.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedCard.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-zinc-800">
                  {selectedCard.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-200">
                      <Check className="w-3.5 h-3.5 text-antique-gold shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    href={selectedCard.actionUrl}
                    target={selectedCard.actionUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>{selectedCard.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Photography */}
              <div className="lg:col-span-5 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="w-full h-full object-cover filter contrast-[1.05]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

import { Ticket, MapPin, Users, Star, ArrowUpRight, Clock } from 'lucide-react';
import { SHOW_DETAILS } from '../data/magicData';

export const ShowHoudini = () => {
  return (
    <section id="espectaculo" className="py-20 border-b border-zinc-800/60 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow block mb-2">
              Espectáculo en Cartelera • Sala Houdini Madrid
            </span>
            <h2 className="heading-lg">
              "El Rey de Trébol"
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            En el teatro de magia más grande de Europa. Magia de cerca a un metro de tus ojos en un aforo íntimo de solo 25 espectadores.
          </p>
        </div>

        {/* Theatrical Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photo & atmosphere */}
          <div className="lg:col-span-5 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
            <div className="aspect-[4/3] w-full">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2800,h=1868,fit=crop/mxBXBX7KznSE6Zr6/uli-1051-0255-AzGN0PE9VVcJrwO5.jpg"
                alt="El Rey de Trébol en Sala Houdini"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 space-y-3 bg-zinc-950">
              <div className="flex items-center justify-between text-xs font-sans text-zinc-400">
                <span className="flex items-center gap-1.5 text-white">
                  <MapPin className="w-4 h-4 text-champagne" />
                  <span>{SHOW_DETAILS.location}</span>
                </span>
                <span>Madrid 28002</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-zinc-800 text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Users className="w-4 h-4 text-zinc-400" />
                  <span>{SHOW_DETAILS.capacity}</span>
                </span>
                <span>{SHOW_DETAILS.recommendedAge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Tickets */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
              <p>
                Disfruta de mi espectáculo en la mítica <strong>Sala Houdini de Madrid</strong>, el teatro de magia más prestigioso de Europa.
              </p>
              <p>
                <strong>"El Rey de Trébol"</strong> es un espectáculo de magia de cerca diseñado para que prácticamente todos los espectadores participen de forma directa. Humor elegante, psicología y momentos de auténtico impacto a escasos centímetros.
              </p>
              <p className="text-zinc-400 text-xs font-sans">
                ✦ Relojes, anillos, billetes prestados, teléfonos móviles y cartas sin clichés.
              </p>
            </div>

            {/* Performance Schedules */}
            <div className="p-5 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-xs font-sans uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-champagne" />
                <span>Horarios habituales (Reserva previa recomendada)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {SHOW_DETAILS.schedule.map((slot, i) => (
                  <div key={i} className="p-3 rounded bg-zinc-950 border border-zinc-800/80">
                    <div className="text-xs font-semibold text-white">{slot.day}</div>
                    <div className="text-xs font-sans text-champagne mt-0.5">{slot.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Booking CTA */}
            <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-1.5 text-champagne font-serif text-lg font-bold">
                  <Star className="w-4 h-4 fill-champagne" />
                  <span>4.9 / 5 en Atrápalo</span>
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Más de 1.030 valoraciones reales y 16.000 espectadores.
                </div>
              </div>

              <a
                href={SHOW_DETAILS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                <Ticket className="w-4 h-4" />
                <span>Comprar Entradas en Atrápalo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

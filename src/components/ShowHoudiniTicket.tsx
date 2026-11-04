import { Ticket, MapPin, Users, Star, ArrowUpRight, Clock, Award } from 'lucide-react';
import { SHOW_DETAILS } from '../data/magicData';

export const ShowHoudiniTicket = () => {
  return (
    <section id="espectaculo" className="py-24 border-b border-zinc-800/80 bg-[#08080c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-3">
            <Award className="w-3.5 h-3.5 text-antique-gold" />
            <span>Teatro Permanente en Madrid</span>
          </div>
          <h2 className="heading-lg">
            "El Rey de Trébol"
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            El espectáculo más visto y mejor valorado en la mítica Sala Houdini de Madrid, el teatro de magia más grande de Europa.
          </p>
        </div>

        {/* Vintage Theatrical Perforated Ticket Component */}
        <div className="max-w-4xl mx-auto relative ticket-shadow rounded-2xl overflow-hidden bg-[#0d0d12] border border-antique-gold/30">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Ticket Left Stub (Torn edge on md screens) */}
            <div className="md:col-span-4 bg-[#12121a] p-6 sm:p-8 border-b md:border-b-0 md:border-r border-dashed border-zinc-700/80 flex flex-col justify-between relative">
              {/* Top / bottom circular cutouts for ticket perforation */}
              <div className="hidden md:block absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#08080c] border border-antique-gold/30" />
              <div className="hidden md:block absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-[#08080c] border border-antique-gold/30" />

              <div className="space-y-4">
                <div className="eyebrow flex items-center justify-between">
                  <span>Pase Exclusivo</span>
                  <span>№ 01030</span>
                </div>

                <div>
                  <div className="text-xs font-sans uppercase text-zinc-400 tracking-wider">Teatro</div>
                  <div className="text-xl font-serif font-bold text-white tracking-wider">
                    SALA HOUDINI
                  </div>
                  <div className="text-xs text-zinc-400 font-sans flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-antique-gold shrink-0" />
                    <span>{SHOW_DETAILS.location}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-sans text-zinc-400 uppercase">Aforo Íntimo</div>
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                    <Users className="w-4 h-4 text-antique-gold" />
                    <span>{SHOW_DETAILS.capacity}</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">
                    Edad mínima: {SHOW_DETAILS.recommendedAge}
                  </div>
                </div>
              </div>

              {/* Barcode visual stub */}
              <div className="pt-6 mt-6 border-t border-zinc-800 text-center">
                <div className="h-9 w-full flex items-center justify-center gap-[3px] opacity-60">
                  {[4, 2, 6, 1, 3, 5, 2, 4, 1, 6, 3, 2, 5, 4, 2, 3, 6, 1, 4, 3, 5, 2, 6].map((w, i) => (
                    <div
                      key={i}
                      className="bg-zinc-300 h-full"
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-sans text-zinc-400 tracking-widest mt-1 block">
                  PC-HOUDINI-MAD-2025
                </span>
              </div>
            </div>

            {/* Ticket Main Body */}
            <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="eyebrow px-3 py-1 rounded bg-antique-gold/15 border border-antique-gold/30 text-antique-light">
                    Top Ventas Nacional (+9 años)
                  </span>

                  <div className="flex items-center gap-1 text-antique-gold font-sans text-xs font-semibold">
                    <Star className="w-4 h-4 fill-antique-gold" />
                    <span>4.9 / 5 (+1.030 opiniones en Atrápalo)</span>
                  </div>
                </div>

                <h3 className="heading-md">
                  Una sesión donde tú eres el protagonista
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {SHOW_DETAILS.description[1]}
                </p>
                <p className="text-xs text-zinc-400">
                  {SHOW_DETAILS.description[2]}
                </p>
              </div>

              {/* Weekly Schedules */}
              <div className="p-4 rounded-lg bg-zinc-950/70 border border-zinc-800 space-y-2">
                <div className="text-[11px] font-sans uppercase text-zinc-400 tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-antique-gold" />
                  <span>Pases Semanales Habituales</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {SHOW_DETAILS.schedule.map((s, idx) => (
                    <div key={idx} className="p-2 rounded bg-zinc-900 border border-zinc-800 flex flex-col">
                      <span className="text-white font-medium">{s.day}</span>
                      <span className="text-antique-gold font-sans font-semibold text-[11px]">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-zinc-800">
                <div className="text-xs text-zinc-400">
                  Reserva con antelación: al ser solo 25 butacas se agota rápido.
                </div>

                <a
                  href={SHOW_DETAILS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-lg cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Comprar Entradas en Atrápalo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

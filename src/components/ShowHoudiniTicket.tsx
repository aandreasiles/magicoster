import { Ticket, MapPin, Users, Star, ArrowUpRight, Clock, Baby } from 'lucide-react';
import { SHOW_DETAILS, SHOW_IMAGES, TICKET_LINKS } from '../data/magicData';

export const ShowHoudiniTicket = () => {
  return (
    <section id="espectaculo" className="py-14 sm:py-20 border-b border-zinc-800/80 bg-[#08080c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Poster */}
          <div className="lg:col-span-4 max-w-xs sm:max-w-sm mx-auto lg:max-w-none w-full lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden border border-antique-gold/30 ticket-shadow">
              <img
                src={SHOW_IMAGES.poster}
                alt="Cartel de El Rey de Trébol, la magia de Pablo Costas"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-antique-gold font-semibold">
              <Star className="w-4 h-4 fill-antique-gold shrink-0" />
              <span>4.9 / 5 · +1.030 opiniones</span>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="eyebrow">Teatro permanente en Madrid</span>
              <h2 className="heading-lg mt-3">"El Rey de Trébol"</h2>
              <p className="body-text mt-4">{SHOW_DETAILS.description[1]}</p>
              <p className="body-text mt-3 text-zinc-400">{SHOW_DETAILS.description[2]}</p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <MapPin className="w-5 h-5 text-antique-gold shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="eyebrow !text-zinc-500">Sala Houdini</div>
                  <div className="text-sm text-white mt-1 break-words">{SHOW_DETAILS.location}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <Users className="w-5 h-5 text-antique-gold shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="eyebrow !text-zinc-500">Aforo íntimo</div>
                  <div className="text-sm text-white mt-1">{SHOW_DETAILS.capacity}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <Baby className="w-5 h-5 text-antique-gold shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="eyebrow !text-zinc-500">Edad</div>
                  <div className="text-sm text-white mt-1">{SHOW_DETAILS.recommendedAge}</div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-5">
              <div className="eyebrow flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4" />
                <span>Horarios semanales</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SHOW_DETAILS.schedule.map((s) => (
                  <div key={s.day} className="flex sm:flex-col items-baseline sm:items-start justify-between gap-1 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                    <span className="text-sm text-white font-medium">{s.day}</span>
                    <span className="text-sm text-antique-gold font-semibold">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tickets */}
            <div>
              <div className="eyebrow flex items-center gap-2 mb-2">
                <Ticket className="w-4 h-4" />
                <span>Elige tu plataforma de confianza</span>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Solo hay 25 butacas por pase y se agotan rápido. Reserva con antelación.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TICKET_LINKS.map((t) => (
                  <a
                    key={t.name}
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between gap-3 p-4 rounded-xl border transition-colors ${
                      t.primary
                        ? 'bg-antique-gold border-antique-gold text-zinc-950 hover:bg-antique-light'
                        : 'bg-zinc-900/60 border-zinc-700 text-white hover:border-antique-gold'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="font-serif text-lg font-bold leading-tight">{t.name}</div>
                      <div className={`text-xs mt-0.5 ${t.primary ? 'text-zinc-800' : 'text-zinc-400'}`}>{t.note}</div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

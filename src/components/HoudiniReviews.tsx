import { Star, BadgeCheck } from 'lucide-react';
import { SHOW_REVIEWS } from '../data/magicData';

export const HoudiniReviews = () => (
  <section className="py-14 sm:py-20 border-b border-zinc-800/80">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="eyebrow">Opiniones reales</span>
        <h2 className="heading-lg mt-3">Lo que dicen los espectadores</h2>
        <p className="body-text mt-4">
          Experiencias de personas que han asistido al espectáculo. Opiniones verificadas de Atrápalo, con una media de 4.9 sobre 5.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SHOW_REVIEWS.map((r) => (
          <figure key={r.author + r.date} className="flex flex-col p-6 rounded-2xl border border-zinc-800 bg-[#0a0a0e]">
            <div className="flex gap-0.5 mb-3" aria-label="10 sobre 10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-antique-gold text-antique-gold" />
              ))}
            </div>
            <h3 className="heading-sm mb-2">{r.title}</h3>
            <blockquote className="text-sm text-zinc-300 leading-relaxed flex-1">{r.text}</blockquote>
            <figcaption className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white truncate">{r.author}</div>
                <div className="text-xs text-zinc-500">{r.date} · {r.profile}</div>
              </div>
              <span className="flex items-center gap-1 text-[11px] text-antique-gold shrink-0">
                <BadgeCheck className="w-4 h-4" /> Verificada
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

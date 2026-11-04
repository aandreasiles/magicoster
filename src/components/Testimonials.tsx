import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/magicData';

export const Testimonials = () => {
  return (
    <section className="py-24 border-b border-zinc-800/80 bg-[#08080c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow block mb-2">
            Crítica & Público
          </span>
          <h2 className="heading-lg">
            Opiniones de quienes lo han vivido
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Más de 1.030 reseñas verificadas en Atrápalo y Google con una puntuación media de 4.9 sobre 5.
          </p>
        </div>

        {/* Featured Celebrity Testimonial */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#14141c] to-[#0c0c12] border border-antique-gold/30 mb-10 relative overflow-hidden">
          <Quote className="w-12 h-12 text-antique-gold/20 absolute top-6 right-6 pointer-events-none" />

          <blockquote className="text-2xl sm:text-3xl font-serif text-white font-medium mb-6 leading-relaxed max-w-4xl">
            "{TESTIMONIALS_DATA[0].quote}"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-zinc-800 text-xs">
            <div>
              <span className="font-serif font-bold text-base text-antique-light block">
                {TESTIMONIALS_DATA[0].author}
              </span>
              <span className="text-zinc-400 font-sans text-[11px]">
                {TESTIMONIALS_DATA[0].role} • {TESTIMONIALS_DATA[0].source}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-antique-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-antique-gold" />
              ))}
              <span className="font-sans text-zinc-300 ml-1 font-semibold">5 / 5 estrellas</span>
            </div>
          </div>
        </div>

        {/* Client & Audience reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.slice(1).map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#0c0c10] border border-zinc-800/80 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-1 text-antique-gold mb-3">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-antique-gold" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-serif italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <div className="font-serif font-bold text-sm text-white">{item.author}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{item.role}</div>
                <div className="text-[10px] text-antique-gold font-sans mt-1">{item.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

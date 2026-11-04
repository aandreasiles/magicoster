import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/magicData';

export const Testimonials = () => {
  return (
    <section className="py-20 border-b border-zinc-800/60 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-champagne block mb-2">
            Opiniones y Críticas
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Testimonios de espectadores
          </h2>
          <p className="text-zinc-400 text-sm">
            Experiencias de presentadores de televisión, directivos de empresas y asistentes a Sala Houdini.
          </p>
        </div>

        {/* Featured Celebrity Testimonial */}
        <div className="p-8 sm:p-10 rounded-lg bg-zinc-900 border border-zinc-800 mb-8 relative">
          <Quote className="w-8 h-8 text-champagne mb-4 opacity-70" />
          <blockquote className="text-xl sm:text-2xl font-serif text-white font-medium mb-6 leading-relaxed">
            "{TESTIMONIALS_DATA[0].quote}"
          </blockquote>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-zinc-800 text-xs">
            <div>
              <span className="font-semibold text-white">{TESTIMONIALS_DATA[0].author}</span>
              <span className="text-zinc-400 ml-2">({TESTIMONIALS_DATA[0].role})</span>
            </div>
            <div className="flex items-center gap-1 text-champagne">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-champagne" />
              ))}
              <span className="ml-1 font-mono text-zinc-300">5 / 5</span>
            </div>
          </div>
        </div>

        {/* 4 Spectator Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.slice(1).map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-champagne mb-3">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-champagne" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed italic mb-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800 text-[11px]">
                <div className="font-medium text-white">{item.author}</div>
                <div className="text-zinc-500 font-mono text-[10px]">{item.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

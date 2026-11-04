import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../data/magicData';

export const ClientMarquee: React.FC = () => {
  // Double list to create continuous infinite marquee
  const marqueeList = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-14 border-y border-white/5 bg-[#0a0a10]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-[#d4af37] font-mono font-semibold"
        >
          ✦ Marcas que han confiado en mi magia y siguen confiando ✦
        </motion.p>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        {/* Gradients on left/right edges for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07070a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07070a] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
          {marqueeList.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 hover:bg-white/[0.06] transition-all group shrink-0"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 max-w-[110px] object-contain filter grayscale invert opacity-75 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to text if external logo fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : null}
              <span className="font-serif text-sm tracking-wider text-slate-300 group-hover:text-[#f3d37a] transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, MapPin, Users, Clock, Award, Star, ExternalLink } from 'lucide-react';
import { SHOW_DETAILS } from '../data/magicData';

export const ShowHoudini: React.FC = () => {
  return (
    <section id="espectaculo" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#0a0a12]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Award className="w-3.5 h-3.5 text-purple-400" />
            Teatro Houdini Madrid • Top Ventas Nacional +9 Años
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-4"
          >
            "EL REY DE TRÉBOL"
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            El espectáculo de magia de cerca más visto y mejor valorado en el teatro de magia más importante de Europa.
          </motion.p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Details & Theater Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {SHOW_DETAILS.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Fast Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Aforo Ultra Exclusivo</div>
                    <div className="text-xs text-slate-400">Máximo 25 personas por pase íntimo</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Sala Houdini</div>
                    <div className="text-xs text-slate-400">{SHOW_DETAILS.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Puntuación 4.9/5</div>
                    <div className="text-xs text-slate-400">+1.030 reseñas reales en Atrápalo</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Edad recomendada</div>
                    <div className="text-xs text-slate-400">{SHOW_DETAILS.recommendedAge}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SHOW_DETAILS.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#0f0f18] border border-[#d4af37]/20 text-center"
                >
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#f3d37a]">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Schedule & Ticket Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#151522] via-[#0f0f18] to-[#0a0a10] border border-[#d4af37]/40 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative">
              <div className="text-center pb-6 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-mono">
                  ✦ Pases Semanales ✦
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Horarios del Espectáculo
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reserva con antelación, las 25 plazas se agotan con rapidez
                </p>
              </div>

              {/* Schedule list */}
              <div className="py-6 space-y-3">
                {SHOW_DETAILS.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-[#d4af37]/30 transition-colors"
                  >
                    <span className="text-slate-200 font-medium text-sm font-serif">
                      {item.day}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#f3d37a] text-xs font-mono font-semibold">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Booking Button */}
              <div className="pt-4 space-y-3">
                <a
                  href={SHOW_DETAILS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3d37a] to-[#d4af37] text-black font-semibold tracking-wide text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.01] transition-all"
                >
                  <Ticket className="w-5 h-5" />
                  <span>Comprar Entradas en Atrápalo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-center text-slate-400">
                  Reserva 100% segura mediante Atrápalo o directamente en taquilla Sala Houdini.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

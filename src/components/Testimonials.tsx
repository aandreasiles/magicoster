import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, Award } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/magicData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 relative bg-[#090912] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d37a] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            Experiencias Reales • +1.030 Espectadores
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-4"
          >
            Lo que dicen de mi magia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Opiniones de asistentes a espectáculos teatrales, empresas de primer nivel y parejas en su día más especial.
          </motion.p>
        </div>

        {/* Featured Celebrity Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-transparent border border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.15)] mb-12 max-w-4xl mx-auto relative overflow-hidden text-center"
        >
          <Quote className="w-12 h-12 text-[#d4af37]/30 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-snug">
            "{TESTIMONIALS_DATA[0].quote}"
          </h3>
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold text-lg text-[#f3d37a]">
              {TESTIMONIALS_DATA[0].author}
            </span>
            <span className="text-xs text-slate-300">
              {TESTIMONIALS_DATA[0].role} • {TESTIMONIALS_DATA[0].source}
            </span>
            <div className="flex items-center gap-1 mt-2 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.slice(1).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-semibold text-white font-serif">
                  {item.author}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {item.role}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#f3d37a] mt-1 font-mono">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>{item.source}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

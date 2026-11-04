import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { ThreeHeroScene } from './ThreeScene';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background magical glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d37a] text-xs font-semibold tracking-widest uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              +15 Años en Escenarios • +720.000 Seguidores
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Ilusionismo{' '}
              <span className="gold-gradient-text">profesional</span>{' '}
              para empresas y bodas
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Soy <strong className="text-white font-semibold">Pablo Costas (Magicoster)</strong>. 
              Transformo eventos corporativos, galas y bodas exclusivas en momentos legendarios. 
              Sin clichés ni trucos infantiles: magia moderna, mentalismo y pickpocket a pocos centímetros 
              de tus ojos.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[#f3d37a] text-sm font-bold font-serif">
                  <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  <span>+1.030 Opiniones</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  4.9★ en Atrápalo & Google
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-purple-300 text-sm font-bold font-serif">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Sala Houdini</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Top Ventas +9 Años (Madrid)
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-emerald-300 text-sm font-bold font-serif">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Bilingüe</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Shows en Español & English
                </div>
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3d37a] to-[#d4af37] text-black font-semibold tracking-wide text-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Contratar Espectáculo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#espectaculo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/15 transition-all"
              >
                <span>Ver 'El Rey de Trébol'</span>
              </a>

              <a
                href="#truco"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] hover:text-[#f3d37a] transition-colors py-2 font-mono group"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37] group-hover:rotate-12 transition-transform" />
                <span>¿Te leo la mente online?</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Canvas Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient circular frame behind 3D Canvas */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 pointer-events-none" />
            
            <div className="w-full h-[450px] sm:h-[500px] lg:h-[540px]">
              <ThreeHeroScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Heart, Wine, CheckCircle2, ArrowRight, Sparkles, Smartphone, Eye, Hand } from 'lucide-react';
import { SERVICES_DATA } from '../data/magicData';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'empresas' | 'bodas' | 'coctelerias'>('empresas');

  const currentService = SERVICES_DATA.find((s) => s.category === activeTab) || SERVICES_DATA[0];

  const tabs = [
    { id: 'empresas', label: 'Empresas & Galas', icon: Briefcase },
    { id: 'bodas', label: 'Bodas & Particulares', icon: Heart },
    { id: 'coctelerias', label: 'Coctelerías & Ocio', icon: Wine },
  ];

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 relative bg-[#07070a] overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#d4af37]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d37a] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Experiencias Mágicas a Medida
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-4"
          >
            Magia diseñada para cada ocasión
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Un estilo sofisticado, dinámico e interactivo adaptado meticulosamente a las necesidades de tu evento.
          </motion.p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#f3d37a] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 backdrop-blur-md mb-16"
          >
            {/* Left Column: Information */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f3d37a] text-xs font-mono font-semibold uppercase tracking-wider">
                {currentService.badge}
              </span>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {currentService.title}
              </h3>

              <p className="text-lg text-[#f3d37a] font-serif font-medium">
                "{currentService.tagline}"
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                {currentService.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {currentService.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4af37] hover:bg-[#f3d37a] text-black font-semibold text-sm transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  <span>Pedir presupuesto para {currentService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300 font-mono">
                ✦ Imagen real en actuación de Pablo Costas
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sub-specialties Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif font-bold text-white mb-2">
              Mentalismo & Sugestión
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lectura de pensamiento, predicciones imposibles y experiencias psicológicas que desafían cualquier lógica racional.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif font-bold text-white mb-2">
              Magia Tecnológica
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ilusionismo contemporáneo utilizando teléfonos móviles de los propios invitados, redes sociales y efectos visuales de vanguardia.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Hand className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif font-bold text-white mb-2">
              Pickpocket Cómico
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              "Robos" elegantes de relojes, corbatas y carteras en directo con un humor hilarante (y devueltos al instante... ¡o no!).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

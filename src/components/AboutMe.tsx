import React from 'react';
import { motion } from 'framer-motion';
import { User, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/magicData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 relative bg-[#07070a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#d4af37]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Stats card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-[#101018]">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=960,fit=crop/mxBXBX7KznSE6Zr6/sis-99-AzGNGLeKNXuxBb7L.jpg"
                alt="Pablo Costas Mago Magicoster"
                className="w-full h-auto object-cover"
              />

              <div className="p-6 bg-gradient-to-t from-[#0e0e16] via-[#0e0e16]/95 to-transparent space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Pablo Costas
                    </h3>
                    <p className="text-xs text-[#d4af37] font-mono tracking-wider uppercase">
                      "Magicoster" • Ilusionista Profesional
                    </p>
                  </div>

                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-pink-600/20 hover:bg-pink-600/40 text-pink-300 border border-pink-500/30 transition-colors"
                    aria-label="Instagram de Pablo Costas"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Micro stats */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-center">
                  <div className="p-2.5 rounded-xl bg-white/[0.04]">
                    <div className="text-lg font-serif font-bold text-[#f3d37a]">+15 Años</div>
                    <div className="text-[10px] text-slate-400 uppercase">Experiencia Escénica</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04]">
                    <div className="text-lg font-serif font-bold text-[#f3d37a]">30-40 Bodas</div>
                    <div className="text-[10px] text-slate-400 uppercase">Al Año</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d37a] text-xs font-semibold tracking-wider uppercase">
              <User className="w-3.5 h-3.5 text-[#d4af37]" />
              Conoce al Ilusionista
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
              ¿Quién es <span className="gold-gradient-text">Pablo Costas</span>?
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Mi nombre es Pablo Costas, conocido artísticamente como <strong>"Magicoster"</strong>. 
                Llevo más de 15 años sobre los escenarios realizando cientos de eventos corporativos, magia para multinacionales, 
                conferencias, celebraciones privadas, galas y bodas de autor por toda España y Europa.
              </p>
              <p>
                He tenido el privilegio de actuar para marcas de prestigio internacional como{' '}
                <strong className="text-white">Cartier, Rolex, Netflix, BMW, KPMG, Bankinter, Ford, Hugo BOSS, Microsoft y Deloitte</strong>. 
                Asimismo, ejerzo habitualmente como presentador y maestro de ceremonias en galas de premios y congresos corporativos para 
                Renfe, Samsung, La Salle y The Valley Tech.
              </p>
              <p>
                Todas las semanas presento entre 4 y 5 funciones de mi espectáculo personal{' '}
                <strong className="text-[#f3d37a]">"El Rey de Trébol"</strong> en la prestigiosa{' '}
                <strong>Sala Houdini de Madrid</strong>, el teatro de magia más grande e influyente de Europa.
              </p>
            </div>

            {/* Credential checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <Check className="w-4 h-4 text-[#d4af37]" />
                <span>Equipo del Festival <em>León Vive la Magia</em></span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <Check className="w-4 h-4 text-[#d4af37]" />
                <span>Shows en Español e Inglés (Bilingüe)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <Check className="w-4 h-4 text-[#d4af37]" />
                <span>Cero clichés: magia moderna y adulta</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <Check className="w-4 h-4 text-[#d4af37]" />
                <span>+720.000 seguidores en redes sociales</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-semibold text-xs tracking-wider uppercase hover:shadow-lg transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Seguir en Instagram @magicoster</span>
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wider uppercase border border-white/20 transition-all"
              >
                <span>Solicitar Disponibilidad</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { CONTACT_INFO, SHOW_DETAILS } from '../data/magicData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/5 py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3d37a] flex items-center justify-center text-black font-serif font-black text-lg shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                ♠
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-wider">
                  PABLO COSTAS
                </span>
                <div className="text-[10px] text-[#d4af37] uppercase tracking-widest font-mono">
                  Magicoster • Ilusionista
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Ilusionista profesional con más de 15 años de experiencia. Magia de alto nivel para empresas, bodas exclusivas y el espectáculo "El Rey de Trébol" en el teatro Sala Houdini de Madrid.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600/30 border border-white/10 hover:border-pink-500/40 text-slate-300 hover:text-pink-300 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-600/30 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all text-xs font-bold font-mono"
                aria-label="TikTok"
              >
                TK
              </a>

              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600/30 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-300 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links: Espectáculo */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#f3d37a]">
              Teatro Houdini
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#espectaculo" className="hover:text-white transition-colors">
                  Show "El Rey de Trébol"
                </a>
              </li>
              <li>
                <a href={SHOW_DETAILS.bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Comprar entradas</span>
                  <span className="text-[#d4af37]">↗</span>
                </a>
              </li>
              <li>
                <span className="text-slate-500">Calle García Luna 13, Madrid</span>
              </li>
              <li>
                <span className="text-slate-500">Aforo exclusivo: 25 personas</span>
              </li>
            </ul>
          </div>

          {/* Quick links: Servicios */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#f3d37a]">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Magia para Empresas & Galas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Bodas & Eventos Familiares
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Coctelerías & Restaurantes
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Maestro de Ceremonias
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#f3d37a]">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  WhatsApp directo ↗
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] transition-all cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Volver arriba</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2025 Pablo Costas (Magicoster). Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> para una experiencia digna de un espectáculo de magia.
          </p>
        </div>
      </div>
    </footer>
  );
};

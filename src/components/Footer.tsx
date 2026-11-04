import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { CONTACT_INFO, SHOW_DETAILS } from '../data/magicData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] py-14 px-4 sm:px-6 text-zinc-400 text-xs border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-zinc-800">
          <div className="sm:col-span-2 space-y-3">
            <Link to="/" className="font-serif text-lg font-bold text-white tracking-wider block">
              PABLO COSTAS
            </Link>
            <p className="text-zinc-400 max-w-sm text-xs leading-relaxed">
              Ilusionista profesional con más de 15 años de experiencia. Magia de cerca, eventos corporativos para multinacionales y el espectáculo "El Rey de Trébol" en la Sala Houdini de Madrid.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-antique-gold transition-colors"
              >
                Instagram
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-antique-gold transition-colors"
              >
                TikTok
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-antique-gold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">
              Páginas
            </div>
            <ul className="space-y-1.5 text-zinc-400">
              <li><Link to="/el-rey-de-trebol" className="hover:text-white transition-colors">Sala Houdini</Link></li>
              <li><Link to="/empresas" className="hover:text-white transition-colors">Magia para Empresas</Link></li>
              <li><Link to="/bodas" className="hover:text-white transition-colors">Bodas de Autor</Link></li>
              <li><Link to="/coctelerias" className="hover:text-white transition-colors">Coctelerías y Locales</Link></li>
              <li><Link to="/galeria" className="hover:text-white transition-colors">Vídeos y Fotos</Link></li>
              <li><Link to="/sobre-mi" className="hover:text-white transition-colors">Sobre mí</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">
              Contacto
            </div>
            <ul className="space-y-1.5 text-zinc-400">
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
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp directo ↗
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={SHOW_DETAILS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-antique-gold hover:underline"
                >
                  Entradas Atrápalo ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © 2025 Pablo Costas (Magicoster). Todos los derechos reservados.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

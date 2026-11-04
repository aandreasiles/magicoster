import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Phone, Ticket } from 'lucide-react';
import { CONTACT_INFO, SHOW_DETAILS } from '../data/magicData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'El Rey de Trébol', href: '#espectaculo' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Empresas', href: '#servicios' },
    { name: 'Bodas', href: '#servicios' },
    { name: 'Vídeos', href: '#videos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07070a]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3d37a] flex items-center justify-center text-black font-serif font-black text-lg shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform">
              ♠
            </div>
            <div>
              <div className="font-serif font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-[#f3d37a] transition-colors">
                PABLO COSTAS
              </div>
              <div className="text-[10px] tracking-widest text-[#d4af37] uppercase font-mono">
                Magicoster • Ilusionista
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider text-slate-300 hover:text-[#f3d37a] transition-colors font-medium relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SHOW_DETAILS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-900/40 hover:bg-purple-900/70 border border-purple-500/40 text-purple-200 text-xs font-medium tracking-wide transition-all"
            >
              <Ticket className="w-3.5 h-3.5 text-purple-400" />
              Sala Houdini
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3d37a] text-black text-xs font-semibold tracking-wide hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contratar</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-[#d4af37] focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#07070a]/98 backdrop-blur-xl lg:hidden flex flex-col justify-center px-6 pt-20 pb-8"
          >
            <div className="flex flex-col items-center gap-5 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-widest text-slate-200 hover:text-[#f3d37a] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-6 w-full max-w-xs space-y-3">
                <a
                  href={SHOW_DETAILS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-900/60 border border-purple-500/50 text-purple-200 text-sm font-medium"
                >
                  <Ticket className="w-4 h-4 text-purple-300" />
                  Entradas Sala Houdini
                </a>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#d4af37] text-black text-sm font-semibold shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

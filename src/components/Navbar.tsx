import { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { CONTACT_INFO, SHOW_DETAILS } from '../data/magicData';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'El Rey de Trébol', href: '#espectaculo' },
    { label: 'Empresas', href: '#servicios' },
    { label: 'Bodas', href: '#servicios' },
    { label: 'Vídeos', href: '#videos' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08080a]/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-baseline gap-2 group">
          <span className="font-serif text-lg tracking-wider font-semibold text-white group-hover:text-champagne transition-colors">
            PABLO COSTAS
          </span>
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest hidden sm:inline">
            • Ilusionista
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={SHOW_DETAILS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-300 hover:text-champagne transition-colors flex items-center gap-1 font-medium"
          >
            <span>Sala Houdini</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Contratar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0c0c0e] border-b border-zinc-800 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-zinc-200 hover:text-white py-1 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={SHOW_DETAILS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-md border border-zinc-700 text-xs font-semibold text-zinc-200 uppercase tracking-wider"
            >
              Entradas Sala Houdini ↗
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-champagne text-zinc-950 text-xs font-semibold uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Llamar: {CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

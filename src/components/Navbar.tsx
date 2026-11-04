import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/magicData';
import { useTicketPicker } from './TicketPicker';

export const Navbar = () => {
  const { open: openTickets } = useTicketPicker();
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'El Rey de Trébol', path: '/el-rey-de-trebol' },
    { label: 'Empresas', path: '/empresas' },
    { label: 'Bodas', path: '/bodas' },
    { label: 'Coctelerías', path: '/coctelerias' },
    { label: 'Vídeos & Fotos', path: '/galeria' },
    { label: 'Sobre mí', path: '/sobre-mi' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08080a]/95 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 h-16 flex items-center justify-between gap-6">
        {/* Brand: signature, same as hero */}
        <Link to="/" aria-label="Pablo Costas - Inicio" className="group shrink-0">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/mxBXBX7KznSE6Zr6/firma-AQEZEe1LXGcneLGM.png"
            alt="Pablo Costas"
            className="h-9 sm:h-11 w-auto object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-9">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `whitespace-nowrap text-xs font-medium uppercase tracking-wider transition-colors ${
                  isActive ? 'text-antique-gold font-semibold' : 'text-zinc-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button type="button"
            onClick={openTickets}
            className="whitespace-nowrap text-xs text-zinc-300 hover:text-antique-gold transition-colors flex items-center gap-1 font-medium"
          >
            <span className="hidden xl:inline">Sala Houdini</span>
            <span className="xl:hidden">Houdini</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <Link
            to="/contacto"
            className="whitespace-nowrap px-4 py-2 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Contratar
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 text-zinc-400 hover:text-white rounded-md focus:outline-none"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="xl:hidden bg-[#0c0c10] border-b border-zinc-800 px-6 py-6 space-y-3">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium py-1.5 uppercase tracking-wider transition-colors ${
                  isActive ? 'text-antique-gold font-bold' : 'text-zinc-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <button type="button"
              onClick={openTickets}
              className="w-full text-center py-2.5 rounded-md border border-zinc-700 text-xs font-semibold text-zinc-200 uppercase tracking-wider"
            >
              Entradas Sala Houdini ↗
            </button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-antique-gold text-zinc-950 text-xs font-semibold uppercase tracking-wider"
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

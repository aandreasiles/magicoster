import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/magicData';
import { useTicketPicker } from './TicketPicker';

const SOCIALS = [
  { label: 'Instagram', href: CONTACT_INFO.instagram },
  { label: 'TikTok', href: CONTACT_INFO.tiktok },
  { label: 'Facebook', href: CONTACT_INFO.facebook },
];

export const Footer = () => {
  const { open: openTickets } = useTicketPicker();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative isolate overflow-hidden bg-[#040406] border-t border-zinc-800/80">
      <div className="absolute inset-0 -z-10 bg-grain" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-antique-gold/60 to-transparent" />
      <div className="absolute left-1/2 -top-40 -z-10 h-80 w-[700px] -translate-x-1/2 rounded-full bg-antique-gold/10 blur-3xl" />

      {/* Call to action */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 text-center">
        <div className="flex justify-center gap-4 text-antique-gold/70 font-serif text-2xl mb-6">
          <span>♠</span><span className="text-velvet-crimson">♥</span><span>♣</span><span className="text-velvet-crimson">♦</span>
        </div>
        <h2 className="heading-lg max-w-3xl mx-auto">
          ¿Preparado para ver lo <span className="text-shine italic">imposible</span>?
        </h2>
        <p className="body-text max-w-lg mx-auto mt-5">
          Cuéntame tu evento y te respondo en menos de 24 horas con disponibilidad y propuesta a medida.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-antique-gold hover:bg-antique-light text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-[0_0_40px_-8px_rgba(203,168,110,0.7)]"
          >
            Pedir presupuesto <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-zinc-600 hover:border-antique-gold hover:text-antique-gold text-zinc-100 text-xs font-medium uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Signature + contact */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 sm:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-800/60">
          <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="group bg-[#07070a] p-5 md:p-6 hover:bg-[#0c0c11] transition-colors flex items-center gap-4 md:flex-col md:items-start md:gap-0 text-left">
            <Phone className="w-5 h-5 md:w-4 md:h-4 text-antique-gold shrink-0 md:mb-4" />
            <div className="min-w-0"><div className="eyebrow !text-zinc-500 mb-1">Teléfono</div>
            <div className="font-serif text-lg md:text-xl text-white group-hover:text-antique-gold transition-colors">{CONTACT_INFO.phone}</div></div>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="group bg-[#07070a] p-5 md:p-6 hover:bg-[#0c0c11] transition-colors flex items-center gap-4 md:flex-col md:items-start md:gap-0 text-left">
            <Mail className="w-5 h-5 md:w-4 md:h-4 text-antique-gold shrink-0 md:mb-4" />
            <div className="min-w-0"><div className="eyebrow !text-zinc-500 mb-1">E-mail</div>
            <div className="font-serif text-lg md:text-xl text-white group-hover:text-antique-gold transition-colors break-words">{CONTACT_INFO.email}</div></div>
          </a>
          <button type="button" onClick={openTickets} className="group bg-[#07070a] p-5 md:p-6 hover:bg-[#0c0c11] transition-colors flex items-center gap-4 md:flex-col md:items-start md:gap-0 text-left">
            <MapPin className="w-5 h-5 md:w-4 md:h-4 text-antique-gold shrink-0 md:mb-4" />
            <div className="min-w-0"><div className="eyebrow !text-zinc-500 mb-1">En cartel</div>
            <div className="font-serif text-lg md:text-xl text-white group-hover:text-antique-gold transition-colors">El Rey de Trébol · Sala Houdini ↗</div></div>
          </button>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/mxBXBX7KznSE6Zr6/firma-AQEZEe1LXGcneLGM.png" alt="Pablo Costas" className="h-14 sm:h-20 w-auto filter invert opacity-80" />
          <div className="flex flex-wrap justify-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-zinc-700 text-xs font-medium uppercase tracking-wider text-zinc-300 hover:border-antique-gold hover:text-antique-gold transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 py-6 border-t border-zinc-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Pablo Costas · Magia de cerca y mentalismo</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors">
            Volver arriba <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

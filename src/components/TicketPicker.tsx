import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowUpRight, Ticket, X } from 'lucide-react';
import { TICKET_LINKS } from '../data/magicData';

const TicketPickerContext = createContext<{ open: () => void }>({ open: () => {} });

export const useTicketPicker = () => useContext(TicketPickerContext);

export const TicketPickerProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  return (
    <TicketPickerContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Elige dónde comprar tus entradas"
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-zinc-700 bg-[#0c0c11] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="eyebrow flex items-center gap-2 mb-2">
              <Ticket className="w-4 h-4" />
              <span>El Rey de Trébol · Sala Houdini</span>
            </div>
            <p className="text-sm text-zinc-400 mb-5">
              Elige tu plataforma de confianza para comprar las entradas.
            </p>
            <div className="flex flex-col gap-3">
              {TICKET_LINKS.map((t) => (
                <a
                  key={t.name}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className={`group flex items-center justify-between gap-3 p-4 rounded-xl border transition-colors ${
                    t.primary
                      ? 'bg-antique-gold border-antique-gold text-zinc-950 hover:bg-antique-light'
                      : 'bg-zinc-900/60 border-zinc-700 text-white hover:border-antique-gold'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="font-serif text-lg font-bold leading-tight">{t.name}</div>
                    <div className={`text-xs mt-0.5 ${t.primary ? 'text-zinc-800' : 'text-zinc-400'}`}>{t.note}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </TicketPickerContext.Provider>
  );
};

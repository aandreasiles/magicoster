import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Sparkles } from 'lucide-react';
import { CONTACT_INFO, SHOW_DETAILS } from '../data/magicData';

export const Hero = () => {
  return (
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-zinc-800/80 bg-[#040406] overflow-hidden">
      {/* Subtle stage spotlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[350px] bg-gradient-to-b from-antique-gold/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Presentation */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-antique-light">
              <Sparkles className="w-3.5 h-3.5 text-antique-gold shrink-0" />
              <span>Ilusionismo Profesional • Madrid</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] text-balance">
              El imposible sucede a centímetros de tus ojos.
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
              Soy <strong className="text-white font-semibold">Pablo Costas</strong>. 
              Más de 15 años en los escenarios de toda España. Magia de cerca, mentalismo y pickpocket para empresas de prestigio, galas exclusivas y bodas de autor.
            </p>

            {/* Signature image of Pablo Costas */}
            <div className="py-1">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/mxBXBX7KznSE6Zr6/firma-AQEZEe1LXGcneLGM.png"
                alt="Firma de Pablo Costas"
                className="h-11 sm:h-14 w-auto object-contain filter invert opacity-80"
              />
            </div>

            {/* CTAs Responsive */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Contratar para mi Evento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#baraja"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-xs uppercase tracking-wider border border-zinc-700 transition-colors"
              >
                <span>Explorar la Baraja</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-center font-mono text-zinc-400 hover:text-antique-gold underline underline-offset-4 transition-colors py-2"
              >
                WhatsApp directo ↗
              </a>
            </div>

            {/* Trust Metric Strip */}
            <div className="pt-5 border-t border-zinc-800/80 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-antique-gold text-xs sm:text-sm font-semibold font-serif">
                  <Star className="w-3.5 h-3.5 fill-antique-gold shrink-0" />
                  <span>4.9 / 5</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">+1.030 opiniones</div>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-white text-xs sm:text-sm font-semibold font-serif">
                  <Calendar className="w-3.5 h-3.5 text-antique-gold shrink-0" />
                  <span>Top Ventas</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">Sala Houdini (+9 años)</div>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-white text-xs sm:text-sm font-semibold font-serif">
                  <span>+16.000</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">Espectadores</div>
              </div>
            </div>
          </div>

          {/* Right Column: Photography */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0c0c10] shadow-2xl">
              <div className="aspect-[4/5] w-full">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=960,fit=crop/mxBXBX7KznSE6Zr6/sis-99-AzGNGLeKNXuxBb7L.jpg"
                  alt="Pablo Costas actuando en directo"
                  className="w-full h-full object-cover filter contrast-[1.08]"
                  loading="eager"
                />
              </div>

              <div className="p-3.5 sm:p-4 bg-zinc-950/90 border-t border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <div className="text-white font-serif font-bold text-xs sm:text-sm">Pablo Costas</div>
                  <div className="text-zinc-400 font-mono text-[10px] sm:text-[11px]">En directo • Sala Houdini & Galas</div>
                </div>
                <a
                  href={SHOW_DETAILS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-3 py-1.5 rounded bg-antique-gold/20 hover:bg-antique-gold/30 text-antique-light border border-antique-gold/40 font-mono text-[10px] uppercase tracking-wider transition-colors shrink-0"
                >
                  Entradas ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

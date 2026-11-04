import { ArrowRight, Star, Calendar, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/magicData';

export const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-800/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-zinc-300 text-xs font-mono uppercase tracking-widest">
              <span>Madrid</span>
              <span className="text-zinc-600">•</span>
              <span>Eventos & Escenarios</span>
              <span className="text-zinc-600">•</span>
              <span className="text-champagne font-semibold">+15 Años</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08] text-balance">
              Ilusionismo contemporáneo para empresas, galas y bodas de autor.
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Soy <strong className="text-white font-medium">Pablo Costas (Magicoster)</strong>. 
              Especializado en magia de cerca, mentalismo y pickpocket a escasos centímetros de los ojos. 
              Sin artificios infantiles ni clichés: entretenimiento adulto, inteligente y memorable.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-sm transition-colors"
              >
                <span>Solicitar propuesta</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#espectaculo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-sm border border-zinc-700 transition-colors"
              >
                <span>"El Rey de Trébol" en Houdini</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-champagne underline underline-offset-4 transition-colors py-2"
              >
                WhatsApp directo ↗
              </a>
            </div>

            {/* Key highlights strip */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-1 text-champagne text-sm font-semibold">
                  <Star className="w-3.5 h-3.5 fill-champagne" />
                  <span>4.9 / 5</span>
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">+1.030 reseñas en Atrápalo</div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-zinc-200 text-sm font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>9+ Años</span>
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">Top Ventas Sala Houdini</div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-zinc-200 text-sm font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Bilingüe</span>
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">Español & English</div>
              </div>
            </div>
          </div>

          {/* Right Column: High quality real photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <div className="aspect-[4/5] w-full">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=960,fit=crop/mxBXBX7KznSE6Zr6/sis-99-AzGNGLeKNXuxBb7L.jpg"
                  alt="Pablo Costas actuando en directo"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                  loading="eager"
                />
              </div>
              <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <div className="text-white font-medium">Pablo Costas</div>
                  <div className="text-zinc-500 font-mono text-[11px]">En directo en gala de empresa</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px] uppercase">
                  Madrid
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

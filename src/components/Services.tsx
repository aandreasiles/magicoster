import { Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/magicData';

export const Services = () => {
  return (
    <section id="servicios" className="py-20 border-b border-zinc-800/60 bg-[#08080a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-champagne block mb-2">
            Servicios Profesionales
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Magia adaptada a cada formato de evento
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Formatos probados durante más de 15 años para dinamizar, emocionar y conectar a los asistentes sin alterar el ritmo del evento.
          </p>
        </div>

        {/* 3 Main Services Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/60 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter contrast-[1.05]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-champagne block mb-2">
                    {service.badge}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-serif italic mb-4">
                    "{service.tagline}"
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 border-t border-zinc-800 pt-4">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#contacto"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded border border-zinc-700 hover:border-zinc-500 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                >
                  <span>Pedir presupuesto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Technical disciplines strip */}
        <div className="p-8 rounded-lg bg-zinc-900 border border-zinc-800">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6 text-center">
            Especialidades de Ilusionismo
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-sm font-serif font-bold text-white">
                Mentalismo & Hipnosis
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Lecturas de pensamiento, predicciones imposibles y experiencias de sugestión que desafían la lógica del público más escéptico.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-serif font-bold text-white">
                Magia con Smartphones
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Efectos modernos utilizando los teléfonos móviles y redes sociales de los propios asistentes, fusionando tecnología y asombro.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-serif font-bold text-white">
                Pickpocket Cómico
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                "Robos" elegantes de relojes, carteras y corbatas en directo con humor hilarante y devueltos al instante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/magicData';

export const CocteleriasPage = () => {
  const service = SERVICES_DATA[2];

  return (
    <div className="pb-16 sm:pb-24">
      <PageHero crumb="Coctelerías & Locales" eyebrow="Ocio & Hostelería" title="Magia para" accent="Coctelerías & Ocio" intro="Magia de cerca a pie de mesa o en barra, haciendo las esperas amenas, sorprendentes y fidelizando clientes." image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1080,fit=crop/mxBXBX7KznSE6Zr6/club-YZ9jn58DJaCe8GwX.jpg" suit="♣" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-zinc-800 bg-[#0a0a0e] p-6 sm:p-10">
          <div className="lg:col-span-7 space-y-5">
            <span className="eyebrow block">
              Fidelización & Experiencia de Cliente
            </span>
            <h2 className="heading-lg">
              Amenizar esperas y crear clientes recurrentes
            </h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                La magia de cóctel en restaurantes y locales nocturnos siempre ha sido un éxito rotundo. Amenizar las esperas entre plato y plato o mientras se prepara una copa es clave para que el cliente quede encantado y, sobre todo... ¡quiera repetir!
              </p>
              <p>
                Llevo años realizando magia en locales de ocio de forma recurrente, consiguiendo fidelizar clientes por el valor añadido diferencial de contar con magia en vivo.
              </p>
            </div>

            <ul className="space-y-2 pt-2 border-t border-zinc-800">
              {service.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                  <Check className="w-4 h-4 text-antique-gold shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Consultar Condiciones para mi Local</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="aspect-[4/3] w-full">
              <img
                src={service.image}
                alt="Magia en Coctelerías"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="heading-md mb-6">
          Magia de cóctel en vivo
        </h3>
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/52Qpq82m2ZY?rel=0"
            title="Magia en coctelerías"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

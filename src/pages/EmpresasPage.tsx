import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { ClientMarquee } from '../components/ClientMarquee';
import { SERVICES_DATA } from '../data/magicData';

export const EmpresasPage = () => {
  const service = SERVICES_DATA[0];

  return (
    <div className="py-10 sm:py-16">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-antique-gold font-semibold">Empresas</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
          Magia para Empresas & Galas
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Un ilusionista a medida y personalizado a la marca. Hazlo diferente, hazlo con magia.
        </p>
      </div>

      {/* Main Feature */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-zinc-800 bg-[#0a0a0e] p-6 sm:p-10">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-antique-gold block">
              Corporativo & Eventos de Marca
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Dinamización, Asombro e Involucración
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Magia personalizada para empresas y marcas de gran prestigio internacional como Netflix, Rolex, Cartier, BMW, Microsoft o KPMG. Sorprende a tus equipos con una actividad innovadora y haz que se involucren al 100%.
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Puedo infiltrarme como un empleado más para dinamizar cócteles y recepciones sin alterar el protocolo, o presentar sobre el escenario como maestro de ceremonias en congresos, graduaciones y entregas de premios.
            </p>

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
                <span>Pedir Presupuesto para Empresa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="aspect-[4/3] w-full">
              <img
                src={service.image}
                alt="Magia para Empresas"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Videos corporativos */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">
          En directo en eventos de empresa
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/GUunSaoCWLc?rel=0"
              title="Magia de Cóctel en Netflix España"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/KUcjwVhphKc?rel=0"
              title="Magia grupal en Netflix España"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Client Logos Roster */}
      <ClientMarquee />
    </div>
  );
};

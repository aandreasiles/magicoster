import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/magicData';

export const BodasPage = () => {
  const service = SERVICES_DATA[1];

  return (
    <div className="py-10 sm:py-16">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-antique-gold font-semibold">Bodas & Particulares</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
          Magia Profesional en Bodas y Eventos
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Personaliza tu boda de la forma más mágica. Me encargaré de acompañaros en vuestro día para hacer del cóctel o del banquete un momento único y original.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-zinc-800 bg-[#0a0a0e] p-6 sm:p-10">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-antique-gold block">
              Bodas Exclusivas • 30 a 40 bodas al año
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Dinamiza el cóctel y conecta a tus invitados
            </h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong>Durante el cóctel:</strong> Actúo entre los invitados como uno más, realizando mini-shows itinerantes por grupos. Es la herramienta perfecta para dinamizar la recepción y conectar a diferentes círculos de amigos y familias que aún no se conocen.
              </p>
              <p>
                <strong>Durante el banquete:</strong> Amenizo las esperas entre plato y plato, rompiendo el hielo para que todos participen activamente.
              </p>
              <p>
                <strong>Personalización Total:</strong> ¿Queréis una baraja con vuestra fecha? ¿Hacer aparecer un regalo especial sobre el escenario? Podemos personalizar los efectos para que vuestra historia de amor sea el eje central.
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
                <span>Consultar Disponibilidad para mi Boda</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="aspect-[4/3] w-full">
              <img
                src={service.image}
                alt="Magia en Bodas"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video boda */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">
          Magia multitudinaria en directo en una boda
        </h3>
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/7pS04V0RgJA?rel=0"
            title="Magia con 300 personas en una boda"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

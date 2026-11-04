import { Link } from 'react-router-dom';
import { ShowHoudiniTicket } from '../components/ShowHoudiniTicket';

export const HoudiniPage = () => {
  return (
    <div className="py-10 sm:py-16">
      {/* Intro Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-antique-gold font-semibold">El Rey de Trébol (Sala Houdini)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
          "El Rey de Trébol" en Sala Houdini
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          El espectáculo más visto y mejor valorado en el teatro de magia más grande de Europa. Una experiencia inolvidable de magia de cerca para solo 25 espectadores.
        </p>
      </div>

      {/* Ticket Component */}
      <ShowHoudiniTicket />

      {/* Deep-dive Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-sm text-zinc-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              ¿Por qué es un show diferente?
            </h2>
            <p>
              "El Rey de Trébol" lleva en el top ventas nacional ya más de 9 años. Ha sido disfrutado por más de 16.000 personas y cuenta con más de 1.030 opiniones en plataformas oficiales como Atrápalo.
            </p>
            <p>
              En este espectáculo no hay grandes cajas ni trucos antiguos. Verás magia moderna: teléfonos de los propios espectadores que reciben llamadas imposibles, relojes que se desvanecen en sus muñecas, mentalismo interactivo y cartas ejecutadas con una técnica prodigiosa.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-antique-light">
              ✦ Dirección: Calle García Luna 13, 28002 Madrid. Sala Houdini (Metro Prosperidad / Alfonso XIII).
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-video relative">
            <iframe
              src="https://www.youtube.com/embed/crytUuAcxY0?rel=0"
              title="Trailer El Rey de Trébol"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

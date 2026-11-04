import { PageHero } from '../components/PageHero';
import { SHOW_IMAGES } from '../data/magicData';
import { HoudiniReviews } from '../components/HoudiniReviews';
import { ShowHoudiniTicket } from '../components/ShowHoudiniTicket';

export const HoudiniPage = () => {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero crumb="El Rey de Trébol (Sala Houdini)" eyebrow="Sala Houdini · Madrid" title="El Rey de Trébol" accent="en Sala Houdini" intro="El espectáculo más visto y mejor valorado en el teatro de magia más grande de Europa. Una experiencia inolvidable de magia de cerca para solo 25 espectadores." image={SHOW_IMAGES.room} suit="♣" />

      {/* Ticket Component */}
      <ShowHoudiniTicket />

      <HoudiniReviews />

      {/* Deep-dive Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 body-text">
            <h2 className="heading-lg">
              ¿Por qué es un show diferente?
            </h2>
            <p>
              "El Rey de Trébol" lleva en el top ventas nacional ya más de 9 años. Ha sido disfrutado por más de 16.000 personas y cuenta con más de 1.030 opiniones en plataformas oficiales como Atrápalo.
            </p>
            <p>
              En este espectáculo no hay grandes cajas ni trucos antiguos. Verás magia moderna: teléfonos de los propios espectadores que reciben llamadas imposibles, relojes que se desvanecen en sus muñecas, mentalismo interactivo y cartas ejecutadas con una técnica prodigiosa.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-antique-light">
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

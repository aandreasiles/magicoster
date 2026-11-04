import { Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/magicData';

export const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-20 border-b border-zinc-800/60 bg-[#08080a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
              <div className="aspect-[4/5] w-full">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2800,h=1866,fit=crop/mxBXBX7KznSE6Zr6/editada-04039-YbNJNLqoLGsgW08M.jpg"
                  alt="Pablo Costas Mago e Ilusionista"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <div className="text-white font-medium">Pablo Costas</div>
                  <div className="text-zinc-500 font-sans text-[11px]">@magicoster • +720k seguidores</div>
                </div>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-sans text-[10px] uppercase transition-colors"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="eyebrow block mb-2">
                Biografía Profesional
              </span>
              <h2 className="heading-lg">
                ¿Quién soy?
              </h2>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
              <p>
                Mi nombre es <strong>Pablo Costas</strong>, conocido profesionalmente como <strong>"magicoster"</strong>, y soy ilusionista profesional. Cuento con más de 15 años de experiencia sobre los escenarios realizando cientos de eventos corporativos, magia para multinacionales, conferencias, celebraciones privadas y bodas de autor (entre 30 y 40 al año).
              </p>
              <p>
                He actuado para firmas internacionales de máximo prestigio como <strong className="text-white">Cartier, Rolex, Netflix, BMW, KPMG, Bankinter, Ford, Hugo BOSS, Microsoft y Deloitte</strong>.
              </p>
              <p>
                También ejerzo habitualmente como presentador y maestro de ceremonias en galas, entregas de premios y graduaciones para <strong>Renfe, Samsung, La Salle y premios Best!N</strong>, fusionando protocolo y asombro.
              </p>
              <p>
                Todas las semanas presento entre 4 y 5 pases de mi show personal <strong>"El Rey de Trébol"</strong> en la <strong>Sala Houdini de Madrid</strong>, el teatro de magia más grande de Europa.
              </p>
            </div>

            {/* Credential checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-zinc-800/80">
              <div className="flex items-center gap-2 text-xs text-zinc-200">
                <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Equipo del Festival <em>León Vive la Magia</em></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-200">
                <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Shows en Español e Inglés (Bilingüe)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-200">
                <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Estilo moderno: cero clichés infantiles</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-200">
                <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>+720.000 seguidores en redes sociales</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Hablar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="px-5 py-2.5 rounded border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium text-xs uppercase tracking-wider transition-colors"
              >
                Solicitar fecha para evento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

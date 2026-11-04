import { CLIENT_LOGOS } from '../data/magicData';

export const ClientMarquee = () => {
  return (
    <section className="py-12 sm:py-16 border-b border-zinc-800/80 bg-[#060608]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="eyebrow text-antique-gold/90 text-center mb-6 sm:mb-8">
          ✦ Empresas y marcas que confían en su magia ✦
        </p>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2.5 sm:gap-4 items-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="h-14 sm:h-16 flex items-center justify-center p-2.5 sm:p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/70 hover:border-antique-gold/40 hover:bg-zinc-900/80 transition-all duration-300 group"
              title={client.name}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-6 sm:max-h-7 max-w-[80px] sm:max-w-[90px] object-contain filter grayscale invert opacity-50 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : null}
              <span className="text-[11px] sm:text-xs font-sans text-zinc-400 truncate text-center hidden only:inline">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { CLIENT_LOGOS } from '../data/magicData';

export const ClientMarquee = () => {
  return (
    <section className="py-14 border-b border-zinc-800/80 bg-[#060608]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-[11px] font-mono uppercase tracking-widest text-antique-gold/90 text-center mb-8">
          ✦ Empresas y marcas que confían en su magia ✦
        </p>

        {/* Clean, high-contrast client roster */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 items-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="h-16 flex items-center justify-center p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/70 hover:border-antique-gold/40 hover:bg-zinc-900/80 transition-all duration-300 group"
              title={client.name}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-7 max-w-[90px] object-contain filter grayscale invert opacity-50 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : null}
              <span className="text-xs font-mono text-zinc-400 truncate text-center hidden only:inline">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

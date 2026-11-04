import { CLIENT_LOGOS } from '../data/magicData';

export const ClientMarquee = () => {
  return (
    <section className="py-12 border-b border-zinc-800/60 bg-[#08080a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 text-center mb-8">
          Marcas e instituciones que confían en su magia
        </p>

        {/* Clean, fast client logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 items-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="h-16 flex items-center justify-center p-3 rounded-md bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              title={client.name}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-7 max-w-[90px] object-contain filter grayscale invert opacity-60 hover:opacity-100 transition-opacity"
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

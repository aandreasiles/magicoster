import { GALLERY_PHOTOS } from '../data/magicData';

export const PhotoGallery = () => {
  return (
    <section id="galeria" className="py-20 border-b border-zinc-800/60 bg-[#08080a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-champagne block mb-2">
              Galería de Escena
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Instantes y reacciones
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            Magia de autor en galas corporativas, cócteles de bodas y el teatro Sala Houdini de Madrid.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-zinc-950">
                <div className="text-sm font-serif font-bold text-white">
                  {photo.title}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {photo.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

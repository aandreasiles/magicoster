import { useState } from 'react';
import { Play } from 'lucide-react';
import { VIDEOS_DATA } from '../data/magicData';
import type { VideoItem } from '../data/magicData';

export const VideoGallery = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 border-b border-zinc-800/60 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow block mb-2">
              Actuaciones en Directo
            </span>
            <h2 className="heading-lg">
              La magia en acción
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            "Mis juegos de magia deberían estar en Netflix". Descubre aquí la reacción real de asistentes en eventos corporativos y bodas.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS_DATA.map((video: VideoItem) => {
            const isPlaying = activeVideoId === video.id;

            return (
              <div
                key={video.id}
                className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full bg-black">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      onClick={() => setActiveVideoId(video.id)}
                      className="w-full h-full relative block group cursor-pointer text-left"
                      aria-label={`Reproducir ${video.title}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-zinc-950 ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-zinc-950/80 text-zinc-200 text-[10px] font-sans uppercase tracking-wider">
                        {video.category}
                      </span>
                    </button>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="heading-sm mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {video.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

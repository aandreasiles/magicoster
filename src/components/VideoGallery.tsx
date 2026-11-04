import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Video } from 'lucide-react';
import { VIDEOS_DATA } from '../data/magicData';
import type { VideoItem } from '../data/magicData';

export const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Corporativo', 'Bodas', 'Teatro', 'Coctelería'];

  const filteredVideos =
    filter === 'Todos'
      ? VIDEOS_DATA
      : VIDEOS_DATA.filter((v) => v.category === filter);

  return (
    <section id="videos" className="py-24 px-4 sm:px-6 relative bg-[#090911] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-purple-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d37a] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Video className="w-3.5 h-3.5 text-[#d4af37]" />
            Actuaciones en Directo
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-4"
          >
            "Mis juegos de magia...{' '}
            <span className="gold-gradient-text">deberían estar en Netflix</span>"
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Mira cómo reacciona el público en directo. La magia no se cuenta, se vive.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#d4af37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden bg-[#11111a] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 cursor-pointer shadow-lg"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail with YouTube image */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11111a] via-transparent to-black/30" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#d4af37]/90 text-black flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:scale-110 group-hover:bg-[#f3d37a] transition-all">
                    <Play className="w-6 h-6 fill-black ml-1" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider text-[#f3d37a] border border-[#d4af37]/30">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Title & info */}
              <div className="p-5">
                <h4 className="text-base font-serif font-bold text-white group-hover:text-[#f3d37a] transition-colors mb-1">
                  {video.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {video.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#11111a] rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-base font-serif font-bold text-white">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Embedded Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

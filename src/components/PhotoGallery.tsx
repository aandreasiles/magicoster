import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ZoomIn } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/magicData';

export const PhotoGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<{ src: string; title: string; caption: string } | null>(null);

  return (
    <section id="galeria" className="py-24 px-4 sm:px-6 relative bg-[#07070a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#d4af37]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d37a] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            Galería Fotográfica
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-4"
          >
            Mi magia en un instante
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Instantes capturados en eventos corporativos, presentaciones, galas, bodas y el teatro Houdini.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden bg-[#101018] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 cursor-pointer shadow-lg aspect-[4/3]"
              onClick={() => setActivePhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h4 className="text-base font-serif font-bold text-white group-hover:text-[#f3d37a] transition-colors mb-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {photo.caption}
                </p>
              </div>

              {/* Zoom icon on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#f3d37a]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-[#0e0e16] rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full max-h-[75vh] object-contain"
              />

              <div className="p-4 bg-[#11111a] border-t border-white/10">
                <h3 className="text-lg font-serif font-bold text-white mb-0.5">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {activePhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

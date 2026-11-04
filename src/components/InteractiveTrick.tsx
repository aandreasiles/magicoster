import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Eye, RotateCcw, Wand2 } from 'lucide-react';

interface Card {
  id: string;
  name: string;
  symbol: string;
  suit: 'spade' | 'heart' | 'club' | 'diamond';
  color: string;
}

// Initial set of cards (Set A)
const INITIAL_CARDS: Card[] = [
  { id: 'ks', name: 'Rey de Picas', symbol: '♠', suit: 'spade', color: '#f1f5f9' },
  { id: 'qh', name: 'Reina de Corazones', symbol: '♥', suit: 'heart', color: '#f43f5e' },
  { id: 'kc', name: 'Rey de Trébol', symbol: '♣', suit: 'club', color: '#d4af37' },
  { id: 'jd', name: 'Jack de Diamantes', symbol: '♦', suit: 'diamond', color: '#f43f5e' },
  { id: 'as', name: 'As de Picas', symbol: '♠', suit: 'spade', color: '#f1f5f9' },
];

// Transformed set where all cards have subtly shifted, creating the psychological illusion that the specific chosen card vanished!
const RESULT_CARDS: Card[] = [
  { id: 'qs', name: 'Reina de Picas', symbol: '♠', suit: 'spade', color: '#f1f5f9' },
  { id: 'kh', name: 'Rey de Corazones', symbol: '♥', suit: 'heart', color: '#f43f5e' },
  { id: 'jc', name: 'Jack de Trébol', symbol: '♣', suit: 'club', color: '#d4af37' },
  { id: 'qd', name: 'Reina de Diamantes', symbol: '♦', suit: 'diamond', color: '#f43f5e' },
];

export const InteractiveTrick: React.FC = () => {
  const [step, setStep] = useState<'choose' | 'reading' | 'revealed'>('choose');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const startMindReading = () => {
    setStep('reading');
    setTimeout(() => {
      setStep('revealed');
      // Fire confetti burst!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3d37a', '#8b5cf6', '#ffffff']
      });
    }, 2800);
  };

  const resetTrick = () => {
    setStep('choose');
    setHoveredCard(null);
  };

  return (
    <section id="truco" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#090910] via-[#0d0d17] to-[#07070a]">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d37a] text-xs font-semibold tracking-wider uppercase mb-5"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          Experiencia Interactiva en Vivo
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight"
        >
          Mentalismo a través de la pantalla
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg mb-10"
        >
          {step === 'choose' && (
            <>
              Elige <strong className="text-[#f3d37a]">una sola carta</strong> mentalmente entre las cinco.
              Mírala con atención, memorízala y no toques nada hasta estar listo.
            </>
          )}
          {step === 'reading' && (
            <span className="text-[#f3d37a] animate-pulse">
              Conectando con tu pensamiento... Visualiza tu carta fijamente en tu mente...
            </span>
          )}
          {step === 'revealed' && (
            <span className="text-emerald-300 font-medium">
              He leído tu mente. He extraído tu carta de la baraja y la he hecho desaparecer en el aire.
            </span>
          )}
        </motion.p>

        {/* Interactive Cards Stage */}
        <div className="min-h-[290px] flex items-center justify-center mb-10">
          <AnimatePresence mode="wait">
            {step === 'choose' && (
              <motion.div
                key="choose-cards"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-5 justify-center max-w-3xl mx-auto"
              >
                {INITIAL_CARDS.map((card) => {
                  const isHovered = hoveredCard === card.id;
                  return (
                    <motion.div
                      key={card.id}
                      onHoverStart={() => setHoveredCard(card.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                      whileHover={{ y: -12, scale: 1.05 }}
                      className={`relative w-32 md:w-36 h-48 md:h-52 rounded-xl p-3 flex flex-col justify-between cursor-pointer border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#181825] border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.35)]'
                          : 'bg-[#101018] border-white/10 shadow-lg'
                      }`}
                    >
                      {/* Top left corner */}
                      <div className="text-left font-serif">
                        <div className="text-lg font-bold" style={{ color: card.color }}>
                          {card.name.charAt(0)}
                        </div>
                        <div className="text-sm" style={{ color: card.color }}>
                          {card.symbol}
                        </div>
                      </div>

                      {/* Center symbol */}
                      <div className="text-4xl md:text-5xl self-center" style={{ color: card.color }}>
                        {card.symbol}
                      </div>

                      {/* Bottom label */}
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 truncate text-center font-mono">
                        {card.name}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {step === 'reading' && (
              <motion.div
                key="reading-state"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                {/* Mystic vortex spinner */}
                <div className="relative w-28 h-28 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#d4af37] animate-spin-slow" />
                  <div className="absolute inset-2 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-purple-500 border-l-transparent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="w-10 h-10 text-[#f3d37a] animate-pulse" />
                  </div>
                </div>
                <h4 className="text-xl font-serif text-white tracking-wider mb-2">
                  Extrayendo tu pensamiento...
                </h4>
                <p className="text-sm text-slate-400">
                  Transfiriendo tu carta elegida a otra dimensión...
                </p>
              </motion.div>
            )}

            {step === 'revealed' && (
              <motion.div
                key="revealed-cards"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 justify-center max-w-2xl mx-auto">
                  {RESULT_CARDS.map((card) => (
                    <motion.div
                      key={card.id}
                      initial={{ rotateY: 180, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-32 md:w-36 h-48 md:h-52 rounded-xl p-3 flex flex-col justify-between bg-[#12121c] border border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                    >
                      <div className="text-left font-serif">
                        <div className="text-lg font-bold" style={{ color: card.color }}>
                          {card.name.charAt(0)}
                        </div>
                        <div className="text-sm" style={{ color: card.color }}>
                          {card.symbol}
                        </div>
                      </div>
                      <div className="text-4xl md:text-5xl self-center" style={{ color: card.color }}>
                        {card.symbol}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 truncate text-center font-mono">
                        {card.name}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 max-w-xl mx-auto text-center">
                  <p className="text-[#f3d37a] font-serif text-lg font-semibold">
                    ¿Tu carta ya NO está entre ellas, verdad?
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Esto es solo una pequeña muestra de la psicología y la magia que vivirás en vivo.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {step === 'choose' && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={startMindReading}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3d37a] to-[#d4af37] text-black font-semibold tracking-wide text-sm md:text-base shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all cursor-pointer"
            >
              <Wand2 className="w-5 h-5" />
              ¡Ya he elegido mi carta! Léeme la mente
            </motion.button>
          )}

          {step === 'revealed' && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={resetTrick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Repetir la experiencia
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4af37] hover:bg-[#f3d37a] text-black text-sm font-semibold transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Quiero esta magia en mi evento
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

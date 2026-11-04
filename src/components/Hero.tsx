import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Play } from 'lucide-react';
import { CONTACT_INFO } from '../data/magicData';
import { useTicketPicker } from './TicketPicker';

const STATS = [
  { value: '4.9★', label: '+1.030 opiniones' },
  { value: '+15', label: 'años en escena' },
  { value: '+16.000', label: 'espectadores' },
  { value: '25', label: 'plazas por función' },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export const Hero = () => {
  const { open: openTickets } = useTicketPicker();
  return (
    <section className="relative isolate overflow-hidden border-b border-zinc-800/80 bg-[#040406]">
      {/* Background photography */}
      <img
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1280,fit=crop/mxBXBX7KznSE6Zr6/sis-99-AzGNGLeKNXuxBb7L.jpg"
        alt="Pablo Costas actuando en directo"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[70%_30%] opacity-50"
        loading="eager"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#040406] via-[#040406]/80 to-[#040406]/10" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#040406] via-transparent to-[#040406]/60" />
      <div className="absolute inset-0 -z-10 bg-grain" />
      <div className="absolute -top-32 left-1/4 -z-10 h-[500px] w-[700px] rounded-full bg-antique-gold/10 blur-3xl" />

      {/* Floating suits */}
      <span className="hidden md:block absolute right-[8%] top-[14%] -z-10 font-serif text-[9rem] text-antique-gold/20 animate-drift" style={{ ['--r' as string]: '-12deg' }}>♠</span>
      <span className="hidden md:block absolute right-[26%] bottom-[22%] -z-10 font-serif text-[6rem] text-velvet-crimson/60 animate-drift" style={{ ['--r' as string]: '10deg', animationDelay: '1.5s' }}>♥</span>
      <span className="hidden md:block absolute right-[3%] bottom-[14%] -z-10 font-serif text-[7rem] text-antique-gold/15 animate-drift" style={{ ['--r' as string]: '8deg', animationDelay: '3s' }}>♦</span>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-14 sm:pb-20 min-h-[620px] sm:min-h-[760px] flex flex-col justify-center">
        <motion.div {...fade(0)} className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-antique-gold" />
          <span className="eyebrow">Ilusionismo profesional · Madrid</span>
        </motion.div>

        <motion.h1 {...fade(0.1)} className="heading-xl max-w-4xl">
          Lo imposible sucede a <span className="text-shine italic">centímetros</span> de tus ojos.
        </motion.h1>

        <motion.p {...fade(0.25)} className="body-text max-w-xl mt-7 sm:text-lg">
          Más de 15 años en los escenarios de toda España. Magia de cerca, mentalismo y pickpocket para empresas de prestigio, galas exclusivas y bodas de autor.
        </motion.p>

        <motion.div {...fade(0.4)} className="flex flex-col sm:flex-row sm:items-center gap-3 mt-9">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-antique-gold hover:bg-antique-light text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-[0_0_40px_-8px_rgba(203,168,110,0.7)]"
          >
            <span>Contratar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button type="button"
            onClick={openTickets}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-zinc-600 hover:border-antique-gold hover:text-antique-gold text-zinc-100 font-medium text-xs uppercase tracking-wider backdrop-blur transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Entradas Sala Houdini</span>
          </button>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-center text-zinc-400 hover:text-antique-gold underline underline-offset-4 transition-colors py-2 sm:px-3"
          >
            WhatsApp directo ↗
          </a>
        </motion.div>

        <motion.div {...fade(0.55)} className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-800/60 backdrop-blur max-w-3xl">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#07070a]/85 px-5 py-4">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-1.5">
                {s.value.includes('★') && <Star className="w-4 h-4 fill-antique-gold text-antique-gold" />}
                {s.value.replace('★', '')}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

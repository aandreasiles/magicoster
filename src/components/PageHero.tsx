import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PageHeroProps {
  crumb: string;
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  image: string;
  suit?: string;
}

export const PageHero = ({ crumb, eyebrow, title, accent, intro, image, suit = '♠' }: PageHeroProps) => (
  <section className="relative isolate overflow-hidden border-b border-zinc-800/80 min-h-[420px] sm:min-h-[520px] flex items-end mb-12 sm:mb-16">
    <img src={image} alt="" className="absolute inset-0 -z-20 w-full h-full object-cover scale-105 opacity-60" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#040406] via-[#040406]/70 to-[#040406]/30" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040406] via-[#040406]/60 to-transparent" />
    <div className="absolute inset-0 -z-10 bg-grain opacity-60" />
    <div className="absolute -right-6 sm:right-10 top-6 -z-10 font-serif text-[16rem] sm:text-[24rem] leading-none text-antique-gold/[0.07] select-none animate-drift">
      {suit}
    </div>

    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-20 pb-12 sm:pb-16">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-antique-gold font-semibold">{crumb}</span>
        </nav>
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-antique-gold" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="heading-xl max-w-3xl">
          {title} {accent && <span className="text-shine italic">{accent}</span>}
        </h1>
        <p className="body-text max-w-xl mt-6 sm:text-lg">{intro}</p>
      </motion.div>
    </div>
  </section>
);

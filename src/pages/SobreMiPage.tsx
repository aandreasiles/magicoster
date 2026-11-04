import { Link } from 'react-router-dom';
import { AboutMe } from '../components/AboutMe';
import { Testimonials } from '../components/Testimonials';

export const SobreMiPage = () => {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-antique-gold font-semibold">Sobre mí</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
          Trayectoria y Filosofía Artística
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Más de 15 años sobre los escenarios de España y Europa. Magia adulta, fresca y moderna.
        </p>
      </div>

      <AboutMe />
      <Testimonials />
    </div>
  );
};

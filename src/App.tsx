import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { InteractiveTrick } from './components/InteractiveTrick';
import { ShowHoudini } from './components/ShowHoudini';
import { Services } from './components/Services';
import { VideoGallery } from './components/VideoGallery';
import { PhotoGallery } from './components/PhotoGallery';
import { Testimonials } from './components/Testimonials';
import { AboutMe } from './components/AboutMe';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { MagicParticles } from './components/MagicParticles';

export function App() {
  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07070a] text-slate-100 relative selection:bg-[#d4af37]/30 selection:text-[#f3d37a]">
      {/* Background Floating Embers / Stardust */}
      <MagicParticles />

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        {/* 1. Hero with 3D Canvas Playing Card & Atmospheric Copy */}
        <Hero />

        {/* 2. Client Social Proof Marquee (Netflix, Rolex, Cartier, BMW, etc.) */}
        <ClientMarquee />

        {/* 3. Interactive Digital Mentalism Game ("Léeme la mente") */}
        <InteractiveTrick />

        {/* 4. Flagship Show: "El Rey de Trébol" en Sala Houdini Madrid */}
        <ShowHoudini />

        {/* 5. Services: Empresas & Galas, Bodas, Coctelerías & Specialized Magic */}
        <Services />

        {/* 6. Video Gallery: Live Reactions & Performances */}
        <VideoGallery />

        {/* 7. High-Resolution Photo Gallery */}
        <PhotoGallery />

        {/* 8. Testimonials & Famous Quotes (Jorge Fernández + 1.030 Spectators) */}
        <Testimonials />

        {/* 9. About Pablo Costas (Bio, Style, Bilingual, Houdini) */}
        <AboutMe />

        {/* 10. Booking & Contact Form + Direct Channels */}
        <BookingContact />
      </main>

      {/* 11. Luxurious Footer */}
      <Footer />
    </div>
  );
}

export default App;

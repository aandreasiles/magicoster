import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { ShowHoudini } from './components/ShowHoudini';
import { Services } from './components/Services';
import { VideoGallery } from './components/VideoGallery';
import { PhotoGallery } from './components/PhotoGallery';
import { Testimonials } from './components/Testimonials';
import { AboutMe } from './components/AboutMe';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Client Roster */}
        <ClientMarquee />

        {/* 3. Theatrical Feature: Sala Houdini */}
        <ShowHoudini />

        {/* 4. Services */}
        <Services />

        {/* 5. Live Videos */}
        <VideoGallery />

        {/* 6. Photography */}
        <PhotoGallery />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. About Pablo Costas */}
        <AboutMe />

        {/* 9. Contact & Booking */}
        <BookingContact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { InteractiveCardFan } from './components/InteractiveCardFan';
import { ShowHoudiniTicket } from './components/ShowHoudiniTicket';
import { VideoGallery } from './components/VideoGallery';
import { PhotoGallery } from './components/PhotoGallery';
import { Testimonials } from './components/Testimonials';
import { AboutMe } from './components/AboutMe';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#040406] text-zinc-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* 1. Theatrical Hero Marquee with Signature */}
        <Hero />

        {/* 2. Client Roster */}
        <ClientMarquee />

        {/* 3. The Interactive Playing Card Deck / Fan */}
        <InteractiveCardFan />

        {/* 4. The Perforated Theatrical Ticket for Sala Houdini */}
        <ShowHoudiniTicket />

        {/* 5. Live Performances Video Gallery */}
        <VideoGallery />

        {/* 6. Authentic Stage Photography */}
        <PhotoGallery />

        {/* 7. Celebrity & Verified Reviews */}
        <Testimonials />

        {/* 8. The Magician Bio */}
        <AboutMe />

        {/* 9. Booking Inquiry & Direct Channels */}
        <BookingContact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

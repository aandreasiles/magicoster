import { PageHero } from '../components/PageHero';
import { BookingContact } from '../components/BookingContact';

export const ContactoPage = () => {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero crumb="Contacto" eyebrow="Contacto" title="Hablemos" accent="de tu evento" intro="Cuéntame los detalles de tu evento y te responderé en un plazo máximo de 24 horas con disponibilidad y propuesta adaptada." image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1080,fit=crop/mxBXBX7KznSE6Zr6/sis-99-AzGNGLeKNXuxBb7L.jpg" suit="♦" />

      <BookingContact />
    </div>
  );
};

import { PageHero } from '../components/PageHero';
import { AboutMe } from '../components/AboutMe';
import { Testimonials } from '../components/Testimonials';

export const SobreMiPage = () => {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero crumb="Sobre mí" eyebrow="Pablo Costas" title="Trayectoria y" accent="filosofía artística" intro="Más de 15 años sobre los escenarios de España y Europa. Magia adulta, fresca y moderna." image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1080,fit=crop/mxBXBX7KznSE6Zr6/reaccion-mk3JLjvNkockLPlZ.jpg" suit="♠" />

      <AboutMe />
      <Testimonials />
    </div>
  );
};

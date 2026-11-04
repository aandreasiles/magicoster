import { PageHero } from '../components/PageHero';
import { VideoGallery } from '../components/VideoGallery';
import { PhotoGallery } from '../components/PhotoGallery';

export const GaleriaPage = () => {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero crumb="Vídeos & Fotos" eyebrow="Actuaciones reales" title="Vídeos y fotos" accent="de escena" intro="Actuaciones reales en Netflix España, Sala Houdini, celebraciones privadas, galas y cócteles." image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1080,fit=crop/mxBXBX7KznSE6Zr6/uli-1051-0255-AzGN0PE9VVcJrwO5.jpg" suit="♠" />

      <VideoGallery />
      <PhotoGallery />
    </div>
  );
};

import React from 'react';
import { CONTACT_INFO } from '../../constants';
import AnimatedSection from '../ui/AnimatedSection';
import PageHeader from '../ui/PageHeader';
import { Clock, MapPin } from 'lucide-react';

const LocationPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Lokasyonumuz"
        subtitle="İstanbul'un Maslak semtinde stratejik bir konumda yer alıyoruz. Yaratıcı profesyoneller için tasarlanmış modern stüdyo alanlarımızı keşfedin."
      />

      <div className="container mx-auto px-6 py-20">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-2xl border border-dark-700">
            <iframe
              src={CONTACT_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="PistStudios Location"
              className="grayscale invert-[0.9] contrast-[0.9]"
            ></iframe>
          </div>

          {/* Info */}
          <div className="bg-dark-800 p-8 rounded-lg border border-dark-700">
            <h2 className="text-3xl font-bold font-display flex items-center gap-3 uppercase">
              <MapPin className="w-8 h-8 text-brand-primary" />
              Bizi Ziyaret Edin
            </h2>
            <p className="mt-4 text-xl text-light-200">{CONTACT_INFO.address}</p>
            
            <div className="mt-8 pt-8 border-t border-dark-700">
                <h3 className="text-2xl font-bold font-display flex items-center gap-3 uppercase">
                    <Clock className="w-7 h-7 text-brand-primary" />
                    Çalışma Saatleri
                </h3>
                <ul className="mt-4 space-y-2 text-light-200 text-lg">
                    <li><span className="font-semibold w-28 inline-block">Pazartesi-Cuma:</span> 09:00 - 22:00</li>
                    <li><span className="font-semibold w-28 inline-block">Cumartesi:</span> 10:00 - 20:00</li>
                    <li><span className="font-semibold w-28 inline-block">Pazar:</span> 12:00 - 18:00</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                    Özel etkinlikler ve rezervasyonlar için saatler değişiklik gösterebilir.
                </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default LocationPage;
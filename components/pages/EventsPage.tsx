import React from 'react';
import { EVENTS } from '../../constants';
import AnimatedSection from '../ui/AnimatedSection';
import PageHeader from '../ui/PageHeader';
import { Event } from '../../types';

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const badgeColor = {
    'Workshop': 'bg-brand-secondary/80 text-white',
    'Public': 'bg-brand-primary/80 text-dark-900',
    'Private': 'bg-dark-700 border border-light-200/50 text-light-200',
    'Atölye': 'bg-brand-secondary/80 text-white',
    'Halka Açık': 'bg-brand-primary/80 text-dark-900',
    'Özel': 'bg-dark-700 border border-light-200/50 text-light-200'
  }
  return (
    <div className="bg-dark-800 rounded-lg overflow-hidden shadow-lg border border-dark-700 hover:border-brand-primary group transition-all duration-300">
      <div className="relative">
        <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />
        <div className={`absolute top-4 right-4 px-3 py-1 text-sm font-bold rounded-full ${badgeColor[event.type]}`}>
          {event.type}
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-400">{event.date}</p>
        <h3 className="mt-2 text-2xl font-bold font-display uppercase text-light-100 group-hover:text-brand-primary transition-colors">{event.title}</h3>
        <p className="mt-3 text-light-200">{event.description}</p>
      </div>
    </div>
  );
};

const EventsPage: React.FC = () => {
  const upcomingEvents = EVENTS.filter(e => e.status === 'Upcoming');
  const pastEvents = EVENTS.filter(e => e.status === 'Past');

  return (
    <div>
      <PageHeader 
        title="Etkinlikler & Atölyeler"
        subtitle="PİST Stüdyo'da topluluğumuza katılın. DJ partileri, networking geceleri, akustik performanslar ve yaratıcı atölyelerle her zaman bir şeyler oluyor."
      />

      <div className="container mx-auto px-6 py-20 space-y-20">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12 uppercase tracking-wider">Yaklaşan Etkinlikler</h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          ) : (
            <p className="text-center text-light-200">Şu anda planlanmış etkinlik bulunmamaktadır. Yakında tekrar kontrol edin!</p>
          )}
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12 uppercase tracking-wider">Geçmiş Etkinlikler</h2>
           {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          ) : (
            <p className="text-center text-light-200">Gösterilecek geçmiş etkinlik bulunmamaktadır.</p>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
};

export default EventsPage;
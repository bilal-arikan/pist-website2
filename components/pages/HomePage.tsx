import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { SERVICES, EVENTS } from '../../constants';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
    const upcomingEvents = EVENTS.filter(e => e.status === 'Upcoming').slice(0, 2);

    return (
        <div className="space-y-24 md:space-y-32 pb-24">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white -mt-20">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://picsum.photos/seed/pist-vibe/1920/1080')` }}></div>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 p-6">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-black font-display uppercase tracking-widest"
                        style={{ textShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff' }}
                    >
                        Projelerin ve hayallerin yükselişe geçmesi için buradayız
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-lg md:text-2xl font-light max-w-3xl mx-auto text-light-200"
                    >
                        Her başarılı yolculuk, sağlam bir PİST'te başlar. İstanbul'da yaratıcı profesyoneller için tasarlanmış, modern ve donanımlı stüdyo ve topluluk merkezi.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link 
                            to="/contact" 
                            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-dark-900 font-bold rounded-full shadow-lg hover:bg-white hover:shadow-[0_0_20px_theme(colors.brand-primary)] transition-all duration-300 transform"
                        >
                            Başvur <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <AnimatedSection className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-display uppercase tracking-wider">Sunulan Hizmetler</h2>
                <p className="mt-4 max-w-2xl mx-auto text-light-200">
                    Müzik yapımcıları, DJ'ler, podcaster'lar, fotoğrafçılar ve video yapımcıları için özel olarak tasarlanmış profesyonel stüdyo alanları sunuyoruz.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.slice(0, 3).map((service, index) => (
                         <motion.div
                            key={index}
                            className="bg-dark-800 p-8 rounded-lg text-center border border-dark-700 hover:border-brand-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                         >
                            <div className="inline-block p-4 bg-dark-700 rounded-full">
                                <service.icon className="w-8 h-8 text-brand-primary" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold font-display uppercase">{service.title}</h3>
                            <p className="mt-2 text-gray-400">{service.description.substring(0, 100)}...</p>
                        </motion.div>
                    ))}
                </div>
                <Link to="/services" className="mt-12 inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-white transition-colors duration-300">
                    Tüm Hizmetleri Keşfet <ArrowRight size={18} />
                </Link>
            </AnimatedSection>
            
            {/* Upcoming Events Section */}
            {upcomingEvents.length > 0 && (
                <AnimatedSection className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-center uppercase tracking-wider">Yaklaşan Etkinlikler</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {upcomingEvents.map(event => (
                            <div key={event.id} className="bg-dark-800 rounded-lg overflow-hidden group border border-dark-700 hover:border-brand-primary transition-all duration-300">
                                <img src={event.imageUrl} alt={event.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"/>
                                <div className="p-6">
                                    <p className="text-sm text-brand-primary font-semibold">{event.date}</p>
                                    <h3 className="mt-2 text-2xl font-bold font-display uppercase">{event.title}</h3>
                                    <p className="mt-2 text-gray-400">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center">
                        <Link to="/events" className="mt-12 inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-white transition-colors duration-300">
                           Tüm Etkinlikleri Görüntüle <ArrowRight size={18} />
                        </Link>
                    </div>
                </AnimatedSection>
            )}

            {/* CTA Section */}
            <AnimatedSection className="container mx-auto px-6">
                <div className="relative rounded-lg overflow-hidden p-12 text-center bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/cta-dark/1200/400')` }}>
                    <div className="absolute inset-0 bg-dark-900/80"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white uppercase tracking-wider">Yaratıcı Yolculuğunuza Başlamaya Hazır mısınız?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-light-200">
                           Stüdyomuz sizi bekliyor. Projelerinizi hayata geçirmek için bizimle iletişime geçin.
                        </p>
                        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-dark-900 font-bold rounded-full shadow-lg hover:bg-white hover:shadow-[0_0_20px_theme(colors.brand-primary)] transition-all duration-300 transform">
                           Şimdi İletişime Geçin
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

        </div>
    );
};

export default HomePage;
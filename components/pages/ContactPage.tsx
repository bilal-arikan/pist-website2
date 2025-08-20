import React, { useState } from 'react';
import { CONTACT_INFO } from '../../constants';
import AnimatedSection from '../ui/AnimatedSection';
import PageHeader from '../ui/PageHeader';
import { Mail, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('submitted');
            // Here you would typically handle form submission
        }, 1500);
    };

    return (
        <div>
            <PageHeader
                title="İletişime Geçin"
                subtitle="Bir sorunuz veya aklınızda bir proje mi var? Sizden haber almaktan mutluluk duyarız. Bize ulaşın ve birlikte yaratmaya başlayalım."
            />
            <div className="container mx-auto px-6 py-20">
                <AnimatedSection className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-dark-800 p-8 rounded-lg shadow-xl border border-dark-700">
                        <h2 className="text-3xl font-bold font-display mb-6 uppercase">Bize Mesaj Gönderin</h2>
                        {status === 'submitted' ? (
                             <div className="text-center bg-green-900/50 border border-green-500 text-green-300 p-8 rounded-lg h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold">Teşekkürler!</h3>
                                <p className="mt-2">Mesajınız gönderildi. En kısa sürede size geri döneceğiz.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-light-200 uppercase tracking-wider">Ad Soyad</label>
                                    <input type="text" name="name" id="name" required className="mt-1 block w-full bg-dark-700 border-dark-700 rounded-md shadow-sm py-3 px-4 text-light-100 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-light-200 uppercase tracking-wider">E-posta Adresi</label>
                                    <input type="email" name="email" id="email" required className="mt-1 block w-full bg-dark-700 border-dark-700 rounded-md shadow-sm py-3 px-4 text-light-100 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-light-200 uppercase tracking-wider">Mesaj</label>
                                    <textarea id="message" name="message" rows={5} required className="mt-1 block w-full bg-dark-700 border-dark-700 rounded-md shadow-sm py-3 px-4 text-light-100 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary text-dark-900 font-bold rounded-full shadow-lg hover:bg-white hover:shadow-[0_0_20px_theme(colors.brand-primary)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send size={20} />
                                        {status === 'submitting' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="bg-dark-800 p-8 rounded-lg shadow-xl border border-dark-700">
                            <h3 className="text-2xl font-bold font-display flex items-center gap-3 uppercase">
                                <Mail className="w-7 h-7 text-brand-primary"/>
                                E-posta
                            </h3>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="mt-2 text-lg text-brand-secondary hover:underline break-all">
                                {CONTACT_INFO.email}
                            </a>
                        </div>
                        <div className="bg-dark-800 p-8 rounded-lg shadow-xl border border-dark-700">
                            <h3 className="text-2xl font-bold font-display flex items-center gap-3 uppercase">
                                <Phone className="w-7 h-7 text-brand-primary"/>
                                Telefon
                            </h3>
                            <a href={`tel:${CONTACT_INFO.phone}`} className="mt-2 text-lg text-brand-secondary hover:underline">
                                {CONTACT_INFO.phone}
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ContactPage;
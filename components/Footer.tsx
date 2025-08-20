import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, NAV_LINKS, CONTACT_INFO } from '../constants';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 text-light-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-bold font-display text-light-100 hover:text-brand-primary transition-colors tracking-widest">
                PIST
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Your creative space for sound and vision.
            </p>
            <div className="flex space-x-4 mt-6">
              {SOCIAL_LINKS.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors">
                  <social.icon size={24} />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-light-100 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-brand-primary transition-colors uppercase tracking-wider text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-light-100 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                  <MapPin className="mt-1 flex-shrink-0 h-5 w-5 text-brand-primary" />
                  <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                  <Mail className="mt-1 flex-shrink-0 h-5 w-5 text-brand-primary" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-primary break-all">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-start gap-3">
                  <Phone className="mt-1 flex-shrink-0 h-5 w-5 text-brand-primary" />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-primary">{CONTACT_INFO.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PistStudios.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
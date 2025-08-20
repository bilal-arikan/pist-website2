import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkClass = 'text-brand-primary';
  const inactiveLinkClass = 'hover:text-brand-primary transition-colors duration-300';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-display text-light-100 hover:text-brand-primary transition-colors tracking-widest">
          PIST
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-semibold uppercase tracking-wider`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-light-100 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center gap-6 py-8 bg-dark-800">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} text-xl font-semibold uppercase tracking-wider`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import EventsPage from './components/pages/EventsPage';
import LocationPage from './components/pages/LocationPage';
import ContactPage from './components/pages/ContactPage';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

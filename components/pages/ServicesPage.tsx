import React from 'react';
import { SERVICES } from '../../constants';
import AnimatedSection from '../ui/AnimatedSection';
import PageHeader from '../ui/PageHeader';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Hizmetlerimiz"
        subtitle="Ses ve içeriğinizi yükseltmek için tasarlanmış eksiksiz bir yaratıcı hizmetler paketi. Mekanı, ekipmanı ve uzmanlığı biz sağlıyoruz."
      />

      <AnimatedSection className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-dark-800 p-8 rounded-lg flex flex-col items-center text-center border border-dark-700 hover:border-brand-primary hover:shadow-[0_0_20px_theme(colors.brand-primary/50%)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-4 bg-dark-700 rounded-full">
                <service.icon className="w-10 h-10 text-brand-primary" />
              </div>
              <h3 className="mt-6 text-2xl font-bold font-display uppercase">{service.title}</h3>
              <p className="mt-4 text-light-200 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;
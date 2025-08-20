import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-dark-800 py-24 text-center relative overflow-hidden">
       <div 
        className="absolute inset-0 bg-repeat opacity-5"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      ></div>
      <div className="container mx-auto px-6 relative">
        <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
          {title}
        </h1>
        <p className="mt-4 text-lg text-light-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
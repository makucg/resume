'use client';

import Navbar from '@/components/Navbar';
import { PanelWrapper } from '@/components/PanelWrapper';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>('home');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleSectionClick = (id: string) => {
    setActiveSection(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    const updateScreenSizes = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 768);
    };

    updateScreenSizes(); // Run on mount
    window.addEventListener('resize', updateScreenSizes);

    return () => window.removeEventListener('resize', updateScreenSizes); // Clean up listener
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Navbar para escritorio */}
      <Navbar activeSection={activeSection} onNavigate={handleSectionClick} />

      {/* ScrollIndicator para móvil */}
      <ScrollIndicator activeSection={activeSection} onNavigate={handleSectionClick} />

      {/* Secciones */}
      <div
        className="relative overflow-auto 2xl:overflow-hidden"
        style={{
          width: '100%',
          height: `calc(100% - ${!isMobile ? '0px' : '70px'})`, // Adjust height for ScrollIndicator
          paddingRight: !isTablet ? '0' : '64px', // Adjust width for Navbar
        }}
      >
        <PanelWrapper activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Home;

'use client';

import { siteConfig } from '@/config/site';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Home');

  const handleClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-4 sm:flex">
      {Object.keys(siteConfig.sections).map((sectionKey) => {
        const { icon: Icon, title } = siteConfig.sections[sectionKey as keyof typeof siteConfig.sections];

        return (
          <button
            type="button"
            key={sectionKey}
            title={title}
            onClick={() => handleClick(sectionKey)}
            className={`flex size-12 items-center justify-center rounded-full ${
              activeSection === sectionKey ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;

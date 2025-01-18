'use client';

import { siteConfig } from '@/config/site';
import { useState } from 'react';

const ScrollIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Home');

  const handleClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-around py-4 text-white sm:hidden">
      {Object.keys(siteConfig.sections).map((sectionKey) => {
        const { icon: Icon, title } = siteConfig.sections[sectionKey as keyof typeof siteConfig.sections];

        return (
          <button
            type="button"
            key={sectionKey}
            title={title}
            onClick={() => handleClick(sectionKey)}
            className={`rounded px-4 py-2 ${
              activeSection === sectionKey ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </div>
  );
};

export default ScrollIndicator;

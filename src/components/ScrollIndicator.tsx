'use client';

import { useState } from 'react';

const SECTIONS = ['Home', 'Profile', 'Experience', 'Students', 'Skills', 'Projects'];

const ScrollIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Home');

  const handleClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-around bg-gray-800 py-4 text-white sm:hidden">
      {SECTIONS.map(section => (
        <button
          type="button"
          key={section}
          onClick={() => handleClick(section)}
          className={`rounded px-4 py-2 ${
            activeSection === section ? 'bg-blue-500' : 'bg-gray-600'
          }`}
        >
          {section[0]}
          {' '}
          {/* Placeholder for icons */}
        </button>
      ))}
    </div>
  );
};

export default ScrollIndicator;

'use client';

import { useState } from 'react';

const SECTIONS = ['Home', 'Profile', 'Experience', 'Students', 'Skills', 'Projects'];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Home');

  const handleClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-4 sm:flex">
      {SECTIONS.map(section => (
        <button
          type="button"
          key={section}
          onClick={() => handleClick(section)}
          className={`flex size-12 items-center justify-center rounded-full ${
            activeSection === section ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {section[0]}
          {' '}
          {/* Placeholder for icons */}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;

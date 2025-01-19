import { siteConfig } from '@/config/site';
import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="Projects" className="grid min-h-screen place-items-center">
      <div className="container relative mx-auto flex max-w-4xl place-items-center justify-center rounded-lg bg-white px-6 py-12 opacity-75 shadow-2xl md:px-20 md:py-16">
        <div className="space-y-6 border-l-2 border-dashed">
          {siteConfig.experiences.map((experience, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 size-7 rounded-full text-green-700">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-green-700">{experience.title}</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                  {experience.description}
                </p>
                <ul className="mt-2 max-w-screen-sm list-inside list-disc text-sm text-gray-500">
                  {experience.details.map((detail, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <span className="mt-1 block text-sm font-semibold text-green-700">
                  {experience.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

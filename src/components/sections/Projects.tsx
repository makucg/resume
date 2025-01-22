import { siteConfig } from '@/config/site';
import React from 'react';

const colors = ['bg-indigo-500', 'bg-purple-500', 'bg-blue-400', 'bg-yellow-400', 'bg-green-500'];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="Projects"
      className="grid h-screen place-items-center overflow-y-auto pb-8"
      style={{ scrollbarGutter: 'stable' }}
    >
      <div className="container relative mx-auto mt-5 flex max-w-6xl flex-col px-5 xl:px-0">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-100">Projects</h2>
        <p className="mb-8 text-lg text-gray-300">Here are a few of the awesome projects we provide.</p>
        <div className="flex flex-col space-y-8">
          {siteConfig.projects.map((project, index) => (
            <div
              key={project.title}
              className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <span className={`${index % 2 === 0 ? 'left-0 top-0 ml-1 mt-1' : 'bottom-0 right-0 mb-1 mr-1'}
                absolute size-full w-3/4 rounded-lg ${colors[index % colors.length]}`}
              >
              </span>
              <div
                className={`relative h-full w-3/4 rounded-lg border-2 bg-white p-5 opacity-75 ${
                  index % 2 !== 0 ? 'text-right' : ''
                }`}
              >
                <div className={`${index % 2 !== 0 ? 'text-right' : ''}`}>
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">{project.title}</h3>
                </div>
                <p className={`mb-2 text-gray-600 ${index % 2 !== 0 ? 'text-right' : ''}`}>
                  {project.description}
                </p>
                <div
                  className={`my-3 flex flex-wrap items-center gap-2 ${
                    index % 2 !== 0 ? 'justify-end' : ''
                  }`}
                >
                  {project.technologies
                  && project.technologies.map(tech => (
                    <div key={tech.name} className="flex items-center gap-2">
                      {tech.icon && <tech.icon size={16} />}
                      <span className="text-sm text-gray-800">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <p
                  className={`mt-2 text-sm font-semibold ${
                    index % 2 !== 0 ? 'text-right text-gray-700' : 'text-gray-700'
                  }`}
                >
                  Status:
                  {' '}
                  <span className="text-green-700">{project.status}</span>
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-block text-indigo-500 hover:underline ${
                      index % 2 !== 0 ? 'text-right' : ''
                    }`}
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

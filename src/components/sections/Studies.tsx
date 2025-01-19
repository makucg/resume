import { siteConfig } from '@/config/site';

const StudiesSection: React.FC = () => {
  return (
    <section id="Studies" className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <div className="row-start-2 flex flex-col items-center justify-center gap-4">
        <div className="rounded-md bg-black/50 p-4 ">
          <h1 className="pb-4 text-center text-4xl font-bold text-white">Education</h1>
          <div className="space-y-4">
            {siteConfig.education.map((study, _index) => (
              <div key={study.title} className="relative w-full">
                <div className="ml-6">
                  <h4 className="font-bold text-white">{study.title}</h4>
                  <div className="mt-2 flex items-center space-x-1 text-sm">
                    <span className="text-gray-500">{study.school}</span>
                    <span className="text-gray-500">|</span>
                    <span className="font-semibold text-green-700">{study.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudiesSection;

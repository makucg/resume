import { CSSIcon, HTML5Icon, JavaIcon, JavaScriptIcon, PythonIcon, SpringBootIcon, TailwindIcon, TypeScriptIcon } from '@/components/icons/icons';

const SkillsSection: React.FC = () => {
  return (
    <section id="Skills" className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <div className="row-start-2 mx-auto flex w-4/5 flex-col justify-center gap-4 text-gray-100 sm:w-4/5 md:w-3/5 lg:w-2/5">
        <h1 className="text-center text-4xl font-bold">Skills</h1>
        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <div className="flex items-center gap-2">
              <JavaIcon size={24} />
              <span>Java</span>
            </div>
            <span>95%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-[95%] rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <div className="flex items-center gap-2">
              <SpringBootIcon size={24} />
              <span>Spring Boot</span>
            </div>
            <span>80%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-4/5 rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <div className="flex items-center gap-2">
              <JavaScriptIcon size={24} />
              <span>JavaScript</span>
            </div>
            <span>60%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-3/5 rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <div className="flex items-center gap-2">
              <TypeScriptIcon size={24} />
              <span>TypeScript</span>
            </div>
            <span>50%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-2/4 rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <HTML5Icon size={24} />
                <span>HTML</span>
              </div>
              <div className="flex items-center gap-1">
                <CSSIcon size={24} />
                <span>CSS</span>
              </div>
              <div className="flex items-center gap-1">
                <TailwindIcon size={24} />
                <span>Tailwind</span>
              </div>
            </div>
            <span>40%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-2/5 rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <div className="flex items-center gap-2">
              <PythonIcon size={24} />
              <span>Python</span>
            </div>
            <span>20%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-1/5 rounded-full bg-green-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

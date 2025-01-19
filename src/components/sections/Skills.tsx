const SkillsSection: React.FC = () => {
  return (
    <section id="Skills" className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <div className="row-start-2 mx-auto flex w-4/5 flex-col justify-center gap-4 text-gray-100 sm:w-4/5 md:w-3/5 lg:w-2/5">
        <h1 className="text-center text-4xl font-bold">Skills</h1>
        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <span>Java</span>
            <span>95%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-[95%] rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <span>Spring Boot</span>
            <span>80%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-4/5 rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <span>JavaScript</span>
            <span>60%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-3/5 rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <span>TypeScript</span>
            <span>50%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-2/4 rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <span>HTML/CSS/Tailwind</span>
            <span>40%</span>
          </div>
          <div className="w-full rounded-full bg-gray-300">
            <div className="h-2 w-2/5 rounded-full bg-green-700"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between font-semibold">
            <span>Python</span>
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

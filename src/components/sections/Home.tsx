const HomeSection: React.FC = () => {
  return (
    <section id="Home" className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <div className="row-start-2 flex flex-col items-center justify-center gap-4">
        <div className="rounded-md bg-black/50 p-4">
          <div className="mx-auto flex h-full w-4/5 items-center justify-between">
            <div className="flex size-full flex-col justify-center gap-2 text-white sm:w-[70%] md:w-3/5 xl:w-1/2">
              <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">Hi there, I am</h1>
              <h1 className="bg-text text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">Diego MN!</h1>
              <p className="my-2 text-lg sm:text-xl lg:my-6 lg:text-3xl">Developer | Passionate about coding and solving complex problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

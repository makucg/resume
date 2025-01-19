const HomeSection: React.FC = () => {
  return (
    <section id="Home" className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <div className="row-start-2 flex flex-col items-center justify-center gap-4">
        <div className="rounded-md bg-black/50 p-4">
          <h1 className="text-center text-4xl font-bold text-white">
            Welcome to my personal website
          </h1>
          <p className="text-center text-lg text-white">
            Developer | Passionate about coding and solving complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

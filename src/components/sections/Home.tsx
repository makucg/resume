'use client';

import { useEffect, useState } from 'react';

const HomeSection: React.FC = () => {
  const [heading1, setHeading1] = useState<string>('');
  const [heading2, setHeading2] = useState<string>('');
  const [paragraph, setParagraph] = useState<string>('');

  useEffect(() => {
    const texts = {
      heading1: 'Hi there, I am',
      heading2: 'Diego MN!',
      paragraph: 'Developer | Passionate about coding and solving complex problems.',
    };

    let currentText = '';
    let currentIndex = 0;

    const typeEffect = (
      text: string,
      setText: React.Dispatch<React.SetStateAction<string>>,
      next?: () => void,
    ) => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex];
          setText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
          if (next) {
            next();
          }
        }
      }, 50);
    };

    typeEffect(texts.heading1, setHeading1, () => {
      currentIndex = 0;
      currentText = '';
      typeEffect(texts.heading2, setHeading2, () => {
        currentIndex = 0;
        currentText = '';
        typeEffect(texts.paragraph, setParagraph);
      });
    });
  }, []);

  return (
    <section id="Home" className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <div className="row-start-2 flex flex-col items-center justify-center gap-4">
        <div className="rounded-md bg-black/50 p-4">
          <div className="mx-auto flex h-full w-4/5 items-center justify-between">
            <div className="flex size-full flex-col justify-center gap-2 text-white">
              <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">{heading1}</h1>
              <h1 className="bg-text text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">{heading2}</h1>
              <p className="my-2 text-lg sm:text-xl lg:my-6 lg:text-3xl">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

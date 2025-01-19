import { siteConfig } from '@/config/site';
import { Transition } from '@headlessui/react';

export const PanelWrapper = ({ activeSection }: { activeSection: string | null }) => {
  return (
    <div className="relative grow">
      {Object.entries(siteConfig.sections).map(([sectionKey, section]) => (
        <Transition
          key={sectionKey}
          show={activeSection === sectionKey}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 size-full p-4">
            <section.section />
          </div>
        </Transition>
      ))}
    </div>
  );
};

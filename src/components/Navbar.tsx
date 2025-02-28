import { siteConfig } from '@/config/site';
import TrackedButton from './TrackedButton';

const Navbar: React.FC<{
  activeSection: string | null;
  onNavigate: (sectionKey: string) => void;
}> = ({ activeSection, onNavigate }) => {
  return (
    <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 sm:flex">
      {Object.keys(siteConfig.sections).map((sectionKey) => {
        const { icon: Icon, title }
          = siteConfig.sections[sectionKey as keyof typeof siteConfig.sections];

        return (
          <TrackedButton
            eventName={sectionKey}
            eventProperties={{ sectionKey }}
            key={sectionKey}
            title={title}
            onClick={() => onNavigate(sectionKey)}
            className={`flex size-12 items-center justify-center rounded-full opacity-50 ${
              activeSection === sectionKey ? 'bg-green-700 text-white' : 'bg-gray-200'
            }`}
          >
            <Icon size={24} />
          </TrackedButton>
        );
      })}
    </nav>
  );
};

export default Navbar;

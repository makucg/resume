import { siteConfig } from '@/config/site';
import TrackedButton from './TrackedButton';

const ScrollIndicator: React.FC<{
  activeSection: string | null;
  onNavigate: (sectionKey: string) => void;
}> = ({ activeSection, onNavigate }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-around py-4 text-white sm:hidden">
      {Object.keys(siteConfig.sections).map((sectionKey) => {
        const { icon: Icon, title } = siteConfig.sections[sectionKey as keyof typeof siteConfig.sections];

        return (
          <TrackedButton
            eventName={sectionKey}
            eventProperties={{ sectionKey }}
            key={sectionKey}
            title={title}
            onClick={() => onNavigate(sectionKey)}
            className={`rounded px-4 py-2 opacity-50 ${
              activeSection === sectionKey ? 'bg-green-700' : 'bg-gray-600'
            }`}
          >
            <Icon size={24} />
          </TrackedButton>
        );
      })}
    </div>
  );
};

export default ScrollIndicator;

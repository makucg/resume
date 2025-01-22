'use client';

import type { ReactNode } from 'react';
import type { AmplitudeContextType } from './AmplitudeContext';
import { init, track } from '@amplitude/analytics-browser';
import { useEffect } from 'react';
import { AmplitudeContext } from './AmplitudeContext';

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY as string;

type AmplitudeContextProviderProps = {
  children: ReactNode;
};

const AmplitudeContextProvider: React.FC<AmplitudeContextProviderProps> = ({ children }) => {
  useEffect(() => {
    if (AMPLITUDE_API_KEY) {
      init(AMPLITUDE_API_KEY, undefined, {
        defaultTracking: {
          sessions: true,
        },
      });
    } else {
      console.warn('Amplitude API key is missing. Events will not be tracked.');
    }
  }, []);

  const trackAmplitudeEvent: AmplitudeContextType['trackAmplitudeEvent'] = (eventName, eventProperties) => {
    track(eventName, eventProperties);
  };

  return (
    <AmplitudeContext value={{ trackAmplitudeEvent }}>
      {children}
    </AmplitudeContext>
  );
};

export default AmplitudeContextProvider;

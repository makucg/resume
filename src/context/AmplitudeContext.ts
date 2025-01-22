import { createContext } from 'react';

export type AmplitudeContextType = {
  trackAmplitudeEvent: (eventName: string, eventProperties?: Record<string, any>) => void;
};

export const AmplitudeContext = createContext<AmplitudeContextType | undefined>(undefined);

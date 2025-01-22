import { useContext } from 'react';
import { AmplitudeContext } from '../context/AmplitudeContext';

export const useAmplitude = () => {
  const context = useContext(AmplitudeContext);

  if (!context) {
    throw new Error('useAmplitude must be used within an AmplitudeContextProvider');
  }

  return context;
};

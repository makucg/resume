'use client';

import { useAmplitude } from '@/hooks/useAmplitude';
import { Button } from '@headlessui/react';
import React from 'react';

type TrackedButtonProps = {
  eventName: string;
  eventProperties?: Record<string, any>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const defaultEventProperties = {};

const TrackedButton: React.FC<TrackedButtonProps> = ({
  eventName,
  eventProperties = defaultEventProperties,
  onClick,
  children,
  ...buttonProps
}) => {
  const { trackAmplitudeEvent } = useAmplitude();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Track the event with Amplitude
    trackAmplitudeEvent(eventName, eventProperties);

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button type="button" {...buttonProps} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default TrackedButton;

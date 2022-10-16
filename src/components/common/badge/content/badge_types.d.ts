import React from 'react';

export type BadgeProps = {
  children: React.ReactNode;
  count?: number;
  onClick?: () => void;
};

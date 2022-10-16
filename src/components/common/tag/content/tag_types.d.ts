import React from 'react';

export type TagProps = {
  variant?: 'filled' | 'outlined';
  children?: React.ReactNode | string;
  style?: React.CSSProperties;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
};

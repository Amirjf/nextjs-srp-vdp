import React, { CSSProperties } from 'react';

export type IconBoxProps = {
  title: string;
  icon: React.ReactNode;
  grow?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
  orientation?: CSSProperties['flexDirection'];
};

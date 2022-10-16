import { CSSProperties } from 'react';

export type DividerProps = {
  children?: React.ReactNode;
  middle?: boolean;
  color?: string;
  align?: 'center' | 'left' | 'right';
  orientation?: 'center' | 'left' | 'right';
  style?: CSSProperties;
};

export type TextOrientationType = {
  center: { before: { width: string }; after: { width: string } };
  left: { before: { width: string }; after: { width: string } };
  right: { before: { width: string }; after: { width: string } };
};

export type handleAlignType = {
  center: {
    justifyContent: string;
  };
  left: {
    justifyContent: string;
  };
  right: {
    justifyContent: string;
  };
  [key: string]: any;
};

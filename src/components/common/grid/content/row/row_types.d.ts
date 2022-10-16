import React from 'react';

type RowProps = {
  children: React.ReactNode;
  spacing?: Spacing | number;
  style?: React.CSSProperties;
  display?: 'flex';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
};
type Spacing = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};
export type RowStyleProps = {
  display?: 'flex';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  spacing?: number | Spacing;
};

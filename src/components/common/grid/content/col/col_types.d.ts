import React from 'react';
import { Spacing } from '../row/row_types';

export interface ColProps {
  children?: React.ReactNode;
  span?: number;
  spacing?: any;
  style?: React.CSSProperties;
  display?: 'flex';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  xs?: any;
  md?: any;
  sm?: any;
  lg?: any;
  xl?: any;
  xxl?: any;
}

import { CSSProperties, ReactNode } from 'react';
import { ColorsType } from 'src/global/theme_types';

export type TypographyProps = {
  children?: ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'body1'
    | 'subtitle1'
    | 'subtitle2';
  color?: ColorsType | string;
  style?: CSSProperties;
  disabled?: boolean;
  copyable?: boolean;
  underline?: boolean;
  strong?: boolean;
  italic?: boolean;
  onClick?: React.MouseEventHandler;
};
export type StyledTypographyProps = {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'body1'
    | 'subtitle1'
    | 'subtitle2';
  color?: ColorsType | string;
  disabled?: boolean;
  underline?: boolean;
  italic?: boolean;
  strong?: boolean;
};

export type VariantsType = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  subtitle1: string;
  subtitle2: string;
  body1: string;
};

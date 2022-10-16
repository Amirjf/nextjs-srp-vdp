import { CSSProperties, ThemeProps } from 'styled-components';

type ScreenSize = { sm: SizeElems; md: SizeElems; lg: SizeElems };
type SizeElems = {
  height: number;
  paddingInline: number;
};
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outlined' | 'filled' | 'text';
  disabled?: boolean;
  block?: boolean;
  href?: string;
  scale?: any;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  style?: CSSProperties;
  shape?: 'sharp' | 'circle';
  align?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
}

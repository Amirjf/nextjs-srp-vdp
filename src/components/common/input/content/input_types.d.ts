import { CSSProperties } from 'react';
import { ThemeProps } from 'styled-components';

export interface InputContainerProps {
  hasAddon?: string;
  disabled?: boolean;
}

export interface InputAddonProps {
  scale?: string;
}
export interface InputLabelProps {
  htmlFor?: string;
  color?: string;
  isInvalid?: any;
  isRequired?: boolean;
}

export interface InputProps {
  type?: string;
  register?: any;
  ref?: any;
  isInvalid?: any;
  icon?: React.ReactNode;
  label?: string;
  placeholder?: string;
  scale?: 'sm' | 'md' | 'lg' | 'xs' | undefined | null | NaN;
  variant?: 'outlined' | 'filled' | 'borderless';
  rounded?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler;
  value?: string | number | any;
  defaultValue?: string | number;
  disabled?: boolean;
  color?: string;
  prefix?: string;
  decimalsLimit?: number;
  currencyInput?: boolean;
  onValueChange?: (value, name) => void;
  maxLength?: number;
  onClick?: () => void;
  style?: CSSProperties;
  required?: boolean;
  errors?: any;
  rules?: any;
}
export interface StyledInputProps extends InputProps {
  theme?: ThemeProps;
  ref?: any;
  isInvalid?: boolean;
}

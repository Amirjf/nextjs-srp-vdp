import React from 'react';

export type ColorSelectTypes = {
  value?: string | number;
  icon?: string | React.ReactNode;
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler;
  color?: string;
  checked?: boolean;
  loading?: boolean;
  count?: string | number;
};
export type CheckedColorIconContainerProps = {
  isChecked?: boolean;
};

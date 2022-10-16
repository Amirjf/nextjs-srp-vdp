import React from 'react';

export type CheckboxProps = {
  label?: any;
  value?: string | number | string[];
  checked?: any;
  name?: string | string[];
  id?: any;
  count?: string | string[];
  onChange?: React.ChangeEventHandler;
  disabled?: boolean;
  loading?: boolean;
};

export type LabelProps = {
  checked?: boolean;
};

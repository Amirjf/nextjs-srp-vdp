import React from 'react';

export type CarBodySelectType = {
  value?: string | number;
  icon?: strin;
  label?: string;
  name?: string;
  id?: string;
  onChange?: React.ChangeEventHandler;
  checked?: boolean;
  loading?: boolean;
  count?: number | string;
};

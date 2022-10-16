import React from 'react';
import Select from 'react-select';

import { StylesConfig } from 'react-select';
import { useTheme } from 'styled-components';

const CustomSelect: React.FC<any> = (props: any) => {
  const { sizes } = useTheme();

  const selectStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      ...sizes[props.size],
      padding: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'var(--mainColor)' : 'white',
      color: state.isSelected ? 'white' : 'black',
      [':hover']: {
        background: 'var(--mainColor)',
        color: '#fff',
      },
    }),
  };
  return (
    <>
      {props.label && (
        <label style={{ display: 'block', paddingBottom: 5 }}>
          {props.label}
        </label>
      )}
      <Select {...props} styles={selectStyles} />
    </>
  );
};

CustomSelect.defaultProps = {
  size: 'md',
};

export default CustomSelect;

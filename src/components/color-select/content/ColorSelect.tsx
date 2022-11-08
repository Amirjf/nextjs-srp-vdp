import React from 'react';
import { MdDone } from 'react-icons/md';
import useFilters from '../../../hooks/useFilters';
import {
  ColorLabel,
  ColorCheckbox,
  ColorContainer,
  CheckedColorIconContainer,
  CountContainer,
  ColorNameContainer,
} from '../styles/colorSelect.styles';
import { ColorSelectTypes } from './colorSelect_types';

const ColorSelect: React.FC<ColorSelectTypes> = ({
  name,
  label,
  onChange,
  color,
  count,
  ...props
}: ColorSelectTypes) => {
  const { isLagging } = useFilters();

  name = name?.toLowerCase();
  return (
    <ColorContainer loading={isLagging}>
      <ColorCheckbox
        onChange={onChange}
        id={name}
        type="checkbox"
        name={name}
        {...props}
      />
      <ColorLabel color={color} htmlFor={name}>
        {props.checked && (
          <CheckedColorIconContainer>
            <MdDone color="#fff" />
          </CheckedColorIconContainer>
        )}

        <ColorNameContainer>{label?.toUpperCase()}</ColorNameContainer>
      </ColorLabel>
      {count && <CountContainer>{count}</CountContainer>}
    </ColorContainer>
  );
};

export default ColorSelect;

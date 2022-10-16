import React from 'react';
import { CarsContext } from '../../../context/CarsContext';
import {
  CarIcon,
  Label,
  CarCheckbox,
  CarBodyContainer,
  CarBodyCount,
} from '../styles/carBodySelect.styles';
import { CarBodySelectType } from './carBodySelect_types';

const CarBodySelect: React.FC<CarBodySelectType> = ({
  name,
  label,
  onChange,
  ...props
}: CarBodySelectType) => {
  const { loadingFilters }: any = React.useContext(CarsContext);
  name = name?.toLowerCase();
  return (
    <CarBodyContainer loading={loadingFilters}>
      <CarCheckbox
        onChange={onChange}
        id={name}
        type="checkbox"
        name={name}
        {...props}
      />
      <Label htmlFor={name}>
        {props.icon ? <CarIcon>{props.icon}</CarIcon> : ''}
        <span>{label}</span>
      </Label>
      <CarBodyCount>{props.count?.toString()}</CarBodyCount>
    </CarBodyContainer>
  );
};

export default CarBodySelect;

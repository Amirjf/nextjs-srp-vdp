import React, { useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { CarsContext } from '../../context/CarsContext';
import { Input } from '../common';
import { PriceInputContainer } from './styles/carPriceFilter.styles';

const CarPriceFilter = () => {
  const {
    setMinPrice,
    setPrices,
    minPrice,
    maxPrice,
    setMaxPrice,
    highestPrice,
    minimumPrice,
    setIsClickedOnFilters,
    minPriceValue,
    setMinPriceValue,
    maxPriceValue,
    setMaxPriceValue,
  }: any = React.useContext(CarsContext);

  const debouncedMinPrice = useDebounce<string | number>(minPriceValue, 250);
  const debouncedMaxPrice = useDebounce<string | number>(maxPriceValue, 250);

  const handleChangeMinPrice = (value: string) => {
    if (value == minimumPrice || value == '0') {
      return;
    }
    setIsClickedOnFilters(true);
    setMinPriceValue(value);
  };

  const handleChangeMaxPrice = (value: string) => {
    if (value == highestPrice || value == '0') {
      return;
    }

    setIsClickedOnFilters(true);

    setMaxPriceValue(value);
  };

  React.useEffect(() => {
    setPrices({ from: debouncedMinPrice, to: debouncedMaxPrice });
    setMinPrice(debouncedMinPrice);
    setMaxPrice(debouncedMaxPrice);
  }, [debouncedMinPrice, debouncedMaxPrice]);

  return (
    <PriceInputContainer>
      <Input
        currencyInput
        prefix="$"
        name="minPrice"
        scale="xs"
        label="Min price"
        placeholder="Min"
        value={minPriceValue === 0 ? minimumPrice : minPriceValue}
        onValueChange={handleChangeMinPrice}
        maxLength={highestPrice.length}
      />
      <br />
      <Input
        currencyInput
        prefix="$"
        name="maxPrice"
        color="black"
        scale="xs"
        label="Max price"
        placeholder="Max"
        value={maxPriceValue === 0 ? highestPrice : maxPriceValue}
        onValueChange={handleChangeMaxPrice}
      />

      <br />
    </PriceInputContainer>
  );
};

export default CarPriceFilter;

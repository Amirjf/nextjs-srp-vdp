import React from 'react';
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
    addFilters,
  }: any = React.useContext(CarsContext);

  const handleChangeMinPrice = (value: string) => {
    if (value == minimumPrice || value == '0') {
      return;
    }
    setMinPrice(value);
  };

  const handleChangeMaxPrice = (value: string) => {
    if (value == highestPrice || value == '0') {
      return;
    }
    setMaxPrice(value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPrices({ from: minPrice, to: maxPrice });
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [minPrice, maxPrice]);

  return (
    <PriceInputContainer>
      <Input
        currencyInput
        prefix="$"
        color="ADACAC"
        name="minPrice"
        scale="xs"
        label="Min price"
        placeholder="Min"
        value={minPrice === 0 ? minimumPrice : minPrice}
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
        value={maxPrice === 0 ? highestPrice : maxPrice}
        onValueChange={handleChangeMaxPrice}
      />

      <br />
    </PriceInputContainer>
  );
};

export default CarPriceFilter;

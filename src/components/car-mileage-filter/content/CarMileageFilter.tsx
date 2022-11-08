import React from 'react';
import { CarsContext } from '../../../context/CarsContext';
import { Input } from '../../common';
import { MileageInputContainer } from '../styles/carMileageFilter';

const CarMileageFilter = () => {
  const {
    setMinMileage,
    setMileages,
    minMileage,
    maxMileage,
    setMaxMileage,
    highestMileage,
    minimumMileage,
    setIsClickedOnFilters,
  }: any = React.useContext(CarsContext);

  const handleChangeMinMileage = (event: any) => {
    const { value } = event.target;
    if (!value) {
      setMinMileage(minimumMileage);
    }
    setIsClickedOnFilters(true);
    setMinMileage(value);
  };
  const handleChangeMaxMileage = (event: any) => {
    const { value } = event.target;
    if (!value) {
      setMaxMileage(highestMileage);
    }
    setIsClickedOnFilters(true);
    setMaxMileage(value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMileages({ min: minMileage, max: maxMileage });
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [minMileage, maxMileage]);

  return (
    <MileageInputContainer>
      <Input
        color="black"
        name="minMileage"
        scale="xs"
        label="Min Mileage"
        value={minMileage === 0 ? minimumMileage : minMileage}
        placeholder="Min"
        onChange={handleChangeMinMileage}
      />
      <br />
      <Input
        name="maxMileage"
        color="black"
        scale="xs"
        label="Max Mileage"
        placeholder="Max"
        value={maxMileage === 0 ? highestMileage : maxMileage}
        onChange={handleChangeMaxMileage}
      />

      <br />
    </MileageInputContainer>
  );
};

export default CarMileageFilter;

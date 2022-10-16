import React from 'react';
import { CarsContext } from '../../context/CarsContext';
import { Checkbox } from '../common';

const IsSpecialFilter = () => {
  const { addFilters, filters, clearItemFromFilters }: any =
    React.useContext(CarsContext);

  const handleChange = (event: any) => {
    if (event.target.checked) {
      addFilters({ key: 'special', value: event.target.value });
    } else {
      clearItemFromFilters({ key: 'special', value: event.target.value });
    }
  };
  const handleChecked = () => {
    return filters['special']?.length ? true : false;
  };

  return (
    <>
      {[{ special: '1' }].map((item: any, i: any) => {
        const name = item.special;
        const label = 'Special Vehicles';
        return (
          <Checkbox
            onChange={handleChange}
            key={i}
            name={name}
            value={name}
            checked={handleChecked()}
            id={name}
            label={label}
          />
        );
      })}
    </>
  );
};

export default IsSpecialFilter;

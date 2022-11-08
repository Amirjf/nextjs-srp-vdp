import React from 'react';
import { CarsContext } from '../../context/CarsContext';
import useApplyFilter from '../../hooks/useApplyFilter';
import { Checkbox } from '../common';

const IsSpecialFilter = () => {
  const { filters }: any = React.useContext(CarsContext);
  const { onFilterChange } = useApplyFilter('special');

  const handleChecked = () => {
    return filters['special']?.length ? true : false;
  };

  return (
    <div style={{ paddingBottom: 10 }}>
      {[{ special: '1' }].map((item: any, i: any) => {
        const name = item.special;
        const label = 'Special Vehicles';
        return (
          <Checkbox
            onChange={onFilterChange}
            key={i}
            name={name}
            value={name}
            checked={handleChecked()}
            id={name}
            label={label}
          />
        );
      })}
    </div>
  );
};

export default IsSpecialFilter;

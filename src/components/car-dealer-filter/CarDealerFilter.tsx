import React from 'react';
import { CarsContext } from '../../context/CarsContext';
import useApplyFilter from '../../hooks/useApplyFilter';
import { Checkbox } from '../common';
import { SeeMore } from '../common/see-more';

const CarDealerFilter = ({ items }: any) => {
  const [seeMore, setSeeMore] = React.useState(false);
  const { onFilterChange, checkHandler } = useApplyFilter('dealer');

  return (
    <>
      {items
        .filter((_: string, i: number) => (seeMore ? i < items.length : i < 7))
        .map((item: any, i: any) => {
          const name = Object.keys(item).join().toLowerCase();
          const count = Object.values(item).join();
          return (
            <Checkbox
              onChange={onFilterChange}
              key={i}
              name={name}
              value={name}
              checked={checkHandler(name)}
              id={name}
              label={`${name}`}
              count={count}
            />
          );
        })}
      {items.length > 7 && (
        <SeeMore setIsSeeMore={setSeeMore} isSeeMore={seeMore} />
      )}
    </>
  );
};

export default CarDealerFilter;

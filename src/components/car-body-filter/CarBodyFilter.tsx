import React from 'react';
import { CarsContext } from '../../context/CarsContext';
import useApplyFilter from '../../hooks/useApplyFilter';
import { CarBodySelect } from '../car-body-select';
import { SeeMore } from '../common/see-more';
import { CAR_ICONS } from './utils/costants';

const CarBodyFilter = ({ items }: any) => {
  const [seeMore, setSeeMore] = React.useState(false);
  const { onFilterChange, checkHandler } = useApplyFilter('body');

  return (
    <>
      {items
        .filter((_: string, i: number) => (seeMore ? i < items.length : i < 7))
        .map((item: any, i: number) => (
          <CarBodySelect
            key={`${item}${i}`}
            onChange={onFilterChange}
            value={Object.keys(item).join().toLowerCase()}
            name={Object.keys(item).join().toLowerCase()}
            checked={checkHandler(Object.keys(item).join().toLowerCase())}
            icon={CAR_ICONS[Object.keys(item).join().toLowerCase()]}
            label={Object.keys(item).join()}
            count={Object.values(item).join()}
          />
        ))}
      {items.length > 7 && (
        <SeeMore setIsSeeMore={setSeeMore} isSeeMore={seeMore} />
      )}
    </>
  );
};
export default CarBodyFilter;

import React from 'react';
import useApplyFilter from '../../../hooks/useApplyFilter';
import { COLORS } from '../../car-color-filter/utils/constants';
import { ColorSelect } from '../../color-select';
import { SeeMore } from '../../common/see-more';

const CarInteriorColorFilter = ({ items }: any) => {
  const [seeMore, setSeeMore] = React.useState(false);
  const { onFilterChange, checkHandler } = useApplyFilter('int_color');

  return (
    <div>
      {items
        .filter((_: string, i: number) => (seeMore ? i < items.length : i < 7))
        .map((item: string, i: number) => {
          const colorName = Object.keys(item).join().toLowerCase();
          const colorCount = Object.values(item).join();
          return (
            <ColorSelect
              key={`${item}${i}`}
              color={COLORS[colorName]}
              onChange={onFilterChange}
              name={`int_${colorName}`}
              value={colorName}
              checked={checkHandler(colorName.toLowerCase())}
              label={`${colorName}`}
              count={colorCount}
            />
          );
        })}

      {items.length > 7 && (
        <SeeMore setIsSeeMore={setSeeMore} isSeeMore={seeMore} />
      )}
    </div>
  );
};

export default CarInteriorColorFilter;

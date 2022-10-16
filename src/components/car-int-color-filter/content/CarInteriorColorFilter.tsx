import React from 'react';
import { CarsContext } from '../../../context/CarsContext';
import { COLORS } from '../../car-color-filter/utils/constants';
import { ColorSelect } from '../../color-select';
import { SeeMore } from '../../common/see-more';

const CarInteriorColorFilter = ({ items }: any) => {
  const { addFilters, clearItemFromFilters }: any =
    React.useContext(CarsContext);

  const [seeMore, setSeeMore] = React.useState(false);

  const handleChange = (event: any) => {
    if (event.target.checked) {
      addFilters({ key: 'int_color', value: event.target.value });
    } else {
      clearItemFromFilters({ key: 'int_color', value: event.target.value });
    }
  };

  const handleChecked = (name: string) => {
    const params = new URLSearchParams(window.location.search);
    const getIntColors = params.getAll('int_color');
    return getIntColors.includes(name);
  };

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
              onChange={handleChange}
              name={`int_${colorName}`}
              value={colorName}
              checked={handleChecked(colorName)}
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

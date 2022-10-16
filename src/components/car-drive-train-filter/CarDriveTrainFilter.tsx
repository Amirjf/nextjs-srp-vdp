import React from 'react';
import { CarsContext } from '../../context/CarsContext';

import { Checkbox } from '../common';
import { SeeMore } from '../common/see-more';

const CarDriveTrainFilter = ({ items }: any) => {
  const { addFilters, clearItemFromFilters }: any =
    React.useContext(CarsContext);

  const [seeMore, setSeeMore] = React.useState(false);

  const handleChange = (event: any) => {
    if (event.target.checked) {
      addFilters({ key: 'drive_train', value: event.target.value });
    } else {
      clearItemFromFilters({ key: 'drive_train', value: event.target.value });
    }
  };

  const handleChecked = (name: string) => {
    const params = new URLSearchParams(window.location.search);
    const getDrives = params.getAll('drive_train');
    return getDrives.includes(name);
  };

  return (
    <>
      {items
        .filter((_: string, i: number) => (seeMore ? i < items.length : i < 7))
        .map((item: any, i: any) => {
          const name = Object.keys(item).join();
          const count = Object.values(item).join();
          return (
            <Checkbox
              onChange={handleChange}
              key={i}
              name={name}
              value={name}
              checked={handleChecked(name)}
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

export default CarDriveTrainFilter;

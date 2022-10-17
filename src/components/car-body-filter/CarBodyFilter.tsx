import { useRouter } from 'next/router';
import React from 'react';
import { CarsContext } from '../../context/CarsContext';
import { CarBodySelect } from '../car-body-select';
import { SeeMore } from '../common/see-more';
import { CAR_ICONS } from './utils/costants';

const CarBodyFilter = ({ items }: any) => {
  const [seeMore, setSeeMore] = React.useState(false);
  const { asPath } = useRouter();
  const { addFilters, clearItemFromFilters }: any =
    React.useContext(CarsContext);

  const handle = (event: any) => {
    if (event.target.checked) {
      addFilters({ key: 'body', value: event.target.value });
    } else {
      clearItemFromFilters({ key: 'body', value: event.target.value });
    }
  };

  const handleChecked = (name: string) => {
    const params = new URLSearchParams(asPath);
    const getBodies = params.getAll('body');
    return getBodies.includes(name);
  };

  return (
    <>
      {items
        .filter((_: string, i: number) => (seeMore ? i < items.length : i < 7))
        .map((item: any, i: number) => (
          <CarBodySelect
            key={`${item}${i}`}
            onChange={handle}
            value={Object.keys(item).join()}
            name={Object.keys(item).join()}
            checked={handleChecked(Object.keys(item).join())}
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

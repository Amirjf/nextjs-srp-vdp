import { useContext } from 'react';
import { CarsContext } from '../../context/CarsContext';

const SrpVdpTopBanner = () => {
  const { carTypes }: any = useContext(CarsContext);

  const vehicleConds = carTypes
    .filter((carType: any) => carType.isChecked)
    .map((carType: any) => carType.cond);

  const res = `srp-${vehicleConds.join('-')}`;

  if (vehicleConds.length) {
    return <div className={`${res}`}></div>;
  } else {
    return null;
  }
};

export default SrpVdpTopBanner;

import { Fragment, useContext, useRef } from 'react';
import { GoogleContext } from '../../../context/GoogleOptContext';
import useInfiniteVehicles from '../../../hooks/useInfiniteVehicles';

import { CarType } from '../../common/main-content/content/mainContent_types';
import { MainContentContainer } from '../../common/main-content/styles/mainContent.styles';
import { getSrpTheme } from '../../common/main-content/utils/utils';

const MainContentStatic = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { goChecker, srpTheme }: any = useContext(GoogleContext);

  const {
    data: vehicles,
    isLoadingMore,
    isReachingEnd,
  } = useInfiniteVehicles();

  const getSrpStyle = goChecker ? goChecker.srp_theme : srpTheme;

  return (
    <MainContentContainer>
      {vehicles?.map((cars: CarType[]) => {
        return cars.map((car: CarType, index: number) => {
          return (
            <Fragment key={car.id}>{getSrpTheme(car, getSrpStyle)}</Fragment>
          );
        });
      })}
      <div
        ref={ref}
        style={{
          position: 'absolute',
          bottom: '10%',
        }}
      ></div>
    </MainContentContainer>
  );
};

export default MainContentStatic;

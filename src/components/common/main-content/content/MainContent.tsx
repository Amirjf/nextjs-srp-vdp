import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useContext,
} from 'react';
import useInfiniteVehicles from '../../../../hooks/useInfiniteVehicles';
import { CarType } from './mainContent_types';
import { CARD_LOADERS } from '../utils/utils';
import { useIntersectionObserver } from 'usehooks-ts';
import useQuery from '../../../../hooks/useQuery';
import { CardDesign2 } from '../../card';
import { CarsContext } from '../../../../context/CarsContext';

const MainContent = ({ vehiclesData }: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const urlParams = useQuery();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const [isSwr, setIsSWR] = useState(false);

  const {
    data: vehicles,
    error,
    isLoadingMore,
    isReachingEnd,
    setSize,
    size,
  } = useInfiniteVehicles();
  const { filters }: any = useContext(CarsContext);

  useEffect(() => {
    if (vehicles) {
      setIsSWR(true);
    }
  }, [vehicles]);

  useEffect(() => {
    if (isVisible && !urlParams.get('special')) {
      setSize(size + 1);
    }
  }, [isVisible]);

  if (isSwr && error) return <h2>{error}</h2>;

  const vehiclesToShow = vehicles ?? [
    Object.values(filters).length > 0 ? [] : vehiclesData,
  ];

  return (
    <>
      {vehiclesToShow?.map((cars: CarType[], page: number) => {
        return cars.map((car: CarType, index: number) => {
          // const getNumberOfColsByScreen: any = handleMediaQuery();
          return (
            <Fragment key={car.id}>
              {/* {index % getNumberOfColsByScreen === 0 ? (
                <Banner
                  media={handleMediaQuery}
                  getCols={getNumberOfColsByScreen}
                  position={index}
                />
              ) : undefined} */}
              <CardDesign2 car={car} key={`${car.id}`} />
            </Fragment>
          );
        });
      })}
      <div
        ref={ref}
        style={{
          position: 'absolute',
          bottom: 100,
          width: 100,
          height: 100,
          zIndex: 999999999,
        }}
      ></div>
      {/* {vehicles && vehicles[0]?.length < 6
        ? handleShowingFirstBanner(bannersToShow)
        : ''} */}
      {isLoadingMore && !isReachingEnd ? (
        <>
          {Array.from(Array(8).keys()).map((s, index) => (
            <Fragment key={index}>{CARD_LOADERS['theme2']}</Fragment>
          ))}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default MainContent;

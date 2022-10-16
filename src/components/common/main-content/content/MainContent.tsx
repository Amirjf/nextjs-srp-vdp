import React, { Fragment, useContext, useRef } from 'react';
import useInfiniteVehicles from '../../../../hooks/useInfiniteVehicles';
import { CarType } from './mainContent_types';
import { GoogleContext } from '../../../../context/GoogleOptContext';
import {
  CARD_LOADERS,
  getSrpTheme,
  handleShowingFirstBanner,
} from '../utils/utils';
import useBanners from '../../../../hooks/useBanners';
import Banner from '../../../banner/content/AdBanner';
import { useIntersectionObserver, useReadLocalStorage } from 'usehooks-ts';
import useQuery from '../../../../hooks/useQuery';
import SrpDisclaimer from '../../../srp-disclaimer/content/SrpDisclaimer';

const MainContent: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const urlParams = useQuery();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const {
    data: vehicles,
    isLoadingMore,
    isReachingEnd,
    setSize,
    size,
  } = useInfiniteVehicles();

  React.useEffect(() => {
    if (isVisible && !urlParams.get('special')) {
      setSize(size + 1);
    }
  }, [isVisible]);

  const { cachedSrpTheme, srpTheme }: any = useContext(GoogleContext);

  const { bannersToShow, handleMediaQuery } = useBanners();

  const srpCardsTheme = cachedSrpTheme || srpTheme;

  return (
    <>
      {vehicles?.map((cars: CarType[], page: number) => {
        return cars.map((car: CarType, index: number) => {
          const getNumberOfColsByScreen: any = handleMediaQuery();
          const srpThemeTranslator = getSrpTheme[srpCardsTheme];
          return (
            <Fragment key={car.id}>
              {index % getNumberOfColsByScreen === 0 ? (
                <Banner
                  media={handleMediaQuery}
                  getCols={getNumberOfColsByScreen}
                  position={index}
                />
              ) : undefined}
              {srpThemeTranslator(car)}
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
            <Fragment key={index}>{CARD_LOADERS[srpCardsTheme]}</Fragment>
          ))}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default MainContent;

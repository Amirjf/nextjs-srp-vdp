import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import useInfiniteVehicles from "../../../../hooks/useInfiniteVehicles";
import { CarType } from "./mainContent_types";
import { GoogleContext } from "../../../../context/GoogleOptContext";
import {
  CARD_LOADERS,
  getSrpTheme,
  handleShowingFirstBanner,
} from "../utils/utils";

import { useIntersectionObserver, useReadLocalStorage } from "usehooks-ts";
import useQuery from "../../../../hooks/useQuery";
import SrpDisclaimer from "../../../srp-disclaimer/content/SrpDisclaimer";

const MainContent = ({ vehiclesData }: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const urlParams = useQuery();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const [data, setData] = React.useState([vehiclesData]);
  const [isSwr, setIsSWR] = useState(false);

  const {
    data: vehicles,
    error,
    isLoadingMore,
    isReachingEnd,
    setSize,
    size,
  } = useInfiniteVehicles();

  // useEffect(() => {
  //   if (vehicles) {
  //     setData(vehicles);
  //     setIsSWR(true);
  //   }
  // }, [vehicles]);

  // useEffect(() => {
  //   if (isVisible && !urlParams.get("special")) {
  //     setSize(size + 1);
  //   }
  // }, [isVisible]);

  if (isSwr && error) return <h2>{error}</h2>;

  if (isSwr && isLoadingMore) return <>Loading ...</>;

  // const { cachedSrpTheme, srpTheme }: any = useContext(GoogleContext);

  // const srpCardsTheme = cachedSrpTheme || srpTheme;

  const vehiclesToShow = [vehiclesData] ?? vehicles;

  return (
    <>
      {data?.map((cars: CarType[], page: number) => {
        return cars.map((car: CarType, index: number) => {
          // const getNumberOfColsByScreen: any = handleMediaQuery();
          const srpThemeTranslator = getSrpTheme["theme2"];
          return (
            <Fragment key={car.id}>
              {/* {index % getNumberOfColsByScreen === 0 ? (
                  <Banner
                    media={handleMediaQuery}
                    getCols={getNumberOfColsByScreen}
                    position={index}
                  />
                ) : undefined} */}
              {srpThemeTranslator(car)}
            </Fragment>
          );
        });
      })}
      <div
        ref={ref}
        style={{
          position: "absolute",
          bottom: 100,
          width: 100,
          height: 100,
          zIndex: 999999999,
        }}
      ></div>
      {/* {vehicles && vehicles[0]?.length < 6
        ? handleShowingFirstBanner(bannersToShow)
        : ''} */}
      {/* {isLoadingMore && !isReachingEnd ? (
        <>
          {Array.from(Array(8).keys()).map((s, index) => (
            <Fragment key={index}>{CARD_LOADERS[srpCardsTheme]}</Fragment>
          ))}
        </>
      ) : (
        ''
      )} */}
    </>
  );
};

export default MainContent;

import { useRouter } from 'next/router';
import { useEffect, useContext, useRef, useCallback } from 'react';
import useSWRInfinite from 'swr/infinite';
import CarClient from '../client/client';
import { CarsContext } from '../context/CarsContext';
import {
  handleCarTypes,
  handlePrice,
  handleSearch,
  handleMileage,
  handleSortQuery,
} from '../context/utils/filterUtils';
import { handleUrl } from '../context/utils/handleFiltersQuery';

// export function laggy(useSWRNext: any) {
//   return (key: any, fetcher: any, config: any) => {
//     const laggyDataRef = useRef();
//     const swr = useSWRNext(key, fetcher, config);

//     useEffect(() => {
//       if (swr.data !== undefined) {
//         laggyDataRef.current = swr.data;
//       }
//     }, [swr.data]);
//     const resetLaggy = useCallback(() => {
//       laggyDataRef.current = undefined;
//     }, []);
//     const dataOrLaggyData =
//       swr.data === undefined ? laggyDataRef.current : swr.data;
//     const isLagging =
//       swr.data === undefined && laggyDataRef.current !== undefined;

//     return Object.assign({}, swr, {
//       data: dataOrLaggyData,
//       isLagging,
//       resetLaggy,
//     });
//   };
// }

const useInfiniteVehicles = () => {
  const {
    filters,
    searchQuery,
    carTypes,
    activeSort,
    minPrice,
    maxPrice,
    highestPrice,
    minMileage,
    maxMileage,
    highestMileage,
    loadingFilters,
  }: any = useContext(CarsContext);
  const router = useRouter();

  const fetcher = (url: string) => CarClient.get(url).then((res) => res.data);

  const getUrl = (pageIndex: any, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;

    const getQueries =
      searchQuery.length === 0
        ? `${handleCarTypes(carTypes)}${handleUrl(filters)}${handlePrice(
            minPrice,
            maxPrice,
            highestPrice
          )}${handleMileage(minMileage, maxMileage, highestMileage)}pagenum=${
            pageIndex + 1
          }/${handleSortQuery(activeSort)}`
        : `${handleSearch(searchQuery)}/pagenum=${pageIndex + 1}`;

    if (!loadingFilters) {
      return `https://salemnissan.datgate.com/api/json/vehicles/fl.json?url=inventory/${getQueries}`;
    }
  };

  // if (typeof window !== 'undefined') {
  //   if (vehiclesData) mutate('vehiclesData', vehiclesData, false);
  // }

  const { data, error, size, setSize }: any = useSWRInfinite(getUrl, fetcher);

  const isLoadingInitialData = !data && !error;

  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');

  const isEmpty = data?.[0]?.length === 0;

  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length === 0);

  return {
    data,
    isLoadingMore,
    isLoadingInitialData,
    error,
    isReachingEnd,
    isEmpty,
    setSize,
    size,
  };
};

export default useInfiniteVehicles;

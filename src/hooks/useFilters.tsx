import { useContext } from 'react';
import useSWR from 'swr';
import { CarsContext } from '../context/CarsContext';
import { handleCarTypes, handleSearch } from '../context/utils/filterUtils';
import { handleUrl } from '../context/utils/handleFiltersQuery';
import { laggy } from './useInfiniteVehicles';

const useFilters = () => {
  const { filters, carTypes, searchQuery }: any = useContext(CarsContext);

  const {
    data: filterItems,
    error,
    isLagging,
  }: any = useSWR(
    searchQuery.length === 0
      ? `/uq.json?type=counts&url=inventory/${handleCarTypes(
          carTypes
        )}${handleUrl(filters)}`
      : `/uq.json?type=counts&url=inventory/used-certified-new/${handleSearch(
          searchQuery
        )}`,
    { use: [laggy] }
  );

  const totalVehicles = filterItems?.find((obj: any) => {
    return obj?.found_count;
  });

  return { filterItems, error, isLagging, totalVehicles };
};

export default useFilters;

import useSWR from 'swr';

const useFilters = () => {
  const { data: filterItems, error }: any = useSWR(
    'https://salemnissan.datgate.com/api/json/vehicles/uq.json?type=counts&url=inventory/new-certified-used'
  );

  const totalVehicles = filterItems?.find((obj: any) => {
    return obj?.found_count;
  });

  return { filterItems, error, totalVehicles };
};

export default useFilters;

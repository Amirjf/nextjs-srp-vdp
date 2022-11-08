import React from 'react';
import { CarsContext } from '../context/CarsContext';

const useApplyFilter = (key: string) => {
  const {
    addFilters,
    clearItemFromFilters,
    filters,
    setIsClickedOnFilters,
  }: any = React.useContext(CarsContext);

  const onFilterChange = (event: any) => {
    setIsClickedOnFilters(true);
    if (event.target.checked) {
      addFilters({ key: key, value: event.target.value });
    } else {
      clearItemFromFilters({ key: key, value: event.target.value });
    }
  };

  const checkHandler = (name: string) => {
    const getKeyAppliedFilters = filters[key]?.map((term: string) =>
      term.toLowerCase()
    );
    return getKeyAppliedFilters?.includes(name) ? true : false;
  };

  return { onFilterChange, checkHandler };
};

export default useApplyFilter;

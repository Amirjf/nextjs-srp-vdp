export const addFilter = (filters: any, filterToAdd: any) => {
  if (filterToAdd.key === 'cond') {
    return { ...filters };
  }
  let newFilters = [filterToAdd.value];
  //@ts-ignore
  if ([filterToAdd.key] in filters)
    newFilters = [...filters[filterToAdd.key], filterToAdd.value];

  return { ...filters, [filterToAdd.key]: [...new Set(newFilters)] };
};

export const removeFilter = (filters: any, filterToRemove: any) => {
  const newFilter = filterToRemove.value;
  const filterValues = filters[filterToRemove.key];

  const updatedFilter = filterValues?.filter(
    (filter: any) => filter !== newFilter
  );

  if (updatedFilter?.length) {
    return { ...filters, [filterToRemove.key]: [...new Set(updatedFilter)] };
  } else {
    delete filters[filterToRemove.key];
    return { ...filters };
  }
};

export const handleCarTypes = (carTypes: any) => {
  const normalizeCarTypes = carTypes
    .filter((carType: any) => {
      if (carType.isChecked) {
        return carType.cond;
      }
    })
    .map((carType: any) => carType.cond)
    .join('-');
  if (normalizeCarTypes) {
    return normalizeCarTypes + '/';
  } else {
    return '';
  }
};

export const handlePrice = (
  minPrice: number,
  maxPrice: number,
  highestPrice: number
) => {
  if (maxPrice || minPrice) {
    return `price=${minPrice ? minPrice : '0'}-${
      maxPrice ? maxPrice : highestPrice
    }/`;
  } else {
    return '';
  }
};
export const handleMileage = (
  minMileage: number,
  maxMileage: number,
  highestMileage: number
) => {
  if (maxMileage || minMileage) {
    return `mileage=${minMileage ? minMileage : '0'}-${
      maxMileage ? maxMileage : highestMileage
    }/`;
  } else {
    return '';
  }
};

export const handleSearch = (searchQuery: string) => {
  if (searchQuery.length) {
    return `used-new-certified/search=${searchQuery}`;
  } else return '';
};

export const handleSortQuery = (activeSort: string) => {
  if (activeSort) {
    return `/orderby=${activeSort}`;
  } else {
    return '';
  }
};

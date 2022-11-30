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

export const handlePriceAndMileage = (
  key: 'price' | 'mileage',
  minVal: string | number,
  maxVal: string | number,
  highestVal: string | number
) => {
  if (maxVal || minVal) {
    return `${key}=${minVal ? minVal : '0'}-${maxVal ? maxVal : highestVal}/`;
  } else {
    return '';
  }
};

export const filterOriginalFilterObj = (
  filters: any,
  makes: string[],
  models: string[]
) => {
  const keysToChange = ['make', 'body'];

  keysToChange.forEach((key) => {
    if (filters[key]) {
      filters[key] = filters[key].slice(1);
    }
  });

  if (makes && makes.length === 1) {
    filters.trim = filters['trim']?.slice(1);
  }

  if ((models && makes && makes.length === 1) || (models && !makes?.length)) {
    filters.model = filters['model']?.slice(1);
  }
};

export function getKeyByValue(object: any, value: any) {
  return Object.keys(object).find((key) => object[key].includes(value));
}

export function getMakeModel(object: any, value: any) {
  const getMake = getKeyByValue(object, value);
  return getMake;
}

export const initCarTypes = () => {
  return [
    {
      cond: 'new',
      label: 'New',
      isChecked: false,
      timeStamp: Math.floor(Date.now() / 1000),
    },
    {
      cond: 'used',
      label: 'Pre-Owned',
      isChecked: false,
      timeStamp: Math.floor(Date.now() / 1000),
    },
    {
      cond: 'certified',
      label: 'Certified',
      isChecked: false,
      timeStamp: Math.floor(Date.now() / 1000),
    },
  ];
};

export const handleConditionsUrl = (appliedConditions: string[]) => {
  if (!appliedConditions.length) return '';
  if (appliedConditions.length === 3) {
    return 'used-vehicles/';
  }

  if (
    appliedConditions.length === 2 &&
    appliedConditions.includes('new') &&
    appliedConditions.includes('certified')
  ) {
    return 'used-vehicles/certified/';
  }
  if (
    appliedConditions.length === 2 &&
    appliedConditions.includes('certified') &&
    appliedConditions.includes('used')
  ) {
    return 'used-vehicles/';
  }
  if (
    appliedConditions.length === 1 &&
    appliedConditions.includes('certified')
  ) {
    return 'used-vehicles/certified/';
  }
  if (appliedConditions.length === 1) {
    return `${appliedConditions[0]}-vehicles/`;
  }
};

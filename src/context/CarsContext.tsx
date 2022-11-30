import React, { createContext, useState, useEffect } from 'react';
import {
  addFilter,
  filterOriginalFilterObj,
  handleConditionsUrl,
  removeFilter,
} from './utils/filterUtils';
import queryString from 'query-string';

import CarClient from '../client/client';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { useRouter } from 'next/router';

export const CarsContext = createContext({});

export const CarsProvider: React.FC<any> = ({ children }: any) => {
  const [filters, setFilters] = useState<any>({});
  const router = useRouter();
  const [isClickedOnFilters, setIsClickedOnFilters] = useState(false);
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPriceValue, setMinPriceValue] = useState<string | number>(0);

  const [maxPriceValue, setMaxPriceValue] = useState<string | number>(0);
  const [prices, setPrices] = useState<any>({
    from: 0,
    to: 0,
  });

  const [minimumMileage, setMinimumMileage] = useState(0);
  const [highestMileage, setHighestMileage] = useState(0);
  const [minMileage, setMinMileage] = useState<number>(0);
  const [maxMileage, setMaxMileage] = useState<number>(0);
  const [mileages, setMileages] = useState<any>({
    min: 0,
    max: 0,
  });

  const [activeSort, setActiveSort] = useState<string | null>('');

  const [searchQuery, setSearchQuery] = useState<string | null>('');
  const [searchValue, setSearchValue] = useState<string | null>('');

  const [carTypes, setCarTypes] = useState<any>([
    { cond: 'new', label: 'New', isChecked: false },
    { cond: 'used', label: 'Pre-Owned', isChecked: false },
    { cond: 'certified', label: 'Certified', isChecked: false },
  ]);

  const getCachedRanges: any = useReadLocalStorage('baseRanges');

  const [isUsersFirstTime, setIsUsersFirstTime] = useLocalStorage(
    'isFirstTime',
    true
  );

  const addFilters = (filterToAdd: any) => {
    if (
      filterToAdd.key === 'minPrice' ||
      filterToAdd.key === 'maxPrice' ||
      filterToAdd.key === 'minMileage' ||
      filterToAdd.key === 'maxMileage' ||
      filterToAdd.key === 'search' ||
      filterToAdd.key === 'year' ||
      filterToAdd.key === ''
    ) {
      return;
    }

    setFilters((currentFilters: any) => addFilter(currentFilters, filterToAdd));
  };

  const clearItemFromFilters = (filterToRemove: any) => {
    setFilters((currentFilters: any) =>
      removeFilter(currentFilters, filterToRemove)
    );
  };

  const handleAssigningRanges = (getRangesData: any) => {
    const params = new URLSearchParams(window.location.search);

    const minParamPrice = Number(params.get('minPrice'));
    const maxParamPrice = Number(params.get('maxPrice'));
    const minParamMileage = Number(params.get('maxMileage'));
    const maxParamMileage = Number(params.get('minMileage'));
    if (
      minMileage === 0 &&
      maxParamMileage !== Number(getRangesData.mileage.max)
    ) {
      setHighestMileage(Number(getRangesData.mileage.max) + 100);
      setMinimumMileage(Number(getRangesData.mileage.min));
    }
    if (minPrice === 0 && maxParamPrice !== Number(getRangesData.price.max)) {
      setHighestPrice(Number(getRangesData.price.max) + 1000);
      setMinimumPrice(Number(getRangesData.price.min));
    }
    if (
      minParamPrice === 0 &&
      maxParamPrice === Number(getRangesData.price.max)
    ) {
      setMaxPrice(Number(getRangesData.price.max));
      setMinPrice(Number(getRangesData.price.min));
    }
    if (
      minParamMileage === 0 &&
      maxParamMileage === Number(getRangesData.mileage.max)
    ) {
      setMaxMileage(Number(getRangesData.mileage.max));
      setMinMileage(Number(getRangesData.mileage.min));
    }
  };

  // Handle applying filters by url
  useEffect(() => {
    const filterParams = queryString.parse(window.location.search);
    const getUrl: any = window.localStorage
      .getItem('currentURL')
      ?.split('/')
      .slice(1)
      .join('&')
      .replaceAll('year', 'vehicleYear');

    const parsUrl = queryString.parse(getUrl);

    const getParsedUrl = getUrl?.length > 1 ? parsUrl : filterParams;

    if (Object.values(filterParams).length || getUrl?.length) {
      for (const [key, value] of Object.entries(router.query)) {
        if (key === 'cond' && Array.isArray(value)) {
          carTypes.map((d: any) => {
            //@ts-ignore
            value.map((item: any) => {
              if (d.cond === item) {
                d.isChecked = true;
              }
            });
          });
        } else {
          carTypes.map((d: any) => {
            if (d.cond === value) {
              d.isChecked = true;
            }
          });
        }
        if (Array.isArray(value)) {
          value.map((param: any) => {
            if (key !== 'cond') {
              addFilters({ key: key, value: param });
            }
          });
        } else {
          if (key === 'vehicleYear') {
            addFilters({ key: 'year', value: value });
          }
          if (key !== 'cond') {
            addFilters({ key: key, value: value });
          }
        }
      }

      const params = new URLSearchParams(window.location.search);

      if (params.get('maxPrice') || params.get('minPrice')) {
        setMinPrice(
          params.get('minPrice') ? Number(params.get('minPrice')) : 0
        );
        setMaxPrice(Number(params.get('maxPrice')));
      }

      if (params.get('maxMileage') || params.get('minMileage')) {
        setMinMileage(
          params.get('minMileage') ? Number(params.get('minMileage')) : 0
        );
        setMaxMileage(Number(params.get('maxMileage')));
      }

      if (params.get('search')) {
        const searchValue = params.get('search');
        setSearchQuery(searchValue);
      }
    }
  }, []);

  useEffect(() => {
    const appliedConditions = carTypes
      .filter((carType: any) => carType.isChecked && carType.cond)

      .map((carType: any) => carType.cond);

    const getFilters = {
      ...filters,
      ...(appliedConditions.length > 0 && {
        condition: appliedConditions,
      }),
      ...(minPrice !== 0 && { minPrice: minPrice }),
      ...(maxPrice !== 0 && { maxPrice: maxPrice }),
      ...(maxMileage && { maxMileage: maxMileage }),
      ...(minMileage && { minMileage: minMileage }),
      ...(searchQuery?.length && { search: searchQuery }),
      ...(activeSort && { orderby: activeSort }),
    };

    const endcodedFilters = `${queryString.stringify(getFilters)}`;

    if (endcodedFilters) {
      router.push(endcodedFilters ? `?${endcodedFilters}` : '', undefined, {
        shallow: true,
      });
    }
  }, [filters, carTypes, searchQuery, prices, mileages, activeSort]);

  const getRanges = async () => {
    const { data } = await CarClient.get('/uq.json?type=ranges');

    const ranges = data[0];

    handleAssigningRanges(ranges);
  };

  useEffect(() => {
    if (getCachedRanges) {
      handleAssigningRanges(getCachedRanges.ranges);
    } else {
      getRanges();
    }
  }, []);

  const value = {
    filters,
    addFilters,
    clearItemFromFilters,
    setActiveSort,
    activeSort,
    setFilters,
    setMaxPrice,
    setMinPrice,
    setHighestPrice,
    minPrice,
    maxPrice,
    setPrices,
    prices,
    highestPrice,
    setSearchQuery,
    searchQuery,
    setCarTypes,
    carTypes,
    highestMileage,
    setHighestMileage,
    minMileage,
    setMinMileage,
    setMaxMileage,
    maxMileage,
    mileages,
    setMileages,
    minimumPrice,
    minimumMileage,

    isUsersFirstTime,
    setIsUsersFirstTime,
    setIsClickedOnFilters,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};

import React from 'react';
import { CarsContext } from '../../../context/CarsContext';
import { FilterTagsContainer } from '../styles/filterTagsContent.styles';
import Tag from '../../common/tag/content/Tag';
import queryString from 'query-string';

import { handleShowingTextWithTradeMark } from '../../../global/utils/utils';

const FilterTagsContent: React.FC = () => {
  const {
    filters,
    clearItemFromFilters,
    setFilters,
    minPrice,
    maxPrice,
    carTypes,
    setMaxPrice,
    setMinPrice,
    highestPrice,
    setCarTypes,
    setSearchQuery,
    setActiveSort,
    minMileage,
    maxMileage,
    highestMileage,
    setMaxMileage,
    setMinMileage,
  }: any = React.useContext(CarsContext);

  const refactorFilters = Object.entries(filters);

  const handleDelete = (filterValue: string, filterKey: string) => {
    clearItemFromFilters({ key: filterKey, value: filterValue });
  };

  const handleDeletePrices = () => {
    setMinPrice(0);
    setMaxPrice(0);
  };
  const handleDeleteMileages = () => {
    setMinMileage(0);
    setMaxMileage(0);
  };

  const handleClearAllFilters = () => {
    setFilters({});
    handleDeletePrices();
    handleDeleteMileages();
    setSearchQuery('');
    setActiveSort('');
  };

  const handleDeleteCarType = (condName: string) => {
    let updatedListOfItems = [...carTypes];

    const carTypeIndex = updatedListOfItems.findIndex(
      (carType: any) => carType.cond === condName
    );
    updatedListOfItems[carTypeIndex].isChecked = false;

    setCarTypes(updatedListOfItems);
  };

  const renderCarTypesTags = () => {
    const vehicleConds = carTypes.map((carType: any) =>
      carType.isChecked ? carType.cond : ''
    );

    return vehicleConds.map(
      (cond: string) =>
        cond && (
          <Tag key={`${cond}`} onClose={() => handleDeleteCarType(cond)}>
            {cond}
          </Tag>
        )
    );
  };
  const renderPrices = () => {
    if (maxPrice || minPrice) {
      return (
        <Tag onClose={handleDeletePrices}>{`${minPrice ? minPrice : 0}-${
          maxPrice ? maxPrice : highestPrice
        }`}</Tag>
      );
    }
  };
  const renderMileages = () => {
    if (maxMileage || minMileage) {
      return (
        <Tag onClose={handleDeleteMileages}>{`${minMileage ? minMileage : 0}-${
          maxMileage ? maxMileage : highestMileage
        }`}</Tag>
      );
    }
  };

  const isFilterExists = () => {
    const urlParams = queryString.parse(window.location.search);

    const appliedFilters = Object.keys(urlParams).filter(
      (filter: string) => filter !== 'cond'
    ).length;

    return appliedFilters || false;
  };

  const handleShowFilterValue = (filterValue: string) => {
    const checkFilterValue = handleShowingTextWithTradeMark(filterValue);
    return checkFilterValue.length > 20
      ? checkFilterValue.slice(0, 20) + '...'
      : checkFilterValue;
  };

  return (
    <FilterTagsContainer>
      {refactorFilters?.map((filter: any, i: number) => {
        const filterKey = filter[0];
        if (filterKey !== 'orderby') {
          return (
            <React.Fragment key={`${filter.toString()}${i}`}>
              {filter[1].map((filterValue: string) => {
                if (filterValue) {
                  if (filterKey === 'special' && filterValue === '1') {
                    return (
                      <Tag
                        onClose={() => handleDelete(filterValue, filterKey)}
                        key={`${filterValue}`}
                      >
                        Specials
                      </Tag>
                    );
                  }
                  return (
                    <Tag
                      onClose={() => handleDelete(filterValue, filterKey)}
                      key={`${filterValue}`}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: handleShowFilterValue(filterValue),
                        }}
                      ></span>
                    </Tag>
                  );
                }
              })}
            </React.Fragment>
          );
        }
      })}

      {renderPrices()}
      {renderMileages()}

      {renderCarTypesTags()}

      {isFilterExists() ? (
        <Tag variant="outlined" onClose={handleClearAllFilters}>
          Reset Filters
        </Tag>
      ) : null}
    </FilterTagsContainer>
  );
};

export default FilterTagsContent;

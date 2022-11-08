import { Collapsible } from '../../common';
import { FiltersBodyContainer } from '../styles/filtersBody.styles';
import CarPriceFilter from '../../car-price-filter/CarPriceFilter';
import CarTypeFilter from '../../car-type-filter/content/CarTypeFilter';
import { filterItemTitleTranslator, FILTERS } from '../utils/utils';
import CarMileageFilter from '../../car-mileage-filter/content/CarMileageFilter';
import { useReadLocalStorage } from 'usehooks-ts';

import IsSpecialFilter from '../../car-is-special-filter/IsSpecialFilter';
import useFilters from '../../../hooks/useFilters';

const FiltersBody = () => {
  const { filterItems } = useFilters();

  return (
    <>
      <FiltersBodyContainer>
        <Collapsible open={true} title="Price">
          <CarPriceFilter />
        </Collapsible>
        <Collapsible open={true} title="New or Pre-Owned">
          <CarTypeFilter />
        </Collapsible>
        <Collapsible title="Specials">
          <IsSpecialFilter />
        </Collapsible>
        {filterItems?.map(
          (
            filterItem: { [s: string]: unknown } | ArrayLike<unknown>,
            i: number
          ) => {
            const filterName = Object.keys(filterItem)[0];
            const filterValues = Object.values(filterItem)[0];
            const getFilter = FILTERS[filterName];

            if (Array.isArray(filterValues)) {
              return (
                <Collapsible
                  open={filterName === 'key_features'}
                  key={`${filterName}-${i}`}
                  title={filterItemTitleTranslator[filterName]}
                  titleForCount={filterName}
                >
                  {getFilter && getFilter(filterValues)}
                </Collapsible>
              );
            }
          }
        )}

        <Collapsible title="Mileage">
          <CarMileageFilter />
        </Collapsible>
      </FiltersBodyContainer>
    </>
  );
};

export default FiltersBody;

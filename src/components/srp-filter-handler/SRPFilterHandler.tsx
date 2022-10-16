import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { AiOutlineControl } from 'react-icons/ai';
import { ShowFiltersContext } from '../../context/uiContexts/showFilterDrawer/ShowFiltersContext';
import { ShowFilterContextType } from '../../context/uiContexts/showFilterDrawer/showFiltersContext_types';
import { Button } from '../common';
import { StickyHeader } from '../common/sticky-container';
import FilterSidebar from '../filter-sidebar/content/FilterSidebar';
import { FiltersContainer } from '../filters/styles/filters.styles';
import { Search } from '../search';
import ShowFilterResult from '../show-filter-result/content/ShowFilterResult';
import SortButton from '../sorting/content/SortButton';
import { TopFilterButtons } from './srpFilterHandler.styles';

const SRPFilterHandler = () => {
  const { showFilters, setShowFilters }: ShowFilterContextType =
    React.useContext(ShowFiltersContext);
  return (
    <TopFilterButtons>
      <Search />

      <div style={{ display: 'unset' }}>
        <StickyHeader>
          <FiltersContainer>
            <Button
              block
              scale="lg"
              onClick={setShowFilters}
              icon={<AiOutlineControl size={20} />}
            >
              FILTERS
            </Button>
            <SortButton />
          </FiltersContainer>
        </StickyHeader>

        <FilterSidebar />

        <AnimatePresence>
          {showFilters && <ShowFilterResult onClick={setShowFilters} />}
        </AnimatePresence>
      </div>
    </TopFilterButtons>
  );
};

export default SRPFilterHandler;

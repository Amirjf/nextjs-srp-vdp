import { useContext } from 'react';
import { ShowFiltersContext } from '../../../context/uiContexts/showFilterDrawer/ShowFiltersContext';
import { ShowFilterContextType } from '../../../context/uiContexts/showFilterDrawer/showFiltersContext_types';
import { Drawer } from '../../common';
import FiltersBody from '../../filters-body/content/FiltersBody';
import FiltersHeaderTitle from '../../filters-header-title/content/FiltersHeaderTitle';
import FiltersHeader from '../../filters-header/content/FiltersHeader';

const FilterSidebar = () => {
  const { showFilters, setShowFilters }: ShowFilterContextType =
    useContext(ShowFiltersContext);

  return (
    <Drawer isOpen={showFilters} setClose={setShowFilters}>
      <div>
        <FiltersHeaderTitle />
        <FiltersHeader />
        <FiltersBody />
      </div>
    </Drawer>
  );
};

export default FilterSidebar;

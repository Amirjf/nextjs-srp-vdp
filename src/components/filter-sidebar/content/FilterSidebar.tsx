import { useContext } from 'react';

import { GoogleContext } from '../../../context/GoogleOptContext';
import { ShowFiltersContext } from '../../../context/uiContexts/showFilterDrawer/ShowFiltersContext';
import { ShowFilterContextType } from '../../../context/uiContexts/showFilterDrawer/showFiltersContext_types';
import { Drawer } from '../../common';
import FiltersBody from '../../filters-body/content/FiltersBody';
import FiltersHeaderTitle from '../../filters-header-title/content/FiltersHeaderTitle';
import FiltersHeader from '../../filters-header/content/FiltersHeader';
import FiltersStatic from '../../filters-static/FiltersStatic';

const FilterSidebar = () => {
  const { showFilters, setShowFilters }: ShowFilterContextType =
    useContext(ShowFiltersContext);

  const { isGoogleBot, loading }: any = useContext(GoogleContext);

  if (!loading && isGoogleBot === true) {
    return <FiltersStatic />;
  }

  return (
    <Drawer isOpen={showFilters} setClose={setShowFilters}>
      <div>
        <FiltersHeaderTitle />
        <FiltersHeader />
        {isGoogleBot === false && <FiltersBody />}
      </div>
    </Drawer>
  );
};

export default FilterSidebar;

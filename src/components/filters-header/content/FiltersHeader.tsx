import React from 'react';
import { ShowFiltersContext } from '../../../context/uiContexts/showFilterDrawer/ShowFiltersContext';
import { ShowFilterContextType } from '../../../context/uiContexts/showFilterDrawer/showFiltersContext_types';
import CloseIcon from '../../common/close-icon/content/CloseIcon';
import FilterTagsContent from '../../filter-tags-content/content/FilterTagsContent';
import { FilterHeaderContainer } from '../styles/filterHeaderContainer.styles';

const FiltersHeader: React.FC = () => {
  const { setShowFilters }: ShowFilterContextType =
    React.useContext(ShowFiltersContext);

  return (
    <FilterHeaderContainer>
      <CloseIcon position="topLeft" onClick={setShowFilters} />
      {/* <FilterTagsContent /> */}
    </FilterHeaderContainer>
  );
};

export default FiltersHeader;

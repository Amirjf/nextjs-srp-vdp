import CarPriceFilter from '../car-price-filter/CarPriceFilter';

import CarTypeFilterStatic from '../car-type-filter/content/CarTypeFilterStatic';
import { Collapsible } from '../common';
import {
  SidebarContainer,
  SidebarInner,
  SideBarWrapper,
} from '../common/sidebar/styles/sidebar.styles';
import { FiltersBodyContainer } from '../filters-body/styles/filtersBody.styles';

const FiltersLoadingStatic = () => {
  return (
    <div>
      <SidebarContainer>
        <SideBarWrapper>
          <SidebarInner>
            <FiltersBodyContainer>
              <Collapsible title="Year"></Collapsible>
              <Collapsible title="Make"></Collapsible>
              <Collapsible title="Model"></Collapsible>
              <Collapsible title="Body"></Collapsible>
              <Collapsible title="Fuel"></Collapsible>
              <Collapsible title="Trim"></Collapsible>
            </FiltersBodyContainer>
          </SidebarInner>
        </SideBarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default FiltersLoadingStatic;

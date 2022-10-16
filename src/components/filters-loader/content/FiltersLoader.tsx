import { FiltersBodyContainer } from '../../filters-body/styles/filtersBody.styles';
import FiltersHeaderTitle from '../../filters-header-title/content/FiltersHeaderTitle';
import FiltersHeader from '../../filters-header/content/FiltersHeader';
import {
  SidebarLoader,
  SidebarLoaderContainer,
  SidebarInnerLoader,
} from '../styles/filtersLoader.styles';
import Spinner from '../../common/spinner/Spinner';
const FiltersLoader = () => {
  return (
    <SidebarLoaderContainer>
      <SidebarLoader>
        <SidebarInnerLoader>
          <FiltersHeaderTitle />
          <FiltersHeader />
          <FiltersBodyContainer>
            <Spinner />
          </FiltersBodyContainer>
        </SidebarInnerLoader>
      </SidebarLoader>
    </SidebarLoaderContainer>
  );
};

export default FiltersLoader;

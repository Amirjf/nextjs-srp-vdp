import { useContext } from 'react';
import { GoogleContext } from '../../../../context/GoogleOptContext';
import FiltersBody from '../../../filters-body/content/FiltersBody';
import FiltersHeaderTitle from '../../../filters-header-title/content/FiltersHeaderTitle';
import FiltersHeader from '../../../filters-header/content/FiltersHeader';
import FiltersStatic from '../../../filters-static/FiltersStatic';
import {
  SideBarWrapper,
  SidebarContainer,
  SidebarInner,
} from '../styles/sidebar.styles';

const Sidebar = () => {
  const { isGoogleBot }: any = useContext(GoogleContext);

  if (isGoogleBot === true) {
    return <FiltersStatic />;
  }

  return (
    <SidebarContainer>
      <SideBarWrapper>
        <SidebarInner>
          <FiltersHeaderTitle />
          <FiltersHeader />
          <FiltersBody />
        </SidebarInner>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

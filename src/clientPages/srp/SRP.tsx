import { TopSearch } from '../../components';
import { MainContent, NotFoundVehicle, Sidebar } from '../../components/common';
import { MainContentContainer } from '../../components/common/main-content/styles/mainContent.styles';
import SrpDisclaimer from '../../components/srp-disclaimer/content/SrpDisclaimer';
import SRPFilterHandler from '../../components/srp-filter-handler/SRPFilterHandler';
import { MainContainer } from '../../global/global/Global.styles';
import useInfiniteVehicles from '../../hooks/useInfiniteVehicles';

const SRP = () => {
  return (
    <>
      <div className="srp-wrapper">
        <SRPFilterHandler />
        {/* <TopSearch /> */}
        <MainContainer>
          <Sidebar />
          {/* {isEmpty && <NotFoundVehicle />} */}
          <MainContentContainer>
            <MainContent />
          </MainContentContainer>
        </MainContainer>
        <SrpDisclaimer />
      </div>
    </>
  );
};

export default SRP;

import React from 'react';
import { MainContainer } from '../../global/global/Global.styles';
import { MainContent, Sidebar } from '../common';
import { MainContentContainer } from '../common/main-content/styles/mainContent.styles';
import SRPFilterHandler from '../srp-filter-handler/SRPFilterHandler';
import TopSearch from '../top-search/content/TopSearch';

const SRPApp = ({ initVehicles }: any) => {
  return (
    <div className="srp-wrapper">
      <SRPFilterHandler />
      <TopSearch />
      <MainContainer>
        <Sidebar />
        {/* {isEmpty && <NotFoundVehicle />} */}
        <MainContentContainer>
          <MainContent vehiclesData={initVehicles} />
        </MainContentContainer>
      </MainContainer>
    </div>
  );
};

export default SRPApp;

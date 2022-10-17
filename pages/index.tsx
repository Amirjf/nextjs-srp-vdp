import axios from 'axios';

import { HelmetProvider } from 'react-helmet-async';

import { MainContent, Sidebar } from '../src/components/common';
import { MainContentContainer } from '../src/components/common/main-content/styles/mainContent.styles';
import { MainContainer } from '../src/global/global/Global.styles';

export default function Home({ initVehicles }: any) {
  // const { data, error } = useSWR(
  //   'https://mbspokane.datgate.com/api/json/vehicles/fl.json?url=inventory/used-certified-new',
  //   fetcher
  // );

  return (
    <>
      <HelmetProvider>
        <div className="srp-wrapper">
          {/* <SRPFilterHandler /> */}
          {/* <TopSearch /> */}
          <MainContainer>
            <Sidebar />
            {/* {isEmpty && <NotFoundVehicle />} */}
            <MainContentContainer>
              <MainContent vehiclesData={initVehicles} />
            </MainContentContainer>
          </MainContainer>
        </div>
      </HelmetProvider>
    </>
  );
}

export async function getStaticProps() {
  let url = `https://mbspokane.datgate.com/api/json/vehicles/fl.json?url=inventory/used-certified-new`;
  const res = await axios.get(url);

  return {
    props: {
      initVehicles: res.data,
    },
  };
}

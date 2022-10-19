import axios from 'axios';
import { GetServerSideProps, GetStaticProps } from 'next';

import { HelmetProvider } from 'react-helmet-async';

import { MainContent, Sidebar } from '../src/components/common';
import { MainContentContainer } from '../src/components/common/main-content/styles/mainContent.styles';
import { MainContainer } from '../src/global/global/Global.styles';
import useQuery from '../src/hooks/useQuery';

export default function Home({ initVehicles }: any) {
  // const { data, error } = useSWR(
  //   'https://mbspokane.datgate.com/api/json/vehicles/fl.json?url=inventory/used-certified-new',
  //   fetcher
  // );

  const params = useQuery();

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

export const getServerSideProps = async ({ param, res }: any) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=159'
  );

  let url = `https://mbmarin.datgate.com/api/json/vehicles/fl.json?url=inventory`;
  const result = await axios.get(url);

  return {
    props: {
      initVehicles: result.data,
    },
  };
};

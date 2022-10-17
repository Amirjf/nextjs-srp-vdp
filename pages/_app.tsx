import { HashRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import { SWRConfig } from 'swr';
import CarClient from '../src/client/client';
import { CarsProvider } from '../src/context/CarsContext';
import { GoogleBotProvider } from '../src/context/GoogleOptContext';
import { ShowFiltersProvider } from '../src/context/uiContexts/showFilterDrawer/ShowFiltersContext';
import { GlobalStyles, theme } from '../src/global/global/Global.styles';
import '../src/global/global/global.css';
import '../src/global/global/card-styles.css';
import '../src/global/global/slider.css';
import '../src/global/global/vdp.css';
import 'keen-slider/keen-slider.min.css';
import useInfiniteVehicles from '../src/hooks/useInfiniteVehicles';
import axios from 'axios';

function MyApp({ Component, pageProps }: any) {
  const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props: any) => props.opacity};
    transition: all 0.3s ease-in-out;
    z-index: 9999;
    background-color: ${(props: any) => props.backgroundColor};
  `;

  // axios.defaults.baseURL = 'https://mbspokane.datgate.com/api/json/vehicles/';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SWRConfig
        value={{ fetcher: (url) => axios(url).then((res) => res.data) }}
      >
        <ModalProvider backgroundComponent={FadingBackground}>
          {/* <GoogleBotProvider> */}
          <CarsProvider>
            <ShowFiltersProvider>
              <Component {...pageProps} />
            </ShowFiltersProvider>
          </CarsProvider>
          {/* </GoogleBotProvider> */}
        </ModalProvider>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;

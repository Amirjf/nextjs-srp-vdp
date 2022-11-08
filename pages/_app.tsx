import styled, { ThemeProvider } from 'styled-components';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import { SWRConfig } from 'swr';
import { CarsProvider } from '../src/context/CarsContext';
import { ShowFiltersProvider } from '../src/context/uiContexts/showFilterDrawer/ShowFiltersContext';
import { GlobalStyles, theme } from '../src/global/global/Global.styles';
import axios from 'axios';
import '../src/global/global/global.css';
import '../src/global/global/card-styles.css';
import '../src/global/global/slider.css';
import '../src/global/global/vdp.css';
import 'keen-slider/keen-slider.min.css';

function MyApp({ Component, pageProps }: any) {
  const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props: any) => props.opacity};
    transition: all 0.3s ease-in-out;
    z-index: 9999;
    background-color: ${(props: any) => props.backgroundColor};
  `;

  axios.defaults.baseURL = 'https://salemnissan.datgate.com/api/json/vehicles/';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SWRConfig
        value={{ fetcher: (url) => axios(url).then((res) => res.data) }}
      >
        <ModalProvider backgroundComponent={FadingBackground}>
          <CarsProvider>
            <ShowFiltersProvider>
              <Component {...pageProps} />
            </ShowFiltersProvider>
          </CarsProvider>
        </ModalProvider>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;

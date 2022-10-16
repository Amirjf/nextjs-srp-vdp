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

function MyApp({ Component, pageProps }) {
  const SWR_OPTIONS = {
    revalidateOnFocus: false,
    fetcher: (url: string) => CarClient.get(url).then((res) => res.data),
  };

  const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props: any) => props.opacity};
    transition: all 0.3s ease-in-out;
    z-index: 9999;
    background-color: ${(props: any) => props.backgroundColor};
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SWRConfig value={SWR_OPTIONS}>
        <ModalProvider backgroundComponent={FadingBackground}>
          <GoogleBotProvider>
            <CarsProvider>
              <ShowFiltersProvider>
                <Component {...pageProps} />
              </ShowFiltersProvider>
            </CarsProvider>
          </GoogleBotProvider>
        </ModalProvider>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;

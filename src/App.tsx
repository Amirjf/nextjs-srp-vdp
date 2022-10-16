import dynamic from 'next/dynamic';
const SRP = dynamic(() => import('./clientPages/srp/SRP'), {
  ssr: false,
});
const VDP = dynamic(() => import('./clientPages/vdp/VDP'), {
  ssr: false,
});
import { HelmetProvider } from 'react-helmet-async';
import SrpVdpTopBanner from './components/srp-vdp-top-banner/SrpVdpTopBanner';
import 'keen-slider/keen-slider.min.css';

function App() {
  return (
    <>
      <HelmetProvider>
        <SRP />
      </HelmetProvider>
    </>
  );
}

export default App;

import { useEffect } from 'react';
import { VdpContainer, VdpContentContainer } from './VDP.styles';
import VehicleInfo from '../../components/VDP/vehicle-info/content/VehicleInfo';
import Slider from '../../components/VDP/slider/content/Slider';
import MobileVehicleInfoSlider from '../../components/VDP/vehicle-info/content/MobileVehicleInfoSlider';
import useVehicle from '../../hooks/useVehicle';
import { MainSection } from '../../components/VDP/slider/styles/slider.styles';
import VehicleAdvantages from '../../components/VDP/vehicle-main/content/VehicleAdvantages';
import VehicleMoreInfo from '../../components/VDP/vehicle-more-info/content/VehicleMoreInfo';
import { useLocation, useParams } from 'react-router-dom';
import VehicleSpecification from '../../components/VDP/vehicle-specification/content/VehicleSpecification';
import VehicleDetails from '../../components/VDP/vehicle-details/content/VehicleDetails';
import RecommendedVehicles from '../../components/VDP/recommended-vehicles/content/RecommendedVehicles';
import { Helmet } from 'react-helmet-async';
import VdpDisclaimer from '../../components/VDP/vdp-disclaimer/VdpDisclaimer';

const VDP = () => {
  const params = useParams();
  const { data, isLoading } = useVehicle(params.id);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) {
    return <div style={{ minHeight: '100vh' }}></div>;
  }

  return (
    <>
      <Helmet>
        <title>{data?.title}</title>
      </Helmet>
      <div
        className="vdp-wrapper"
        style={{ position: 'relative', marginBlock: '1.5rem' }}
      >
        <VdpContainer>
          <MainSection>
            <Slider />
            <VdpContentContainer>
              {data?.description && <VehicleDetails />}
              <VehicleAdvantages />
              <VehicleMoreInfo />
              <VehicleSpecification />
            </VdpContentContainer>
          </MainSection>

          <VehicleInfo />

          <MobileVehicleInfoSlider />
        </VdpContainer>

        <RecommendedVehicles />
        <VdpDisclaimer />
      </div>
    </>
  );
};

export default VDP;

import { AiOutlineHeart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'styled-components';
import { CertifiedLogosContainer } from '../../../card-design2/styles/cardDesign2.styles';

import {
  Card3Container,
  Card3Header,
  Card3ImageLoader,
  CarConditionContainer3,
  CardBody3,
  CardPrice3,
  CardLike3ContainerLoader,
  CardFooter3,
  CardTitleLoader3,
  CardFooterInner3,
  CardAddressContainer3Loader,
  CardBodyContent,
  CardAdressMobile,
  CardPriceLoader,
  LogoLoader,
  CardMileageContainer3Loader,
  CardLoaderAddressLoader3,
} from './cardDesign3Loader.styles';
import { Button } from '../../../../button';
import { VehicleCondLoader } from '../../../card-design2/content/card-design-2-loader/cardLoader.styles';

const CardDesign3Loader = () => {
  const theme = useTheme();

  return (
    <div style={{ border: '1px solid #ADACAC' }}>
      <Card3Container>
        <CarConditionContainer3>
          <VehicleCondLoader>
            <span></span>
            <div>|</div>
            <span></span>
          </VehicleCondLoader>
          <CardLike3ContainerLoader>
            <AiOutlineHeart size={14} color={theme.palette.grey[400]} />
          </CardLike3ContainerLoader>
        </CarConditionContainer3>
        <CardPrice3>
          <CardPriceLoader />

          <CardAdressMobile>
            <GoLocation size={15} />
            <CardLoaderAddressLoader3 />
          </CardAdressMobile>
        </CardPrice3>
        <Card3Header>
          <Card3ImageLoader />
        </Card3Header>
        <CardBody3>
          <CardBodyContent>
            <CardTitleLoader3 />
            <CardMileageContainer3Loader />
          </CardBodyContent>
          <CardAddressContainer3Loader>
            <GoLocation color={theme.palette.grey[400]} size={15} />
            <CardLoaderAddressLoader3 />
          </CardAddressContainer3Loader>
        </CardBody3>
      </Card3Container>

      <CardFooter3>
        <CardFooterInner3>
          <Button
            variant="outlined"
            shape="sharp"
            style={{ border: '1px solid #b6b6b6', fontSize: '0.8em' }}
          >
            Estimate Payment
          </Button>

          <CertifiedLogosContainer>
            <LogoLoader />
          </CertifiedLogosContainer>
        </CardFooterInner3>
      </CardFooter3>
    </div>
  );
};

export default CardDesign3Loader;

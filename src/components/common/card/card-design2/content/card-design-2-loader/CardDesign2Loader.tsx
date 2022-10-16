import { AiOutlineHeart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'styled-components';
import {
  Card2Container,
  Card2Header,
  Card2ImageWrapper,
  CarConditionContainer2,
  CardBody2,
  CardFooter2,
  CardMileage2,
  CardLikeContainer2,
  CardPriceContainer2,
  CertifiedLogosContainer,
  CardAddressContainer,
  FooterRow,
  CardTitleLoader,
  VehicleCondLoader,
} from './cardLoader.styles';

const CardDesign2Loader = () => {
  const theme = useTheme();

  return (
    <Card2Container>
      <Card2Header>
        <Card2ImageWrapper></Card2ImageWrapper>
      </Card2Header>
      <CardBody2>
        <CarConditionContainer2>
          <VehicleCondLoader>
            <span></span>
            <div>|</div>
            <span></span>
          </VehicleCondLoader>
          <CardLikeContainer2>
            <AiOutlineHeart size={18} color={theme.palette.grey[400]} />
          </CardLikeContainer2>
        </CarConditionContainer2>
        <div style={{ height: '2.7rem' }}>
          <CardTitleLoader />
        </div>

        <CardFooter2>
          <FooterRow>
            <CardMileage2 />

            <CardPriceContainer2 />
          </FooterRow>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: 36,
            }}
          >
            <CardAddressContainer>
              <GoLocation size={15} />
              <span></span>
            </CardAddressContainer>
            <CertifiedLogosContainer />
          </div>
        </CardFooter2>
      </CardBody2>
    </Card2Container>
  );
};

export default CardDesign2Loader;

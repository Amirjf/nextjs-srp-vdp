import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { mediaQueries } from '../../../../../global/utils/mediaQueries';
import BlurImage from '../../../blur-image/BlurImage';

type VehicleCondProps = {
  cond: string;
};

export const Card2Container = styled.div(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  borderRadius: 11,
  height: 'auto',
  boxShadow: '0px 4.47px 11.1px 0px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
export const Card2Header = styled.div({
  padding: 0,
  borderRadius: 11,
  position: 'relative',
});
export const Card2ImageWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  aspectRatio: '2.8 / 1.5',
});
export const Card2Image = styled(BlurImage)(({ theme }) => ({
  width: '100%',
  aspectRatio: '2.8 / 1.5',
  height: 'auto',
  objectFit: 'cover',
  borderTopLeftRadius: 11,
  borderTopRightRadius: 11,
  cursor: 'pointer',
}));

export const CardTitle2 = styled.h2({
  fontWeight: 600,
  fontSize: 18,
  lineHeight: 1.5,
  height: '2.5rem',
  alignItems: 'flex-start',
  textAlign: 'left',
  paddingTop: 2,
  cursor: 'pointer',
  [mediaQueries('xs')]: {
    fontSize: 17,
    display: 'flex',
    alignItems: 'flex-start',
    fontWeight: 600,
  },
  [mediaQueries('sm')]: {
    fontSize: 15,
    height: '2.7rem',
    display: 'flex',
    alignItems: 'flex-start',
    fontWeight: 600,
  },
  [mediaQueries('md')]: {
    fontSize: 15,
    display: 'flex',
    alignItems: 'flex-start',
    fontWeight: 600,
  },
  [mediaQueries('lg')]: {
    fontSize: 17,
    display: 'flex',
    alignItems: 'flex-start',
    fontWeight: 600,
  },
});
export const VehicleCond2 = styled.div<VehicleCondProps>(
  ({ theme: { palette }, cond }) => ({
    ...palette.vehicleCond[cond],
    textTransform: 'uppercase',
    fontWeight: 600,
  })
);

export const CardLikeContainer2 = styled.div({
  cursor: 'pointer',
  zIndex: 9,
  display: 'flex',
  alignItems: 'center',
  transform: 'scale(1.2)',
  width: 30,
  height: 30,
  justifyContent: 'flex-end',
  borderRadius: '50%',
});
export const CarConditionContainer2 = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 5,
  fontSize: 14,
  paddingTop: '.5rem',
  paddingBottom: '.2rem',
});
export const StockNumnber2 = styled.span(({ theme: { palette } }) => ({
  ...palette.vehicleCardsStockNumber,
  fontWeight: 600,
  display: 'flex',
  columnGap: 5,
  '> svg': {
    display: 'none',
  },
  '&:hover > svg': {
    display: 'block',
  },
}));

export const CardBody2 = styled.div({
  padding: '0.4em 0.9em',
  height: '100%',
});
export const CardFooter2 = styled.div({
  // paddingBottom: '.5rem',
});

export const CardMileage2 = styled.span(({ theme }) => ({
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: 14,
  letterSpacing: 0.2,
  color: theme.palette.grey[400],
}));
export const CardPriceContainer2 = styled.p({
  fontWeight: 600,
  fontSize: 18,
  letterSpacing: 1,
  textAlign: 'right',
  whiteSpace: 'nowrap',
});
export const CertifiedLogosContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  columnGap: 5,
  img: {
    width: 100,
    height: 'auto',
  },
  [mediaQueries('xl')]: {
    img: {
      width: 90,
      height: 'auto',
    },
  },
});
export const CardAddressContainer = styled.a(({ theme }) => ({
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: 10,
  letterSpacing: 0.7,
  color: theme.palette.grey[400],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: 8,
}));
export const FooterRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 20,
  paddingTop: 12,
});

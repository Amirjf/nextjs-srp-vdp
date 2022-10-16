import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { mediaQueries } from '../../../../../../global/utils/mediaQueries';

type VehicleCondProps = {
  cond: string;
};

export const Card3Container = styled.div({
  position: 'relative',
  borderRadius: 4,
  padding: '1em 0.9em',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
});

export const Card3Header = styled.div({
  padding: 0,
  order: 1,
});
export const CardTitleLoader3 = styled.div({
  width: '60%',
  height: 20,
  background: '#f2f2f2',
  borderRadius: 3,
});
export const VehicleCondLoader3 = styled.div({
  display: 'flex',
  width: '49%',
  columnGap: 7,
  alignItems: 'center',
  span: {
    width: '28%',
    height: 12,
    background: '#f2f2f2',
    borderRadius: 3,
  },
  'span:first-child': {
    width: '20%',
  },
});

export const CardPriceLoader = styled.div({
  width: '50%',
  height: 17,
  background: '#f2f2f2',
  borderRadius: 3,
});
export const CardLoaderAddressLoader3 = styled.div({
  width: '60%',
  height: 12,
  background: '#f2f2f2',
  borderRadius: 3,
});

export const CardBody3 = styled.div({
  display: 'flex',
  height: '3rem',
  justifyContent: 'space-between',
  flexDirection: 'column',
  order: 0,

  [mediaQueries('lg')]: {
    order: 2,
    paddingBottom: '7rem',
    paddingTop: '1rem',
    height: '5rem',
  },
});

export const CardBodyContent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '1rem',
  rowGap: 10,
  flexDirection: 'column',
});
export const Card3ImageLoader = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  aspectRatio: '3.2 / 1.8',
  background: '#f2f2f2',
});

export const CardTitle3 = styled.div({
  // lineHeight: 1.5,
  // alignItems: 'flex-end',
  // textAlign: 'left',
  // paddingBottom: 10,
  // [mediaQueries('xs')]: {
  //   fontSize: 18,
  //   display: 'flex',
  //   alignItems: 'flex-end',
  //   fontWeight: 600,
  // },
  // [mediaQueries('sm')]: {
  //   fontSize: 17,
  //   display: 'flex',
  //   alignItems: 'flex-end',
  //   fontWeight: 600,
  //   paddingBottom: 10,
  // },
  // [mediaQueries('md')]: {
  //   fontSize: 15,
  //   display: 'flex',
  //   alignItems: 'flex-end',
  //   fontWeight: 600,
  //   paddingBottom: 10,
  // },
  // [mediaQueries('lg')]: {
  //   fontSize: 19,
  //   display: 'flex',
  //   alignItems: 'flex-end',
  //   fontWeight: 600,
  // },
});
export const VehicleCond3Loader = styled.div({
  background: '#f2f2f2',
  borderRadius: 3,
  width: '50%',
});
export const LogoLoader = styled.div({
  background: '#e2e2e2',
  borderRadius: 3,
  width: 70,
  height: 20,
});

type CardLikeContainer3Props = {
  active?: boolean;
};
export const CardLike3ContainerLoader = styled.div<CardLikeContainer3Props>(
  ({ theme }) => ({
    cursor: 'pointer',
    border: `solid 1px ${theme.palette.grey[400]}`,
    zIndex: 9,
    display: 'flex',
    alignItems: 'center',
    width: 26,
    height: 26,
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(355,355,355,0.3)',
  })
);
export const CarConditionContainer3 = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 5,
  fontSize: 12,
  fontWeight: 600,
});
export const StockNumber3 = styled.div(({ theme: { palette } }) => ({
  ...palette.vehicleCardsStockNumber,
  fontWeight: 600,
}));

export const CardPrice3 = styled.p({
  display: 'flex',
  flexDirection: 'column',
  order: 3,
  paddingBottom: '.5rem',
  paddingTop: '.4rem',
  letterSpacing: 1,
  [mediaQueries('lg')]: {
    order: 1,
  },
});

export const CardMileageContainer3Loader = styled.span({
  display: 'none',
  [mediaQueries('lg')]: {
    display: 'block',
    background: '#f2f2f2',
    borderRadius: 3,
    width: '50%',
    height: 10,
  },
});
export const CardMobileMileage3 = styled.span({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingTop: '.7rem',
  [mediaQueries('lg')]: {
    display: 'none',
  },
});
export const CardFooter3 = styled.div({});
export const CardFooterInner3 = styled.div({
  width: '100%',
  padding: '.5rem .5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: '1rem',
  backgroundColor: '#fff',
  [mediaQueries('lg')]: {
    backgroundColor: '#F9F9F9',
    justifyContent: 'space-between',
  },
});
export const VehicleAddress3 = styled.span({
  display: 'none',
  [mediaQueries('lg')]: {
    fontSize: '0.7em',
    textAlign: 'left',
    color: '#ADACAC',
    display: 'block',
  },
});
export const CardExtColorsContainer3 = styled.span({
  display: 'none',
  [mediaQueries('lg')]: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '1rem',
  },
});

export const CardExtColorsMobile3 = styled.span({
  display: 'flex',
  justifyContent: 'flex-end',
  [mediaQueries('lg')]: {
    display: 'none',
  },
});
export const CardAddressContainer3Loader = styled.div({
  display: 'none',
  [mediaQueries('lg')]: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
  },
});
export const CardAdressMobile = styled.div({
  paddingTop: 10,
  display: 'flex',
  alignItems: 'center',
  columnGap: 10,
  [mediaQueries('lg')]: {
    display: 'none',
  },
});

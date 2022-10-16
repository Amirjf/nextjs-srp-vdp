import styled from 'styled-components';
import { mediaQueries } from '../../../../../global/utils/mediaQueries';
import BlurImage from '../../../blur-image/BlurImage';

type VehicleCondProps = {
  cond: string;
};

export const Card3Container = styled.div({
  position: 'relative',
  borderTopRightRadius: 4,
  borderTopLeftRadius: 4,
  padding: '1em 0.9em',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
});
export const Card3Header = styled.div({
  padding: 0,
  order: 1,
  position: 'relative',
});
export const LabelsContainer = styled.div({});

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
    height: '9rem',
  },
});

export const CardBodyContent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '1rem',
});
export const Card3ImageWrapper = styled.div({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  width: '100%',
  overflow: 'hidden',
  aspectRatio: '3.2 / 1.8',
});
export const Card3Image = styled(BlurImage)({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  cursor: 'pointer',
});

export const CardTitle3 = styled.h3({
  fontWeight: 600,
  fontSize: 18,
  lineHeight: 1.5,
  alignItems: 'flex-end',
  textAlign: 'left',
  paddingBottom: 10,
  cursor: 'pointer',
  [mediaQueries('xs')]: {
    fontSize: 18,
    display: 'flex',
    alignItems: 'flex-end',
    fontWeight: 600,
  },
  [mediaQueries('sm')]: {
    fontSize: 17,
    display: 'flex',
    alignItems: 'flex-end',
    fontWeight: 600,
    paddingBottom: 10,
  },
  [mediaQueries('md')]: {
    fontSize: 15,
    display: 'flex',
    alignItems: 'flex-end',
    fontWeight: 600,
    paddingBottom: 10,
  },
  [mediaQueries('lg')]: {
    fontSize: 18,
    display: 'flex',
    alignItems: 'flex-end',
    fontWeight: 600,
  },
});
export const VehicleCond3 = styled.div<VehicleCondProps>(
  ({ theme: { palette }, cond }) => ({
    ...palette.vehicleCond[cond],
    textTransform: 'uppercase',
    fontWeight: 600,
  })
);

type CardLikeContainer3Props = {
  active?: boolean;
};
export const CardLikeContainer3 = styled.div<CardLikeContainer3Props>(
  ({ theme, active }) => ({
    cursor: 'pointer',
    border: `solid 1px ${
      active ? theme.palette.primary.main : theme.palette.grey[400]
    }`,
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
  fontWeight: 600,
  fontSize: 22,
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

export const CardMileageContainer3 = styled.span(({ theme: { palette } }) => ({
  display: 'none',
  [mediaQueries('lg')]: {
    display: 'block',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: palette.grey[400],
  },
}));
export const CardMobileMileage3 = styled.span(({ theme: { palette } }) => ({
  color: palette.grey[400],
  display: 'flex',
  fontSize: 13,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  fontWeight: 500,
  paddingTop: '.7rem',
  [mediaQueries('lg')]: {
    display: 'none',
  },
}));
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
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
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
export const CardAddressContainer3 = styled.a(({ theme: { palette } }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: 10,
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: 13,
  color: palette.grey[400],
}));
export const CardAdressMobile = styled.a({
  paddingTop: 15,
  [mediaQueries('lg')]: {
    display: 'none',
  },
});

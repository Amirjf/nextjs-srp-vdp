import styled from 'styled-components';
import { mediaQueries } from '../../../../../global/utils/mediaQueries';
import BlurImage from '../../../blur-image/BlurImage';

type VehicleCondProps = {
  cond: string;
};

export const CardContainer = styled.div(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  borderRadius: 15,
  height: 'auto',
  zIndex: 2,
  boxShadow: '0px 4.47px 11.1px 0px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '100%',
}));

export const CardHeader = styled.div`
  padding: 0;
  position: relative;
`;

export const CardImageWrapper = styled.div({
  aspectRatio: '3.2 / 1.8',
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  width: '100%',
});

export const CardImage = styled(BlurImage)({
  width: '100%',
  height: 'auto',
  cursor: 'pointer',
  objectFit: 'cover',
});

export const CardLikeContainer = styled.span({
  cursor: 'pointer',
  position: 'absolute',
  top: 17,
  right: 17,
  zIndex: 9,
  display: 'flex',
  alignItems: 'center',
  transform: 'scale(1.3)',
  width: 30,
  height: 30,
  justifyContent: 'center',
  borderRadius: '50%',
  background: 'red',
  backgroundColor: 'rgba(255,255,255,0.3)',
  color: '#000',
  [mediaQueries('md')]: {
    position: 'relative',
    top: 'unset',
    right: 'unset',
    backgroundColor: 'unset',
  },
  [mediaQueries('lg')]: {
    position: 'relative',
    top: 'unset',
    right: 'unset',
    backgroundColor: 'unset',
  },
});
export const CardBody = styled.div({
  padding: '5px 18px',
});

export const CardFooter = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '8px 8px 9px 8px',
  flexDirection: 'column',
  alignItems: 'center',
  [mediaQueries('md')]: {
    flexDirection: 'row',
  },
  [mediaQueries('lg')]: {
    flexDirection: 'row',
  },
});
export const CardAction = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
  [mediaQueries('md')]: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  [mediaQueries('lg')]: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  a: {
    width: '100%',
  },
});

export const CardPrice = styled.p(({ theme }) => ({
  ...theme.typography.h4,
  display: 'flex',
  justifyContent: 'space-between',
}));

export const CardTitle = styled.h2({
  fontWeight: '600',
  fontSize: 20,
  height: 54,
  alignItems: 'flex-start',
  paddingTop: 10,
  textAlign: 'left',
  cursor: 'pointer',
  [mediaQueries('xs')]: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'flex-start',
  },
  [mediaQueries('sm')]: {
    fontSize: 17,
    display: 'flex',
    alignItems: 'flex-start',
  },
  [mediaQueries('md')]: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'flex-start',
  },
  [mediaQueries('lg')]: {
    fontSize: 19,
    display: 'flex',
    alignItems: 'flex-start',
  },
});
export const CardSubtitle = styled.span(({ theme }) => ({
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: 15,
  color: theme.palette.grey[600],
}));
export const CardSubDetail = styled.div(({ theme }) => ({
  ...theme.typography.subtitle2,
}));
export const CarConditionContainer = styled.div(({ theme }) => ({
  display: 'flex',
  gap: 5,
  fontSize: 14,
  paddingTop: 4,
}));
export const VehicleCond = styled.div<VehicleCondProps>(
  ({ theme: { palette }, cond }) => ({
    ...palette.vehicleCond[cond],
    textTransform: 'uppercase',
    fontWeight: 500,
  })
);
export const VehicleStockContainer = styled.div(({ theme: { palette } }) => ({
  color: palette.grey[400],
  fontWeight: 500,
}));

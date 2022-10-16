import styled from 'styled-components';

type VehicleCondProps = {
  cond: string;
};
//   from {
//     opacity: .4;
//   }
//   to {
//     opacity: 1;
//   }

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
  height: '100%',
  aspectRatio: '3.2 / 1.9',
  background: '#f2f2f2',
});
export const Card2Image = styled.img({
  width: '100%',
  aspectRatio: '3.2 / 1.9',
  height: 'auto',
  objectFit: 'cover',
  borderTopLeftRadius: 11,
  borderTopRightRadius: 11,
});

export const CardTitleLoader = styled.div({
  width: '50%',
  height: 17,
  background: '#f2f2f2',
  borderRadius: 3,
});

export const VehicleCondLoader = styled.div({
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
  fontWeight: 600,
});

export const CardBody2 = styled.div({
  padding: '0.4em 0.9em',
  height: '100%',
});
export const CardFooter2 = styled.div({});

export const CardMileage2 = styled.span(({ theme }) => ({
  width: '28%',
  height: 12,
  background: '#f2f2f2',
  borderRadius: 3,
}));
export const CardPriceContainer2 = styled.div({
  width: '28%',
  height: 15,
  background: '#f2f2f2',
  borderRadius: 3,
});
export const CertifiedLogosContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  columnGap: 5,
  width: '20%',
  height: 20,
  background: '#f2f2f2',
  borderRadius: 3,
});
export const CardAddressContainer = styled.div(({ theme }) => ({
  letterSpacing: 0.7,
  color: theme.palette.grey[400],
  display: 'flex',
  alignItems: 'center',
  columnGap: 8,
  width: '70%',
  '> span': {
    width: '70%',
    height: 10,
    background: '#f2f2f2',
    borderRadius: 3,
  },
}));
export const FooterRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 20,
  paddingTop: 12,
});

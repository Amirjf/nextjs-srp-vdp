import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';
export const BannerAd = styled.a``;

export const VerticalBannerContainer = styled.article(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  borderRadius: 11,
  height: '100%',
  minHeight: '400px',
  boxShadow: '0px 4.47px 11.1px 0px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const VerticalHeaderContainer = styled.span({
  pointerEvents: 'none',
  cursor: 'default',
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});
export const VerticalBannerBody = styled.div({
  padding: 10,
  fontSize: 14,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '> div': {
    paddingBottom: 20,
  },
});
export const VerticalBannerFooter = styled.div({
  position: 'absolute',
  bottom: 10,
  left: 15,
  fontWeight: 400,
  fontSize: 14,
});
export const BannerDisclaimerContainer = styled.div({
  position: 'absolute',
  bottom: 0,
  left: 3,
  width: 200,
  fontSize: 14,
});
export const ExpiresDateContainer = styled.span({
  position: 'absolute',
  bottom: 18,
  right: 18,
  fontWeight: 400,
  fontSize: 14,
  'text-shadow': '0 0 2px #fff',
  '-moz-text-shadow': '0 0 2px #fff',
  '-webkit-text-shadow': '0 0 2px #fff',
});
export const BannerInfoContainer = styled.div({
  paddingBottom: '3rem',
  [mediaQueries('md')]: {
    paddingBottom: '0',
  },
});

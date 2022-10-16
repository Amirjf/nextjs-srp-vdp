import styled from 'styled-components';
import { mediaQueries } from '../../global/utils/mediaQueries';

export const VdpContainer = styled.main({
  width: 'auto',
  display: 'grid',
  gridTemplateColumns: '2fr',
  paddingTop: '2.8rem',
  maxWidth: 1440,
  [mediaQueries('lgTab')]: {
    gridTemplateColumns: '2fr 1fr',
    columnGap: '1.2vw',
    paddingTop: '2.6rem',
  },
  [mediaQueries('sm')]: {
    margin: '0 20px',
  },
  [mediaQueries('lg')]: {
    margin: '0 50px',
  },
  [mediaQueries('xxl')]: {
    margin: '0 auto',
  },
});
export const VehicleInfoDesktopContainer = styled.div({
  display: 'none',
  [mediaQueries('lgTab')]: {
    display: 'block',
  },
});

export const VdpContentContainer = styled.div({
  margin: '0 10px',
  [mediaQueries('lgTab')]: {
    margin: '0',
  },
});

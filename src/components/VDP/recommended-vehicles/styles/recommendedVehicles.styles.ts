import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';

export const RecommendedVehiclesContainer = styled.section({
  maxWidth: 1440,
  margin: '0 10px',
  [mediaQueries('lgTab')]: {
    paddingTop: '2.6rem',
  },
  [mediaQueries('sm')]: {
    margin: '0 30px',
  },
  [mediaQueries('lg')]: {
    margin: '0 50px',
  },
  [mediaQueries('xxl')]: {
    margin: '0 auto',
  },
});

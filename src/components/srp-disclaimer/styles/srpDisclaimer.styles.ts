import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

export const SrpDisclaimerContainer = styled.span({
  padding: '.5rem .5rem .5rem .2rem',
  [mediaQueries('lg')]: {
    display: 'flex',
    width: '79%',
    float: 'right',
  },
  [mediaQueries('xxl')]: {
    width: '84%',
  },
});

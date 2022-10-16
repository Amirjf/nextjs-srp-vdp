import styled from 'styled-components';
import { mediaQueries } from '../../global/utils/mediaQueries';

export const TopFilterButtons = styled.div({
  display: 'block',
  [mediaQueries('lg')]: {
    display: 'none',
  },
});

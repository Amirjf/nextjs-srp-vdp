import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

export const SortBtnContainer = styled.div({
  width: '100%',
  [mediaQueries('sm')]: {
    width: '100%',
  },
  [mediaQueries('md')]: {
    width: '100%',
  },
  [mediaQueries('lg')]: {
    width: 'auto',
  },
});

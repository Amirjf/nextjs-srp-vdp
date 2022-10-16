import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

export const FilterResultContainer = styled.div(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  zIndex: 9999,
  width: '100%',
  height: 68,
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [mediaQueries('md')]: {
    display: 'none',
  },
}));

import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';

export const NotFoundContainer = styled.div({
  padding: 30,
  margin: '0 auto',
  justifyConten: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  maxWidth: '100%',
  [mediaQueries('xl')]: {
    maxWidth: '80%',
  },
});

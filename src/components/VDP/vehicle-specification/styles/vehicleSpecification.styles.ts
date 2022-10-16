import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';

export const Heading = styled.h5({
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: 16,
  color: 'rgba(89, 80, 80, 1)',
  paddingBottom: '.8rem',
});
export const SubContent = styled.li({
  color: 'rgba(89, 80, 80, 1)',
});

export const ContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px 30px;
  padding-left: 30px;
`;
export const ContentItem = styled.div({
  width: '100%',
  marginBottom: '2%',
  [mediaQueries('md')]: {
    width: '45%',
  },
  [mediaQueries('lgTab')]: {
    width: '40%',
  },
  [mediaQueries('lg')]: {
    width: '28%',
  },
});

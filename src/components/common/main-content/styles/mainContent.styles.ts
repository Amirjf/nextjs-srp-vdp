import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';

export const BannerAd = styled.a({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  [mediaQueries('md')]: {
    flexDirection: 'row',
  },
  '> span': {
    display: 'flex',
  },
});

export const MainContentContainer = styled.div({
  fontFamily: 'Arial',
  paddingBottom: 10,
  display: 'grid',
  width: '100%',
  height: '100%',
  columnGap: 17,
  rowGap: 20,
  padding: '1.2rem 1rem',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoFlow: 'row dense',
  [`> ${BannerAd}`]: {
    [mediaQueries('sm')]: {
      gridColumn: '1 / span 2',
    },
    [mediaQueries('md')]: {
      gridColumn: '1 / span 2',
    },
    [mediaQueries('lgTab')]: {
      gridColumn: '1 / span 3',
    },
    [mediaQueries('lg')]: {
      gridColumn: '1 / span 3',
    },
    [mediaQueries('xxl')]: {
      gridColumn: '1 / span 4',
    },
    [mediaQueries('xxxl')]: {
      gridColumn: '1 / span 5',
    },
  },
  [mediaQueries('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [mediaQueries('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [mediaQueries('lgTab')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [mediaQueries('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [mediaQueries('xxl')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [mediaQueries('xxxl')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
});

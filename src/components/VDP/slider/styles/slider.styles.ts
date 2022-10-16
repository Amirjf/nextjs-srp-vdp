import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';

export const MainSection = styled.div({
  maxWidth: 990,
  minWidth: 0,
});
export const MainSlider = styled.div({});
export const SlideNumberIndicator = styled.div({
  position: 'absolute',
  zIndex: 99,
  top: 35,
  left: 0,
  color: '#000000a3',
  fontWeight: 400,
  fontSize: 12,
  backgroundColor: 'rgba(255,255,255,.7)',
  width: 80,
  height: 30,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [mediaQueries('md')]: {
    fontSize: 16,
    width: 120,
    height: 40,
  },
  '> span': {
    fontWeight: 700,
    paddingLeft: 5,
  },
});

export const SeeMoreContainer = styled.span({
  position: 'absolute',
  zIndex: 99,
  bottom: 26,
  right: 30,
  color: '#fff',
  fontWeight: 200,
  fontSize: 13,
  cursor: 'zoom-in',

  '> p': {
    position: 'relative',
    zIndex: 1,
    padding: 5,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '-20px',
    left: 0,
    width: '200%',
    height: '200%',
    background: 'inherit',
    backgroundAttachment: 'fixed',
    filter: 'blur(4px)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.55)',
    borderRadius: 5,
  },
});

export const GalleryContainer = styled.div({
  display: 'flex',
  overflowY: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  overscrollBehaviorY: 'contain',
  scrollSnapAlign: 'center',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
export const Gallery = styled.div({
  margin: '0 16px',
  display: 'grid',
  gridAutoFlow: 'row',
  gap: '1rem',
  width: 'calc(440px + 1rem)',
  padding: '0 0.25rem',
  height: '100vh',

  [mediaQueries('md')]: {
    width: 'calc(790px + 1rem)',
  },
});
export const Thumbnails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  overflowY: 'scroll',
  height: '94vh',
  paddingLeft: 8,
  direction: 'rtl',
  position: 'sticky',
  top: 10,
  '::-webkit-scrollbar': {
    width: 1,
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#fff',
  },

  img: {
    width: 45,
    height: 45,
    cursor: 'pointer',
    objectFit: 'scale-down',
    borderRadius: 4,
  },
});

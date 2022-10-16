import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';

export const SidebarContainer = styled.div(({}) => ({
  width: '19rem',
  position: 'relative',
  display: 'none',
  borderTop: '1px solid #eee',
  [mediaQueries('xs')]: {
    display: 'none',
  },
  [mediaQueries('sm')]: {
    display: 'none',
  },
  [mediaQueries('md')]: {
    display: 'none',
  },
  [mediaQueries('lg')]: {
    display: 'block',
  },
}));
export const SideBarWrapper = styled.div({
  height: '100vh',
  background: '#fff',
  overflowY: 'scroll',
  position: 'sticky',
  top: 0,
  bottom: 0,
  width: 'inherit',
  paddinRight: 6,
  '::-webkit-scrollbar-track': {
    backgroundColor: '#fff',
    transition: 'all 1s ease',
  },
  transition: 'all 1s ease',

  '::-webkit-scrollbar': {
    width: 4,
    position: 'absolute',
    transition: 'all 1s ease',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#fff',
    transition: 'all 1s ease',
  },

  '&:hover::-webkit-scrollbar': {
    width: 4,
  },

  '&:hover::-webkit-scrollbar-thumb': {
    backgroundColor: '#000',
  },
});

export const SidebarInner = styled.div({
  position: 'absolute',
  inset: '0',
});

import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

export const SidebarLoaderContainer = styled.div({
  display: 'none',

  [mediaQueries('lg')]: {
    display: 'block',
    width: 300,
    position: 'relative',
  },
  [mediaQueries('xl')]: {
    display: 'block',
    width: 440,
    position: 'relative',
  },
});

export const SidebarLoader = styled.div`
  height: 100vh;
`;
export const SidebarInnerLoader = styled.div``;
export const FilterLoader = styled.div``;

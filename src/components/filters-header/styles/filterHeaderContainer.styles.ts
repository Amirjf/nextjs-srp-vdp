import styled from 'styled-components';

export const FilterHeaderContainer = styled.div(({}) => ({
  overflow: 'hidden',
  // height: 100,
  overflowY: 'auto',
  // paddingBottom: 40,

  '::-webkit-scrollbar-track': {
    display: 'none',
  },

  '::-webkit-scrollbar': {
    display: 'none',
  },

  '::-webkit-scrollbar-thumb': {
    display: 'none',
  },
}));

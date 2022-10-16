import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

export const TopSearchContainer = styled.div(({ theme }) => ({
  columnGap: 40,
  backgroundColor: theme.palette.common.white,
  padding: '30px 20px 30px 5px',
  display: 'none',
  [mediaQueries('lg')]: {
    display: 'flex',
    alignItems: 'center',
  },
}));
export const SearchResult = styled.div(({ theme }) => ({
  width: '19rem',
}));
export const TopSearchField = styled.div(({ theme }) => ({
  flexGrow: 1,
}));

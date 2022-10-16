import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

type SearchConatinerProps = {
  scrollState?: string;
};
export const SearchContainer = styled.div<SearchConatinerProps>(
  ({ theme }) => ({
    width: '100%',
    alignItems: 'center',
    paddingInline: 20,
    paddingBlock: 10,
    zIndex: 9,
    backgroundColor: theme.palette.common.black,
    [mediaQueries('lg')]: {
      width: 400,
    },
    [mediaQueries('xl')]: {
      width: 400,
    },
  })
);

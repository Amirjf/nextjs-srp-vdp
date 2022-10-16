import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';
import { Space } from '../../../common/space';

export const MoreInfoVal = styled.div({
  fontWeight: 600,
});
export const InfoContainer = styled(Space)({
  columnGap: '6%',
  rowGap: 20,
  '> div': {
    width: '100%',
    [mediaQueries('lgTab')]: {
      width: '40%',
    },
  },
});

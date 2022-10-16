import styled from 'styled-components';
import { StyledSpaceProps } from '../content/space_types';

export const StyledSpace = styled.div<StyledSpaceProps>(
  ({ align, direction, wrap, spacing, alignItems }) => ({
    display: direction === 'horizontal' ? 'flex' : 'inline-flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    columnGap: 15,
    justifyContent: align,
    alignItems,
  })
);

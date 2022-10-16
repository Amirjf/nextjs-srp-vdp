import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';
import { StyledCloseIconProps } from '../content/closeIcon_types';

const positionTranslator: { [key: string]: any } = {
  topLeft: { inset: 7 },
  topRight: { top: '1.4rem', right: '2.2rem' },
};

export const StyledCloseIcon = styled.span<StyledCloseIconProps>(
  ({ theme, position }) => ({
    ...positionTranslator[position],
    position: 'absolute',
    width: 10,
    height: 10,
    cursor: 'pointer',
    [mediaQueries('md')]: {
      display: 'none',
    },
    [mediaQueries('lg')]: {
      display: 'none',
    },
    [mediaQueries('xl')]: {
      display: 'none',
    },
    [mediaQueries('xxl')]: {
      display: 'none',
    },
  })
);

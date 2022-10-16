import styled from 'styled-components';
import { mediaQueries } from '../../../../../../../global/utils/mediaQueries';

type Card2BadgeContainerProps = {
  top?: string;
};

export const Card2BadgeContainer = styled.span<Card2BadgeContainerProps>(
  ({ theme: { palette }, top }) => ({
    background: palette.primary.main,
    position: 'absolute',
    left: '-10px',
    top: top ? top : '14%',
    width: 'max-content',
    zIndex: 2,
    color: palette.common.white,
    fontSize: 12,
    padding: '7px 6px',
    textTransform: 'uppercase',
    borderRadius: 2,
    cursor: 'help',
    [mediaQueries('sm')]: {},
  })
);

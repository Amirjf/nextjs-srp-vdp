import styled from 'styled-components';

type CardBadgeContainerProps = {
  top?: string;
};

export const CardBadgeContainer = styled.span<CardBadgeContainerProps>(
  ({ theme: { palette }, top }) => ({
    background: palette.primary.main,
    position: 'absolute',
    left: 0,
    top: top ? top : '14%',
    width: 'max-content',
    zIndex: 99,
    color: palette.common.white,
    fontSize: 12,
    padding: '3px 4px',
    textTransform: 'uppercase',
    cursor: 'help',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  })
);

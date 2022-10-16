import styled from 'styled-components';
import { DividerProps } from '../content/divider_types';
import { handleAlign, handleTextAlign } from '../utils/utils';

export const StyledDivider = styled.hr<DividerProps>(
  ({ theme, middle, color }) => ({
    width: '100%',
    borderWidth: 1,
    borderColor: color ? color : theme.palette.grey['400'],
    margin: '14px 0',
    justifyContent: 'center',
  })
);

export const DividerContainer = styled.div<DividerProps>(
  ({ align, width }: any) => ({
    ...handleAlign[align],
    width: '80%',
    display: 'flex',
  })
);

export const DividerWithTextContainer = styled.div<DividerProps>(
  ({ theme, orientation }) => ({
    display: 'flex',
    margin: '16px 0',
    color: theme.palette.grey['400'],
    fontWeight: 500,
    fontSize: 16,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    ':before,:after': {
      content: '""',
      position: 'relative',
      top: '50%',
      borderTop: '1px solid transparent',
      borderTopColor: 'inherit',
      borderBottom: 0,
      transform: 'translateY(50%)',
    },
    ':before': {
      ...handleTextAlign['center'].before,
      content: '""',
    },
    ':after': {
      content: '""',
      ...handleTextAlign['center'].after,
    },
  })
);

export const DividerText = styled.span<DividerProps>`
  display: inline-block;
  padding: 0 1em;
`;

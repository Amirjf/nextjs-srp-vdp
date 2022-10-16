import styled from 'styled-components';
import { ButtonProps } from '../content/button_types';

const buttonShape = {
  sharp: 2,
  circle: '30%',
};

export const StyledButton = styled.button<ButtonProps>(
  ({ theme, variant, scale, block, shape }) => ({
    ...theme.sizes.button[scale],
    ...theme.typography.button[scale],
    display: 'inline-block',
    width: block && '100%',
    cursor: 'pointer',
    border: `${
      variant === 'outlined'
        ? `solid 1px ${theme.palette.common.black}`
        : 'transparent'
    }`,

    backgroundColor:
      variant === 'filled' ? theme.palette.primary.main : 'transparent',

    color:
      variant === 'filled'
        ? theme.palette.common.white
        : theme.palette.common.black,
    borderRadius: shape ? buttonShape[shape] : theme.general.borderRadius.md,
    whiteSpace: 'nowrap',
    transition: 'all 0.3s',
    '&:hover': {
      color:
        variant === 'text'
          ? theme.palette.primary.main
          : theme.palette.common.white,
      backgroundColor:
        variant === 'text' ? 'transparent' : theme.palette.primary.main,
    },

    '&:disabled': {
      color: '#00000040',
      borderColor: '#d9d9d9',
      background: '#f5f5f5',
      textShadow: 'none',
      boxShadow: 'none',
    },
  })
);

export const ButtonIcon = styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  marginRight: 5,
});
export const ButtonText = styled.span({
  display: 'flex',
  alignItems: 'center',
});

import styled from 'styled-components';
import {
  InputContainerProps,
  InputLabelProps,
  StyledInputProps,
} from '../content/input_types';

const handleInputBorder = {
  outlined: 'solid 1px ',
};

export const StyledInput = styled.input<StyledInputProps>(
  ({ theme, scale, rounded, color, variant, isInvalid }: StyledInputProps) => ({
    ...theme.sizes[scale],
    ...theme.typography.input,
    width: '100%',
    color: color ? color : theme.palette.common.white,
    outline: 'none',
    paddingLeft: 10,
    border: isInvalid ? 'solid 1px red' : 'solid 1px #ADACAC',
    borderRadius: rounded
      ? theme.general.borderRadius.lg
      : theme.general.borderRadius.sm,
    transition: theme.general.transition,
    background:
      variant === 'filled' ? theme.palette.common.bodyColor : 'transparent',

    '::placeholder': {
      opacity: 0.6,
      color: theme.palette.grey['200'],
    },

    ':disabled': {
      color: '#00000040',
      borderColor: '#d9d9d9',
      background: theme.palette.grey['200'],
      textShadow: 'none',
      boxShadow: 'none',
      cursor: 'not-allowed',
    },

    '&:focus': {
      border: `solid 1px ${
        variant !== 'borderless' ? theme.palette.grey['600'] : 'transparent'
      }`,
    },
  })
);

export const InputContainer = styled.div<InputContainerProps>({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
});
export const InputIconContainer = styled.div<InputContainerProps>({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  alignItems: 'center',
  right: 20,
  cursor: 'pointer',
});

export const InputLabel = styled.label<InputLabelProps>(
  ({ theme, color, isInvalid, isRequired }) => ({
    color: isInvalid ? 'red' : color,
    paddingRight: '20px',
    fontSize: 14,
    whiteSpace: 'nowrap',
    paddingBottom: 4,
    '&:after': {
      content: isRequired ? '"*"' : '',
      color: 'red',
      fontSize: 20,
    },
  })
);

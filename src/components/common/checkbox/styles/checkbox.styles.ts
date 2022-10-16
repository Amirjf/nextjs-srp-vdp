import styled from 'styled-components';
import { CheckboxProps, LabelProps } from '../content/checkbox_types';

export const CheckboxContainer = styled.div<CheckboxProps>(({ loading }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  position: 'relative',
  '&:after': {
    content: !loading ? '' : '""',
    backgroundColor: '#fff',
    position: 'absolute',
    inset: 0,
    opacity: 0.7,
  },
}));

export const CheckboxCount = styled.span<LabelProps>(({ theme }) => ({
  color: theme.palette.grey['400'],
  fontSize: 14,
  position: 'absolute',
  right: 3,
  top: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
}));
export const CheckboxLabel = styled.label<LabelProps>(({ theme }) => ({
  color: theme.palette.grey['800'],
  width: '100%',
  cursor: 'pointer',
  paddingBlock: 10,
  paddingLeft: 14,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  columnGap: 6,
  '&:hover': {
    background: '#edeeed',
    borderRadius: 4,
  },
}));

export const CustomCheckbox = styled.input<CheckboxProps>(({ theme }) => ({
  cursor: 'pointer',
  transform: 'scale(1.4)',
  marginRight: 12,
  accentColor: theme.palette.common.black,
  [`&:checked + ${CheckboxLabel}`]: {
    color: theme.palette.common.black,
  },
}));

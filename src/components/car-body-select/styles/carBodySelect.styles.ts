import styled from 'styled-components';

import { CarBodySelectType } from '../content/carBodySelect_types';

export const CarBodyContainer = styled.div<CarBodySelectType>(
  ({ theme, loading }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    transition: theme.general.transition,
    position: 'relative',
    '&:after': {
      content: !loading ? '' : '""',
      backgroundColor: '#fff',
      position: 'absolute',
      inset: 0,
      opacity: 0.7,
    },
  })
);

export const CarIcon = styled.span({
  paddingLeft: 4,
  width: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  '> svg': {
    color: '#fff',
    fill: '#fff',
    transform: 'scale(0.7)',
  },
});

export const Label = styled.label<CarBodySelectType>(({ theme }) => ({
  height: 65,
  color: '#444',
  cursor: 'pointer',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #fff',
  borderRadius: 5,
  fontSize: '90%',
  transition: theme.general.transition,
  'svg,path': {
    fill: 'black',
  },
}));

export const CarCheckbox = styled.input<CarBodySelectType>(({ theme }) => ({
  display: 'none',
  [`& + ${Label}:hover`]: {
    border: `2px solid ${theme.palette.common.black}`,
  },

  [`&:checked + ${Label}`]: {
    background: theme.palette.common.black,
    color: '#f0f0f0',
    'svg,path': {
      fill: 'white',
    },
  },
}));
export const CarBodyCount = styled.span<CarBodySelectType>(({ theme }) => ({
  color: theme.palette.grey['200'],
  position: 'absolute',
  right: 10,
  top: '37%',
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
}));

import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

import { ColorSelectTypes } from '../content/colorSelect_types';

export const ColorContainer = styled.div<ColorSelectTypes>(
  ({ theme, loading }) => ({
    display: 'inline-flex',
    position: 'relative',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    transition: theme.general.transition,
    [mediaQueries('md')]: {
      display: 'flex',
    },
    [mediaQueries('lg')]: {
      display: 'flex',
    },
    '&:after': {
      content: !loading ? '' : '""',
      backgroundColor: '#fff',
      position: 'absolute',
      inset: 0,
      opacity: 0.7,
    },
  })
);

export const ColorLabel = styled.label<ColorSelectTypes>(
  ({ theme, color }) => ({
    boxShadow: '0 0 0 1px #ccc',
    height: 40,
    width: 40,
    color: '#444',
    cursor: 'pointer',
    background: color ? color : 'black',
    display: 'flex',
    alignItems: 'center',
    marginInline: 4,
    borderRadius: 5,
    transition: theme.general.transition,
    [mediaQueries('md')]: {
      height: 30,
      width: 30,
    },
  })
);

export const ColorCheckbox = styled.input<ColorSelectTypes>(({ theme }) => ({
  display: 'none',
  [`& + ${ColorLabel}:hover`]: {},
  [`&:checked + ${ColorLabel} span`]: {
    color: theme.palette.grey['800'],
  },
}));
export const CountContainer = styled.span<ColorSelectTypes>(({ theme }) => ({
  color: theme.palette.grey['400'],
  position: 'absolute',
  right: 10,
  top: 10,
  alignItems: 'center',
  fontSize: 14,
  display: 'none',
  [mediaQueries('md')]: {
    display: 'flex',
  },
}));

export const CheckedColorIconContainer = styled.span({
  position: 'absolute',
  display: 'flex',
  backgroundColor: '#a4a4a4c9',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  top: 5,
  left: 9,
  width: 30,
  height: 30,
  [mediaQueries('md')]: {
    top: 5,
    left: 9,
    width: 20,
    height: 20,
  },
});
export const ColorNameContainer = styled.span(({ theme }) => ({
  display: 'none',
  [mediaQueries('md')]: {
    color: theme.palette.grey['200'],
    display: 'block',
    paddingLeft: 50,
    fontSize: 15,
  },
}));

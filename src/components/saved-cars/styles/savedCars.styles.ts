import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

export const SavedVehiclesHeader = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  paddingTop: 20,
});
export const CloseSavedDrawerIcon = styled.div({
  position: 'absolute',
  inset: 4,
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
});

export const RemoveCarContainer = styled.div({
  position: 'absolute',
  top: '15px',
  right: '15px',
  zIndex: 99999,
});
export const RemoveCarIconContainer = styled.div({
  width: 30,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: 'red',
  backgroundColor: 'rgba(0,0,0,0.7)',
  cursor: 'pointer',
});

import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { mediaQueries } from '../../../global/utils/mediaQueries';

export const KeyFeatureButton = styled.div(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  columnGap: 10,
}));
export const KeyFeaturesModal = Modal.styled(({ theme }) => ({
  width: '85%',
  height: 650,
  padding: '35px 10px',
  background: theme.palette.common.white,
  borderRadius: 33,
  position: 'relative',
  [mediaQueries('md')]: {
    width: '50%',
  },
}));
export const FeatureItemsContainer = styled.div({
  overflow: 'hidden',
  overflowY: 'scroll',
  columnGap: 10,
  paddingInline: 20,
  height: 495,
  [mediaQueries('sm')]: {
    height: 495,
    paddingInline: 20,
  },

  [mediaQueries('md')]: {
    height: 495,
    paddingInline: 50,
  },
});
export const KeyFeatureItemContainer = styled.div({
  width: '100%',

  [mediaQueries('sm')]: {
    width: '100%',
  },

  [mediaQueries('lg')]: {
    width: '50%',
  },
});

import styled from 'styled-components';
import { KeyFeaturesProps } from '../content/keyFeaturesItem_types';

export const KeyFeatureItemContainer = styled.div<KeyFeaturesProps>(
  ({ theme, loading }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 2,
    borderRadius: 5,
    transition: theme.general.transition,
    position: 'relative',
    ['&:after']: {
      content: !loading ? '' : '""',
      backgroundColor: '#fff',
      position: 'absolute',
      inset: 0,
      opacity: 0.7,
    },
  })
);

export const CarIcon = styled.span({
  paddingRight: 15,
  paddingLeft: 15,
});

export const KeyFeatureLabel = styled.label<KeyFeaturesProps>(({ theme }) => ({
  padding: '15px 15px',
  height: 60,
  color: '#444',
  cursor: 'pointer',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '2px solid #fff',
  background: '#F4F6F8',
  borderRadius: 5,
  position: 'relative',
  transition: theme.general.transition,
  'svg,path': {
    fill: 'black',
  },
}));

export const KeyFeatureCheckbox = styled.input<KeyFeaturesProps>(
  ({ theme }) => ({
    display: 'none',
    [`& + ${KeyFeatureLabel}:hover`]: {
      border: `2px solid ${theme.palette.primary.main}`,
    },

    [`&:checked + ${KeyFeatureLabel}`]: {
      background: theme.palette.primary.main,
      color: '#f0f0f0',
      'svg,path': {
        fill: 'white',
      },
    },
  })
);
export const KeyFeatureCount = styled.span<KeyFeaturesProps>(
  ({ theme, checked }) => ({
    color: checked ? theme.palette.common.white : theme.palette.grey[400],
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
  })
);
export const FeatureIconContainer = styled.span<KeyFeaturesProps>({
  marginRight: 20,
  width: 25,
  height: 25,
  '> svg': {
    width: 25,
    height: 25,
  },
  '> svg path': {
    fill: '#606060',
  },
});
export const FeatureContent = styled.span<KeyFeaturesProps>({
  display: 'flex',
  alignItems: 'center',
});

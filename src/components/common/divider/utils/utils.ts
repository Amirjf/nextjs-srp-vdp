import { TextOrientationType, handleAlignType } from '../content/divider_types';

export const handleAlign: handleAlignType = {
  center: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'right',
  },
};
export const handleTextAlign: TextOrientationType = {
  center: {
    before: { width: '50%' },
    after: { width: '50%' },
  },
  left: {
    before: { width: '5%' },
    after: { width: '95%' },
  },
  right: {
    before: { width: '95%' },
    after: { width: '5%' },
  },
};

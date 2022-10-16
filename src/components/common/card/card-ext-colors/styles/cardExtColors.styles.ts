import styled from 'styled-components';
import { EXT_COLORS } from '../../utils/utils';

export const ColorsWrapper = styled.div(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'flex-end',
  'span:not(:first-child)': {
    marginLeft: -7,
  },
}));

type ColorExtItemProps = {
  color: string;
};
export const ColorExtItem = styled.span<ColorExtItemProps>(
  ({ theme, color }) => ({
    width: 20,
    height: 20,
    background: EXT_COLORS[color],
    borderRadius: '50%',
    overflow: 'hidden',
    border: 'solid 1px #fff',
  })
);

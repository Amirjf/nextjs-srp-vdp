import styled from 'styled-components';
import { TagProps } from '../content/tag_types';

export const TagContainer = styled.span<TagProps>(({ theme, variant }) => ({
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  lineHeight: '15px',
  color:
    variant === 'filled'
      ? theme.palette.common.white
      : theme.palette.common.black,
  fontSize: '1rem',
  textAlign: 'center',
  listStyle: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  padding: '4px 10px',
  whiteSpace: 'nowrap',
  background:
    variant === 'filled'
      ? theme.palette.common.black
      : theme.palette.common.white,
  border: '1px solid #434343',
  borderRadius: 8,
  opacity: 1,
  transition: 'all 0.3s',
  cursor: variant === 'outlined' ? 'pointer' : 'auto',
}));

export const TagIconContainer = styled.span(({ theme }) => ({
  verticalAlign: 'inherit',
  paddingLeft: 15,
  cursor: 'pointer',
}));

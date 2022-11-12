import styled from 'styled-components';
export const CopyIcon = styled.span({
  alignItems: 'center',
  paddingRight: 5,
  display: 'none',
});

export const CopyableText = styled.span(({ theme: palette }) => ({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px dashed transparent',
  ':hover': {
    borderBottom: `1px dashed ${palette.palette.primary.main}`,
  },
  [`:hover ${CopyIcon}`]: {
    display: 'flex',
  },
}));

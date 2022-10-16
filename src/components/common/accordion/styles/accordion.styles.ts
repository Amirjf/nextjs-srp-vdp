import styled from 'styled-components';

export const AccordionHeader = styled.div(({ theme: palette }) => ({
  background: palette.palette.common.white,
  color: 'rgba(89, 80, 80, 1)',
  display: 'flex',
  alignItems: 'center',
  fontSize: 20,
  fontWeight: 300,
  padding: '1rem',
  borderRadius: 18,
  boxShadow: '0px 3.60515px 9.91416px #E5E5E5',
  columnGap: 30,
  marginBottom: 20,
  overflow: 'hidden',
  cursor: 'pointer',
  '> span': {
    display: 'flex',
    alignItems: 'center',
  },
}));
export const AccordionContent = styled.div(({ theme }) => ({
  background: '#e9ecef',
  borderRadius: 18,
  overflow: 'hidden',
}));

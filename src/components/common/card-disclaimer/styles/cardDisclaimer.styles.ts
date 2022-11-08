import styled from 'styled-components';

export const CardDisclaimerContainer = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  padding: 10,
  textAlign: 'justify',
  backgroundColor: '#ffffff84',
  backdropFilter: 'blur(30px)',

  '> h5': {
    paddingBottom: '.5rem',
    borderBottom: 'solid 1px #e2e2e2',
  },
  '> p': {
    paddingTop: '.5rem',
    lineHeight: '17px',
    fontSize: 12,
  },
});

export const CloseButton = styled.span({
  position: 'absolute',
  top: 5,
  right: 5,
  cursor: 'pointer',
});

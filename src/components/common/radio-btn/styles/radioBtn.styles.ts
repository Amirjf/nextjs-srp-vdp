import styled from 'styled-components';

type RadioLabelProps = {
  size: 'sm' | 'md' | 'lg';
};

const sizeTranslator = {
  sm: { width: '8rem', height: '2.2rem' },
  md: { width: '8rem', height: '2.2rem' },
  lg: { width: '9.5rem', height: 48 },
};

export const RadioButtonLabel = styled.label<RadioLabelProps>(({ size }) => ({
  ...sizeTranslator[size],
  display: 'flex',
  alignItems: 'center',
  columnGap: 12,
  fontSize: 14,
  backgroundColor: '#fff',
  // padding: '9px 56px 9px 30px',
  paddingLeft: 35,
  cursor: 'pointer',
  borderRadius: 9,
  transition: 'border 250ms ease',
  border: 'solid 1px transparent',
  '&:hover': {
    border: 'solid 1px var(--mainColor)',
  },
}));

export const RadioInput = styled.input({
  accentColor: 'var(--mainColor)',
  position: 'absolute',
  left: '12px',
  width: 15,
  height: 15,
  [`&:checked + ${RadioButtonLabel}`]: {
    border: 'solid 1px var(--mainColor)',
  },
});
export const RadioBtnContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

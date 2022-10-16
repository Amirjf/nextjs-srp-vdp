import styled from 'styled-components';
import { mediaQueries } from '../../../global/utils/mediaQueries';

export const FormContainer = styled.div<any>(({ isFormSubmitted }) => ({
  backgroundColor: 'rgb(242, 242, 242)',
  padding: 15,
  borderRadius: 6,
  position: 'relative',

  input: {
    border: '1px solid rgb(230, 230, 230)',
  },

  select: {
    borderRadius: 5,
    height: 38,
    border: '1px solid rgb(230, 230, 230)',
    fontSize: 15,
  },
  label: {
    fontSize: 14,
  },
  ':after': {
    content: isFormSubmitted ? '"Your request has been submitted"' : '',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: '1.4rem',
    fontWeight: 600,
    position: 'absolute',
    margin: 'auto',
    left: '50%',
    top: '50%',
    width: '100%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    opacity: 0.7,
    zIndex: 99,
  },
  ':before': {
    content: isFormSubmitted ? '""' : '',
    backgroundColor: '#fff',
    position: 'absolute',
    inset: 0,
    opacity: 0.7,
    zIndex: 9,
  },
}));

export const ErrorField = styled.span({
  color: 'red',
  marginTop: 5,
  display: 'block',
});

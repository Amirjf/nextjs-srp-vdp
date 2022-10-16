import styled from 'styled-components';

export const FindMyVehicleFormContainer = styled.section({
  textAlign: 'left',
  backgroundColor: 'rgb(238, 238, 238)',
  padding: '1.4rem',
  borderRadius: 10,
  marginBottom: '5rem',
  label: {
    fontSize: 15,
  },
  'label[aria-required="true"]:after': {
    content: '"*"',
    fontSize: 20,
    color: 'red',
  },
});

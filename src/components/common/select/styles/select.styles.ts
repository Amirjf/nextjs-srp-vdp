import styled from 'styled-components';

export const SelectContainer = styled.div`
  label {
    padding-top: 20;
  }
`;
export const StyledSelect = styled.select`
  /* <select> styles */
  margin: 10px auto;
  & {
    /* Reset */
    border: '2px solid #ADACAC';
    outline: 0;
    font: inherit;
    /* Personalize */
    width: 15em;
    height: 3em;
    padding: 0 4em 0 1em;
    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
        no-repeat right 0.8em center / 1.4em,
      linear-gradient(
        to left,
        rgba(255, 255, 255, 0.3) 3em,
        rgba(255, 255, 255, 0.2) 3em
      );
    color: black;
    border-radius: 0.25em;

    cursor: pointer;
    /* <option> colors */
    option {
      color: inherit;
      background-color: red;
    }
    /* Remove focus outline */
    &:focus {
      outline: none;
    }
    /* Remove IE arrow */
    &::-ms-expand {
      display: none;
    }
  }
`;

import React from 'react';
import CurrencyInput from 'react-currency-input-field';

const ERRORS_TRANSLATOR: any = {
  required: 'is required',
};

import {
  StyledInput,
  InputContainer,
  InputIconContainer,
  InputLabel,
} from '../styles/Input.styles';
import { InputProps } from './input_types';

const Input: React.FC<InputProps> = ({
  scale = 'md',
  rounded = false,
  variant = 'outlined',
  icon,
  currencyInput,
  disabled = false,
  register,
  required,
  ...props
}: InputProps) => {
  return (
    <>
      <InputContainer>
        {props.label && (
          <InputLabel
            isInvalid={props.isInvalid}
            color={props.color}
            htmlFor={props.name}
            isRequired={props.rules?.required}
          >
            {props.label}
          </InputLabel>
        )}
        <StyledInput
          as={currencyInput ? CurrencyInput : undefined}
          scale={scale}
          rounded={rounded}
          variant={variant}
          disabled={disabled}
          id={props.name || props.label}
          {...(register && {
            ...register(props.name, { ...props.rules }),
          })}
          {...props}
        />
        {icon && <InputIconContainer>{icon}</InputIconContainer>}
      </InputContainer>
      {/* {props.errors && <span>{props.errors[props.name]}</span>} */}
    </>
  );
};

Input.defaultProps = {
  color: '#000',
};

export default Input;

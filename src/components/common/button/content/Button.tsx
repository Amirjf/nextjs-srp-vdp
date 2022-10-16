import React from 'react';
import { StyledButton, ButtonIcon, ButtonText } from '../styles/button.styles';
import { ButtonProps } from './button_types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  scale = 'md',
  icon,
  block = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      block={block}
      disabled={disabled}
      variant={variant}
      scale={scale}
      {...props}
    >
      <div
        style={{
          flexDirection: props.direction || 'row-reverse',
          display: 'flex',
          alignItems: 'center',
          justifyContent: props.align || 'center',
        }}
      >
        <ButtonText>{children}</ButtonText>
        {icon && <ButtonIcon>{icon}</ButtonIcon>}
      </div>
    </StyledButton>
  );
};

export default Button;

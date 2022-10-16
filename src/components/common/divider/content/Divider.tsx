import React from 'react';
import {
  DividerContainer,
  DividerText,
  DividerWithTextContainer,
  StyledDivider,
} from '../styles/divider.styles';
import { DividerProps } from './divider_types';

const Divider: React.FC<DividerProps> = ({
  children,
  align,
  orientation,
  color,
  ...props
}: DividerProps) => {
  return (
    <>
      <DividerContainer align={align}>
        {!children && <StyledDivider color={color} {...props} />}
      </DividerContainer>
      {children && (
        <DividerWithTextContainer orientation={orientation}>
          <DividerText>{children}</DividerText>
        </DividerWithTextContainer>
      )}
    </>
  );
};

Divider.defaultProps = {
  middle: false,
  orientation: 'center',
};

export default Divider;

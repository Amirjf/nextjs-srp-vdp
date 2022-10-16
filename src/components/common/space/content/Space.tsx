import React from 'react';
import { StyledSpace } from '../styles/space.styles';
import { SpaceProps } from './space_types';

const Space: React.FC<SpaceProps> = ({ children, ...props }: SpaceProps) => {
  return <StyledSpace {...props}>{children}</StyledSpace>;
};

Space.defaultProps = {
  align: 'start',
  direction: 'horizontal',
  wrap: false,
};

export default Space;

import React from 'react';
import { StyledCol } from '../../styles/Col.styles';
import { ColProps } from './col_types';

const Col: React.FC<ColProps> = ({ children, ...rest }: ColProps) => {
  return <StyledCol {...rest}>{children}</StyledCol>;
};

export default Col;

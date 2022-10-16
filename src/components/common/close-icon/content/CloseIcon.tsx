import React from 'react';
import { StyledCloseIcon } from '../styles/closeIcon.styles';
import { CloseIconProps } from './closeIcon_types';

import { MdClose } from 'react-icons/md';
const CloseIcon: React.FC<CloseIconProps> = ({
  position = 'topLeft',
  ...props
}: CloseIconProps) => {
  return (
    <StyledCloseIcon position={position} {...props}>
      <MdClose size={30} fontWeight="900" color={props.color} />
    </StyledCloseIcon>
  );
};

export default CloseIcon;

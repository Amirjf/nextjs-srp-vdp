import React from 'react';
import { StyledStickyHeader } from '../styles/stickyHeader.styles';

type StickyHeaderProps = {
  children?: React.ReactNode;
};

const StickyHeader: React.FC<StickyHeaderProps> = ({
  children,
}: StickyHeaderProps) => {
  return <StyledStickyHeader>{children}</StyledStickyHeader>;
};

export default StickyHeader;

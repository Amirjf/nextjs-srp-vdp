import React from 'react';
import { CardBadgeContainer } from '../styles/cardBadge.styles';

type CardBadgeProps = {
  children: React.ReactNode;
  top?: string;
};
const CardBadge = ({ children, top }: CardBadgeProps) => {
  return (
    <CardBadgeContainer
      top={top}
      //@ts-ignore
      dangerouslySetInnerHTML={{ __html: children }}
    ></CardBadgeContainer>
  );
};

export default CardBadge;

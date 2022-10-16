import React, { useState } from 'react';
import DisclaimerTooltip from '../../../../shared-components/tag-discaimer/DisclaimerTooltip';
import { Card2BadgeContainer } from '../styles/card2BadgeContainer.styles';

type CardBadgeProps = {
  content: string | HTMLAllCollection;
  top?: string;
  disclaimer?: string;
};
const Card2Badge = ({ content, disclaimer, top }: CardBadgeProps) => {
  return (
    <>
      <DisclaimerTooltip content={disclaimer}>
        <Card2BadgeContainer
          style={{
            backgroundColor: content === 'Special' ? '#f11313' : undefined,
          }}
          top={top}
          //@ts-ignore
          dangerouslySetInnerHTML={{ __html: content }}
        ></Card2BadgeContainer>
      </DisclaimerTooltip>
    </>
  );
};

export default Card2Badge;

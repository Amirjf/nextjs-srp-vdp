import React from 'react';
import { BadgeContainer, BadgeContent } from '../styles/badge.styles';
import { BadgeProps } from './badge_types';
export function kFormatter(num: number) {
  return Math.abs(num) > 999
    ? //@ts-ignore
      Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
}
const Badge = ({ children, count, onClick }: BadgeProps) => {
  return (
    <BadgeContainer onClick={onClick}>
      <span>{children}</span>
      {count ? <BadgeContent>{kFormatter(count)}</BadgeContent> : ''}
    </BadgeContainer>
  );
};

export default Badge;

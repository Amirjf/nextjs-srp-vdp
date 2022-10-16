import React, { CSSProperties } from 'react';
import { TypographyContainer } from '../styles/typography.styles';

const variantsMapping: VariantsType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
};

type VariantsType = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  subtitle1: string;
  subtitle2: string;
  body1: string;
  [key: string]: any;
};

type Props = {
  variant?: string;
  color?: string;
  align?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
  style?: CSSProperties;
  strong?: boolean;
};

const Typography: React.FC<Props> = ({
  variant = 'body1',
  color,
  children,
  ...props
}: Props) => {
  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    <TypographyContainer {...props}>
      <Component>{children}</Component>
    </TypographyContainer>
  );
};

export default Typography;

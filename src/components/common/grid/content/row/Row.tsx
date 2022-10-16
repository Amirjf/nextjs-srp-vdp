import React from 'react';
import { FlexRow } from '../../styles/Row.styles';
import { RowProps } from './row_types';

const Row: React.FC<RowProps> = ({ children, spacing, ...rest }: RowProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.isValidElement(child)
      ? React.cloneElement(child, {
          spacing: spacing,
        })
      : child;
  });
  return (
    <FlexRow {...rest} spacing={spacing}>
      {childrenWithProps}
    </FlexRow>
  );
};

export default Row;

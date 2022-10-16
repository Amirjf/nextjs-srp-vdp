import styled from 'styled-components';
import { ColProps } from '../content/col/col_types';
import { devices } from '../utils/constants';
import { calculateColPadding, calculateWidth } from '../utils/utils';

export const StyledCol = styled.div<ColProps>`
  ${({ span, xs }) => (span ? calculateWidth(span) : calculateWidth(xs))};
  ${({ display, alignItems, justify }) => ({
    display,
    alignItems,
    justifyContent: justify,
  })};

  ${({ spacing }) => {
    if (!spacing && spacing !== 0) return `${calculateColPadding(8)}`;
    if (typeof spacing === 'number') {
      return `${calculateColPadding(spacing)};`;
    } else {
      return `
      @media ${devices.xs} {
        ${calculateColPadding(spacing.xs)};

      }
      @media ${devices.sm} {
        ${calculateColPadding(spacing.sm)};

      }
      @media ${devices.md} {
        ${calculateColPadding(spacing.md)};

      }
      @media ${devices.lg} {
        ${calculateColPadding(spacing.lg)};

      }
      @media ${devices.xl} {
        ${calculateColPadding(spacing.xl)};
     }
      @media ${devices.xxl} {
        ${calculateColPadding(spacing.xxl)};
     }
      `;
    }
  }}
  @media ${devices.xs} {
    ${({ xs }) => calculateWidth(xs)};
  }
  @media ${devices.sm} {
    ${({ sm }) => calculateWidth(sm)};
  }
  @media ${devices.md} {
    ${({ md }) => calculateWidth(md)};
  }
  @media ${devices.lg} {
    ${({ lg }) => calculateWidth(lg)};
  }
  @media ${devices.xl} {
    ${({ xl }) => calculateWidth(xl)};
  }
`;

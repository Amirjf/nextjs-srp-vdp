import styled from 'styled-components';
import { devices } from '../utils/constants';
import { RowStyleProps } from '../content/row/row_types';
import { calculateRowMargin } from '../utils/utils';

export const FlexRow = styled.div<RowStyleProps>`
  display: flex;
  flex-wrap: wrap;
  ${({ display, alignItems, justify }) => ({
    display,
    alignItems,
    justifyContent: justify,
  })};
  ${({ spacing }) => {
    if (!spacing && spacing !== 0)
      return `
${calculateRowMargin(8)};
      `;
    if (typeof spacing === 'number') {
      return `
${calculateRowMargin(spacing)};
      `;
    } else {
      return `
        @media ${devices.xs} {
          ${(spacing.xs && calculateRowMargin(spacing.xs)) || ''}
        }
        @media ${devices.sm} {
          ${(spacing.sm && calculateRowMargin(spacing.sm)) || ''}
        }
        @media ${devices.md} {
          ${(spacing.md && calculateRowMargin(spacing.md)) || ''}
        }
        @media ${devices.lg} {
         ${(spacing.lg && calculateRowMargin(spacing.lg)) || ''}
        }
        @media ${devices.xl} {
         ${(spacing.xl && calculateRowMargin(spacing.xl)) || ''}
        }
      `;
    }
  }};
`;

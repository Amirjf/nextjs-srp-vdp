import styled from 'styled-components';

type StyledStickyHeaderProps = {
  scrollState?: string;
};

export const StyledStickyHeader = styled.div<StyledStickyHeaderProps>({
  position: 'sticky',
  top: 0,
  padding: '10px 9px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(10px)',
  zIndex: 99,
});

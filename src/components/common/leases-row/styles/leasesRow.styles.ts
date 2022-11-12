import styled from 'styled-components';

export const LeaseItemContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  '> span': {
    color: '#909090',
    fontWeight: '600',
    minWidth: 65,
    maxWidth: 220,
    overflow: 'hidden',
    marginRight: 10,
  },

  h4: {},
  p: {
    fontSize: 13,
  },
});

export const LeaseRowContainer = styled.div({
  [`> ${LeaseItemContainer}`]: {
    borderBottom: '1px solid #eee',
    paddingBlock: '.5rem',
  },
  [`> ${LeaseItemContainer}:last-child`]: {
    borderBottom: '0px solid #eee',
  },
});

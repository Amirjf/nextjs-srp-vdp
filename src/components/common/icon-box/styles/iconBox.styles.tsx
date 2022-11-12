import styled from 'styled-components';

export const IconBoxContainer = styled.div<any>(
  ({ theme: { palette }, grow, orientation }) => ({
    background: palette.common.white,
    display: 'flex',
    flexDirection: orientation || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: palette.grey[600],
    padding: '0 15px',
    minWidth: 115,
    height: 115,
    borderRadius: 18,

    flexGrow: grow ? '1' : 0,
    boxShadow: '0px 3.60515px 9.91416px #E5E5E5',
    [`:hover ${IconContainer}`]: {
      '> svg': {
        fill: '#2B54E7',
      },
      '> svg path': {
        fill: '#2B54E7',
      },
    },
  })
);
export const IconContainer = styled.div(({ theme }) => ({
  color: '#86878F',
  display: 'flex',
  alignItems: 'center',

  '> svg': {
    width: 32,
    height: 32,
    fill: '#86878F',
  },
  '> svg path': {
    fill: '#86878F',
  },
}));
export const TitleContainer = styled.div(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: 14,
}));

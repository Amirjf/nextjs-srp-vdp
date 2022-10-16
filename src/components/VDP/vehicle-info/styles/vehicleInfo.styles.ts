import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';

export const VehicleInfoContainer = styled.div({
  display: 'none',
  [mediaQueries('lgTab')]: {
    display: 'block',
    boxShadow: '0px 4px 46px rgba(43, 68, 82, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    width: '94%',
    minWidth: 460,
    paddingBottom: 10,
    backgroundColor: 'rgba(251, 253, 255, 1)',
    position: 'sticky',
    top: 10,
    height: 'max-content',
    minHeight: 'auto',
    maxHeight: 'calc(100vh - 10px);',
    overflowY: 'scroll',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
export const VehicleTitle = styled.h1({
  fontWeight: '600',
  fontSize: 18,
  lineHeight: '20px',
  '> span': {
    fontWeight: '400',
    fontSize: '80%',
  },
});
export const VehiclePrice = styled.div({
  fontWeight: '600',
  fontSize: 16,
});
export const VehicleSummaryInfo = styled.div({
  color: 'rgba(89, 80, 80, 1)',
  fontSize: 16,
  paddingTop: '.5rem',
  '> div': {
    paddingBlock: '.2rem',
  },
});
export const OptionsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 13,
  button: {
    fontFamily: 'Arial',
    backgroundColor: 'rgb(242, 242, 242)',
    color: '#595050',
    border: 'none',
    height: 50,
    fontSize: 18,
    borderRadius: 6,
    cursor: 'pointer',
  },
});
export const VehicleActionsContainer = styled.div({});

export const CardContainer = styled.div({
  position: 'fixed',
  bottom: 0,
  height: 0,
  width: '100%',
  maxWidth: 700,
  right: 0,
  zIndex: 7000,
  left: '50%',
  transform: 'translateX(-50%)',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  [mediaQueries('lgTab')]: {
    display: 'none',
  },
});

export const CopyIcon = styled.span({
  alignItems: 'center',
  paddingRight: 5,
  display: 'none',
});

export const CopyableText = styled.span(({ theme: palette }) => ({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px dashed transparent',
  ':hover': {
    borderBottom: `1px dashed ${palette.palette.primary.main}`,
  },
  [`:hover ${CopyIcon}`]: {
    display: 'flex',
  },
}));
export const CardInner = styled.div({
  color: '#323232',
  height: '80vh',
  position: 'absolute',
  transform: 'translateY(-100%)',
  width: '100%',
  boxShadow: '0 -12px 30px rgb(58 58 58 / 20%)',
  background: '#fff',
  borderRadius: '10px 10px 0 0',
  overflow: 'visible',
  top: '-151px',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  ':after': {
    content: '""',
    width: '100%',
    height: '100%',
    top: '100%',
    position: 'absolute',
    left: 0,
  },
});
export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 10px;
  left: 0;
  top: 0%;
  width: 100%;
  z-index: 100;
  position: absolute;
  min-height: 3px;
  max-height: 3px;
`;
export const Indicator = styled.div`
  height: 4px;
  width: 50px;
  background: #d8d8d8;
  border-radius: 0.3rem;
`;

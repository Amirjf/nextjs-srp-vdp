import styled from 'styled-components';

type TooltipContentProps = {
  position: any;
};

const tooltipPositionTranslator: any = {
  right: {
    left: 'calc(100% + 15px)',
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
  },
  left: {
    right: 'calc(100% + 15px)',
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
  },
  bottom: {
    bottom: 'calc(30px * -1)',
    transform: 'translateX(-43%)',
    left: '50%',
  },
  top: {
    top: '-40px',
    transform: 'translateX(-43%)',
    left: '50%',
  },
};

const arrowPositionTranslator: any = {
  right: { left: 2, top: '29%', transform: 'rotate(45deg)' },
  left: { right: '-3px', top: '30%', transform: 'rotate(45deg)' },
  bottom: { bottom: '85%', transform: 'rotate(45deg)', left: '50%' },
  top: { top: '85%', transform: 'rotate(45deg)', left: '45%' },
};
export const TooltipContent = styled.span<TooltipContentProps>(
  ({ theme, position }) => ({
    ...tooltipPositionTranslator[position],
    position: 'absolute',
    borderRadius: '4px',
    padding: '6px 9px',
    color: '#fff',
    background: '#000',
    fontSize: '14px',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    zIndex: '100',

    ':before': {
      content: '""',
      ...arrowPositionTranslator[position],
      borderTopColor: '#000',
      border: 'solid #000',
      position: 'absolute',
      pointerEvents: 'none',
      borderWidth: '4px',
      marginLeft: 'calc(6px * -1)',
      zIndex: 101,
    },
  })
);

export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`;

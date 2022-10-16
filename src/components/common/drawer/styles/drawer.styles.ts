import styled from 'styled-components';
import { mediaQueries } from '../../../../global/utils/mediaQueries';

type DrawerContainerProps = {
  position: any;
  background?: string;
};

const drawerPosition: {
  [key: string]: { top: number; right: number } | { top: number; left: number };
} = {
  right: { top: 0, right: 0 },
  left: { top: 0, left: 0 },
};

export const DrawerContainer = styled.div<DrawerContainerProps>(
  ({ theme, position, background }) => ({
    ...drawerPosition[position],
    position: 'fixed',
    backgroundColor: background ? background : theme.palette.common.white,
    width: '100%',
    height: '100vh',
    overflowY: 'auto',
    zIndex: 999,
    boxShadow:
      '6px 0 16px -8px rgb(0 0 0 / 32%), 9px 0 28px 0 rgb(0 0 0 / 20%), 12px 0 48px 16px rgb(0 0 0 / 12%)',

    [mediaQueries('md')]: {
      width: 380,
    },
  })
);
export const DrawerBackdrop = styled.div<any>(({ theme, isOpen }) => ({
  backgroundColor: 'rgba(0,0,0,.5)',
  position: 'fixed',
  inset: 0,
  zIndex: 10,
}));

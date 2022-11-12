import styled from 'styled-components';

const labelShape: any = {
  sharp: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  rounded: { borderTopLeftRadius: 11, borderTopRightRadius: 11 },
};

export const CardTopLabelContainer = styled.div(({ theme: { palette } }) => ({
  width: '100%',
  position: 'absolute',
  zIndex: 9,
}));
export const CardTopLabelContent = styled.div<any>(
  ({ theme: { palette }, shape }) => ({
    ...labelShape[shape],
    backgroundColor: palette.primary.main,
    color: palette.common.white,
    width: '100%',
    textAlign: 'center',
    padding: '0.27rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.9em',
    zIndex: 1,
    fontWeight: 500,
    transition: 'all 800ms',
    position: 'relative',
  })
);

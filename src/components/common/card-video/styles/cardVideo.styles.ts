import styled from 'styled-components';
import HoverVideoPlayer from 'react-hover-video-player';
export const CustomVideoElement = styled(HoverVideoPlayer)({
  aspectRatio: '3.2 / 1.8',
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
  cursor: 'pointer',
  video: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
});

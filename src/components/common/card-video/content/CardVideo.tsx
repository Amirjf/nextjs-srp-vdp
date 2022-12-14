import { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { CardVideoProps } from './cardVideo_types';
import Spinner from '../../spinner/Spinner';
import { CustomVideoElement } from '../styles/cardVideo.styles';

import { Card2Image } from '../../card/card-design2/styles/cardDesign2.styles';
import { useSWRConfig } from 'swr';

const CardVideo = ({
  poster,
  videoSrc,
  videoCC,
  errorImage,
  cardDesign,
  posterPlaceholder,
  carData,
  setVideoPlaying,
}: CardVideoProps) => {
  const { cache } = useSWRConfig();
  const [vehicleId, setVehicleId] = useState<number | any>(null);

  const { id, year, make, model } = carData;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setVideoPlaying(true);
  };
  const handlePauseVideo = () => {
    setIsVideoPlaying(false);
    setVideoPlaying(false);
  };

  const videoOverlayTranslate: any = {
    theme2: (
      <>
        <Card2Image
          style={{
            borderTopLeftRadius: 11,
            borderTopRightRadius: 11,
          }}
          placeholder={posterPlaceholder ? 'blur' : 'empty'}
          blurDataURL={posterPlaceholder}
          layout="fill"
          priority
          //@ts-ignore
          src={poster}
        />
        <span
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <BsPlayCircle
            style={{ filter: 'drop-shadow(2px 4px 6px black)' }}
            size={50}
            color="#fff"
          />
        </span>
      </>
    ),
  };

  return (
    <span
      style={{
        aspectRatio: '3.2 / 1.8',
        overflow: 'hidden',
        position: 'relative',
        zIndex: isVideoPlaying ? 9 : 0,
      }}
      onClick={handlePlayVideo}
    >
      <div style={{ position: 'relative' }}>
        <CustomVideoElement
          videoSrc={videoSrc}
          controls
          focused={isVideoPlaying}
          loadingOverlay={<Spinner />}
          preload="none"
          onHoverStart={handlePlayVideo}
          onHoverEnd={handlePauseVideo}
          pausedOverlay={<>{videoOverlayTranslate[cardDesign]}</>}
          pausedOverlayWrapperClassName="paused-overlay-wrapper"
          pausedOverlayWrapperStyle={{
            position: 'relative',
          }}
          videoStyle={{
            position: 'absolute',
            inset: 0,
          }}
          videoCaptions={
            videoCC
              ? [
                  {
                    src: videoCC,
                    srcLang: 'en',
                    label: 'English',
                    kind: 'captions',
                    default: false,
                  },
                ]
              : []
          }
        />
      </div>
    </span>
  );
};

export default CardVideo;

import { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { CardVideoProps } from './cardVideo_types';
import Spinner from '../../spinner/Spinner';
import { CustomVideoElement } from '../styles/cardVideo.styles';
import useIsMobile from '../../../../hooks/useIsMobile';
import { Card2Image } from '../../card/card-design2/styles/cardDesign2.styles';
import { Card3Image } from '../../card/card-design3/styles/cardDesign3.styles';
import { useSWRConfig } from 'swr';
import useVehicle from '../../../../hooks/useVehicle';

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
  const isMobile = useIsMobile();

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

  const data = useVehicle(vehicleId);

  const handleNavigateToVehicle = () => {
    const existsInCache = cache.get(`${id}`);

    if (existsInCache) {
      window.location.assign(`#/vdp/${year}/${make}/${model}/${id}`);
    } else {
      setVehicleId(id);
    }
  };

  const videoOverlayTranslate: any = {
    theme1: (
      <>
        <Card3Image
          onErrorImage={errorImage}
          src={poster}
          placeholder={posterPlaceholder}
          alt="video"
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
    theme2: (
      <>
        <Card2Image
          style={{
            borderTopLeftRadius: 11,
            borderTopRightRadius: 11,
          }}
          src={poster}
          placeholder={posterPlaceholder}
          alt="video"
          onErrorImage={errorImage}
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
      <div
        style={{ position: 'relative' }}
        //@ts-ignore
        onClick={!isMobile ? handleNavigateToVehicle : null}
      >
        <CustomVideoElement
          videoSrc={videoSrc}
          controls
          disableDefaultEventHandling={isMobile}
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

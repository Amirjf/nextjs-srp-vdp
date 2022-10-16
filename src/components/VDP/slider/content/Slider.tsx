import React, { useEffect, useState } from 'react';
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react';
import {
  SeeMoreContainer,
  SlideNumberIndicator,
} from '../styles/slider.styles';
import SliderArrow from './SliderArrow';
import Modal from 'styled-react-modal';
import VehicleGallery from './VehicleGallery';
import { Button } from '../../../common';
import { AiFillCloseCircle } from 'react-icons/ai';
import useVehicle from '../../../../hooks/useVehicle';
import { useLocation, useParams } from 'react-router-dom';

const Slider = () => {
  const AdaptiveHeight: KeenSliderPlugin = (slider: any) => {
    function updateHeight() {
      slider.container.style.height =
        (slider.slides[slider.track.details.rel].offsetWidth *
          slider.slides[slider.track.details.rel].naturalHeight) /
          slider.slides[slider.track.details.rel].naturalWidth +
        'px';
    }

    slider.on('slideChanged', updateHeight);
  };

  const sliderOptions = {
    slideChanged(slider: any) {
      setCurrentSlide(slider.track.details.rel);
    },

    initial: 0,
    rubberband: false,
    loop: true,
  };
  const params = useParams();
  const location = useLocation();
  const { data } = useVehicle(params.id);
  const [showKeys, setShowKeys] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([]);
  const [refCallback, slider]: any = useKeenSlider(sliderOptions, [
    AdaptiveHeight,
  ]);

  function toggleModal() {
    setOpacity(0);
    setShowKeys(!showKeys);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  useEffect(() => {
    slider.current?.update(sliderOptions);
    slider.current?.moveToIdx(0, false, { duration: 0 });
  }, [location]);

  useEffect(() => {
    const new_loaded = [...loaded];
    new_loaded[currentSlide] = true;
    setLoaded(new_loaded);
  }, [currentSlide]);

  const { photos, no_photo, video } = data;

  const imagesWithVideo = video?.length
    ? [
        {
          video: true,
          src: video,
        },
        ...photos,
      ]
    : photos;

  const imagesToShow =
    imagesWithVideo[0]?.length > 0 ? imagesWithVideo : [no_photo];

  return (
    <>
      <div style={{ width: '100%' }}>
        <div ref={refCallback} className="keen-slider">
          <SlideNumberIndicator>
            Photo
            <span>{`${currentSlide + 1}/${imagesToShow.length}`}</span>
          </SlideNumberIndicator>
          {imagesToShow?.map((img: any, idx: number) => {
            return (
              <>
                {img.video === true ? (
                  <video
                    src={img.src}
                    controls
                    poster={imagesToShow[1]}
                    preload="none"
                    className="keen-slider__slide"
                  />
                ) : (
                  <img
                    style={{ cursor: 'zoom-in' }}
                    onClick={toggleModal}
                    src={loaded[idx] ? img : ''}
                    className="keen-slider__slide"
                  />
                )}
              </>
            );
          })}
          {imagesToShow?.length > 1 && slider?.current && (
            <>
              <SliderArrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || slider.current?.prev()
                }
              />

              <SliderArrow
                onClick={(e: any) =>
                  e.stopPropagation() || slider.current?.next()
                }
              />
            </>
          )}
          <SeeMoreContainer onClick={toggleModal}>
            <p>CLICK TO SEE MORE PHOTOS</p>
          </SeeMoreContainer>
        </div>
      </div>

      <Modal
        isOpen={showKeys}
        afterOpen={afterOpen}
        onEscapeKeydown={toggleModal}
        onBackgroundClick={toggleModal}
        backgroundProps={{
          opacity,
          backgroundColor: 'rgba(0,0,0,0.93)',
          zIndex: 99999,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 85,
            right: 12,
            boxShadow: '0px 4.47px 11.1px 0px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Button variant="text" onClick={toggleModal}>
            <AiFillCloseCircle color="#fff" size={33} />
          </Button>
        </div>
        <div>
          <VehicleGallery />
        </div>
      </Modal>
    </>
  );
};

export default Slider;

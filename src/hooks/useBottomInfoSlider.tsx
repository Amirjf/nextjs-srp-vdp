import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';

const useBottomInfoSlider = () => {
  const [scrolling, setScrolling] = useState(true);
  const [initialSlide, setInitialSlide] = useState(0);

  const smallHeight = React.useRef(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    vertical: true,
    rubberband: true,
    slides: (size, elements) => {
      smallHeight.current = elements[0].getBoundingClientRect().height;
      const mediumHeight = elements[1].getBoundingClientRect().height;

      size -= smallHeight.current;

      return [
        { size: smallHeight.current / size, origin: 0 },
        { size: mediumHeight / size, origin: 0 },
        {
          size: (size - smallHeight.current - mediumHeight) / size,
          origin: -(size - smallHeight.current - mediumHeight) / size,
        },
      ];
    },
    detailsChanged(slider) {
      const y =
        (slider.size - smallHeight.current) *
        slider.track.details.length *
        slider.track.details.progress *
        -1;
      slider.container.style.transform = `translate3d(0, ${Math.round(
        y
      )}px, 0)`;
    },
    renderMode: 'custom',
    slideChanged(slider) {
      setScrolling(slider.track.details.rel === 2);
      setInitialSlide(slider.track.details.rel);
      // desktop fix
      slider.container
        .querySelector('.card__inner__scrolling')
        ?.scrollTo(20, 0);
    },
  });

  return {
    sliderRef,
    scrolling,
    setInitialSlide,
    setScrolling,
    initialSlide,
    slider,
  };
};

export default useBottomInfoSlider;

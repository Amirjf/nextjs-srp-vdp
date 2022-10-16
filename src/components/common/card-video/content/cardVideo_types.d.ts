import React, { SetStateAction } from 'react';

export type CardVideoProps = {
  poster?: string;
  videoCC?: any;
  videoSrc: string;
  errorImage?: string;
  cardDesign: string;
  posterPlaceholder?: string;
  carData?: any;
  setVideoPlaying?: SetStateAction;
};

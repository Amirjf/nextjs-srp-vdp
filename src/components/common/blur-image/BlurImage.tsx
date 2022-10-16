import { useState } from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PlaceholderImg = styled.img<any>`
  position: absolute;
  width: 100%;
  height: auto;
  aspect-ratio: 3.2 / 1.9;
  object-fit: cover;
  transition: opacity 0.2s ease-in;

  ${({ imageLoaded }: any) => (imageLoaded ? 'opacity: 0' : 'opacity: 1')};
`;

const BlurImage = ({ src, alt, placeholder, onErrorImage, ...props }: any) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      {!isImageLoaded && (
        <PlaceholderImg
          {...props}
          imageLoaded={isImageLoaded}
          src={placeholder}
          onError={(e: any) => (e.target.style.display = 'none')}
        />
      )}
      <LazyLoadImage
        src={imgSrc}
        alt={props.alt || ''}
        onError={() => setImgSrc(onErrorImage)}
        onLoad={() => setIsImageLoaded(true)}
        {...props}
      />
    </>
  );
};

export default BlurImage;

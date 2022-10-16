import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useVehicle from '../../../../hooks/useVehicle';
import { Gallery, GalleryContainer, Thumbnails } from '../styles/slider.styles';

const VehicleGallery = () => {
  const [focusedImage, setFocusedImage] = useState('none');
  const params = useParams();
  const { data } = useVehicle(params.id);

  const changeFocused = (id: any) => setFocusedImage(id);

  useEffect(() => {
    window.addEventListener('scroll', () => setFocusedImage('none'));
  }, []);

  const handleClick = (id: number) => {
    changeFocused(id);
  };
  const { photos, no_photo } = data;
  const imagesToShow = photos.length ? photos : [no_photo];

  return (
    <GalleryContainer>
      <Thumbnails>
        {imagesToShow?.map((img: string, idx: number) => {
          return (
            <div key={idx} onClick={() => handleClick(idx)}>
              <img
                style={{
                  //@ts-ignore
                  border: focusedImage == idx ? '1px solid #fff' : 'none',
                }}
                src={img}
              />
            </div>
          );
        })}
      </Thumbnails>

      <Gallery>
        {imagesToShow?.map((img: string, idx: number) => {
          return (
            <div key={idx} style={{ scrollSnapAlign: 'start' }}>
              <img
                src={img}
                ref={(el) => {
                  //@ts-ignore
                  if (idx == focusedImage) {
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </div>
          );
        })}
      </Gallery>
    </GalleryContainer>
  );
};

export default VehicleGallery;

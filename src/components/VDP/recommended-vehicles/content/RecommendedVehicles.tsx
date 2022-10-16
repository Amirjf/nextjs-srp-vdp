import { useKeenSlider } from 'keen-slider/react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleContext } from '../../../../context/GoogleOptContext';
import useVehicle from '../../../../hooks/useVehicle';
import { getSrpTheme } from '../../../common/main-content/utils/utils';
import SliderArrow from '../../slider/content/SliderArrow';
import { RecommendedVehiclesContainer } from '../styles/recommendedVehicles.styles';

const RecommendedVehicles = () => {
  const params = useParams();
  const { data, isLoading } = useVehicle(params.id);
  const { cachedSrpTheme, srpTheme }: any = useContext(GoogleContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderOptions = {
    slideChanged(slider: any) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      '(min-width: 500px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 25,
        },
      },
    },
  };

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(sliderOptions);

  const { similar_vehicles, no_photo } = data;

  const srpCardsTheme = cachedSrpTheme || srpTheme;

  useEffect(() => {
    slider.current?.update(sliderOptions);
  }, [params]);

  return (
    <RecommendedVehiclesContainer>
      <br />
      <h2 style={{ fontSize: 19, color: 'rgba(28, 31, 60, 1)' }}>
        RECOMENDATIONS
      </h2>
      <br />
      <div ref={sliderRef} className="keen-slider">
        {!isLoading &&
          similar_vehicles.map((car: any, idx: number) => {
            const {
              photos,
              id,
              year_,
              stock_number,
              cond,
              video,
              mileage,
              vtt_src,
              int_color,
              ext_color,
              logos,
              make,
              trim_,
              title_short,
              drive_train,
              price,
              model,
              vin,
            } = car;

            const vehicle = {
              id: id,
              ...(photos[600]?.length
                ? { photo_small: photos[600][0] }
                : { photo_small: no_photo }),
              title_short: title_short,
              is_special: false,
              pricing: price,
              permalink: '#',
              stock_number: stock_number,
              veh_no_photo_url: '',
              cond: cond,
              mileage_format: mileage,
              video: video,
              logos: logos,
              video_cc: vtt_src,
              ext_color: ext_color,
              int_color: int_color,
              make: make,
              trim: trim_,
              model: model,
              year: year_,
              drive_train: drive_train,
              vin: vin,
            };

            const srpThemeTranslator = getSrpTheme[srpCardsTheme];

            return (
              <div key={car.id} className="keen-slider__slide">
                {srpThemeTranslator(vehicle)}
              </div>
            );
          })}
        {similar_vehicles.length && slider.current && (
          <>
            <SliderArrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || slider.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <SliderArrow
              onClick={(e: any) =>
                e.stopPropagation() || slider.current?.next()
              }
              disabled={
                currentSlide === slider.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </RecommendedVehiclesContainer>
  );
};

export default RecommendedVehicles;

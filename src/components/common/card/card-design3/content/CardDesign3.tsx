import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'styled-components';
import { useSWRConfig } from 'swr';
import { useLocalStorage } from 'usehooks-ts';
import useQuery from '../../../../../hooks/useQuery';

import { Button } from '../../../button';
import CardVideo from '../../../card-video/content/CardVideo';
import Tooltip from '../../../tooltip/content/Tooltip';
import CardTopLabel from '../../card-design1/card-top-label/content/CardTopLabel';
import Card2Badge from '../../card-design2/content/card2-badge/content/Card2Badge';
import { CertifiedLogosContainer } from '../../card-design2/styles/cardDesign2.styles';
import CardExtColors from '../../card-ext-colors/content/CardExtColors';
import { currencyFormat } from '../../utils/utils';
import {
  Card3Container,
  Card3Header,
  Card3Image,
  Card3ImageWrapper,
  CarConditionContainer3,
  VehicleCond3,
  CardTitle3,
  StockNumber3,
  CardBody3,
  CardPrice3,
  CardMileageContainer3,
  CardLikeContainer3,
  CardFooter3,
  CardFooterInner3,
  CardMobileMileage3,
  CardExtColorsContainer3,
  CardExtColorsMobile3,
  CardAddressContainer3,
  CardBodyContent,
  CardAdressMobile,
} from '../styles/cardDesign3.styles';
const POSITION_FOR_BADGE = 15;

const CardDesign3 = ({ car }: any) => {
  const {
    id,
    photo_small,
    title_short,
    is_special,
    pricing,
    stock_number,
    veh_no_photo_url,
    cond,
    mileage_format,
    tag_addit_disclaimer,
    video,
    video_cc,
    tag_title,
    tag_addit_title,
    ext_color,
    int_color,
    logos,
    address_google_url,
    photo_base64,
    street,
    city,
    year,
    make,
    model,
    dealer_slug,
    vin,
    permalink,
    trim,
    drive_train,
  } = car;

  const theme = useTheme();
  const params = useQuery();
  const [savedCars, setSaveCar] = useLocalStorage<any>('savedCars', []);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleSaveCar = () => {
    setSaveCar((prev: any) => [
      ...prev,
      {
        title_short,
        year,
        make,
        model,
        trim,
        drive_train,
        logos,
        address_google_url,
        photo_base64,
        permalink,
        mileage_format,
        stock_number,
        id,
        video,
        video_cc,
      },
    ]);
  };

  const handleRemoveCar = (carToRemove: any) => {
    const updatedSavedCars = savedCars.filter(
      (saveCar: any) => saveCar.id !== carToRemove.id
    );
    setSaveCar(updatedSavedCars);
  };

  const isCarExists = () => {
    const exists = savedCars.find((saveCar: any) => saveCar.id === car.id);
    if (exists) {
      return (
        <CardLikeContainer3 active onClick={() => handleRemoveCar(car)}>
          <AiFillHeart size={15} color={theme.palette.primary.main} />
        </CardLikeContainer3>
      );
    } else {
      return (
        <CardLikeContainer3 onClick={handleSaveCar}>
          <AiOutlineHeart size={15} color={theme.palette.grey[400]} />
        </CardLikeContainer3>
      );
    }
  };

  return (
    <div
      style={{ border: '1px solid #ADACAC', borderRadius: 4 }}
      data-dealer={dealer_slug}
      data-stockNumber={stock_number}
      data-vin={vin}
    >
      <Card3Container>
        <CarConditionContainer3>
          <div style={{ display: 'flex', columnGap: 4 }}>
            <VehicleCond3 cond={cond}>{cond}</VehicleCond3>
            {stock_number ? (
              <StockNumber3> | #{stock_number}</StockNumber3>
            ) : (
              ''
            )}
          </div>
          {
            <Tooltip position="left" content="Save this vehicle">
              {isCarExists()}
            </Tooltip>
          }
        </CarConditionContainer3>
        <CardPrice3>
          <div>
            {isNaN(Number(pricing)) ? pricing : currencyFormat(Number(pricing))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardMobileMileage3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {mileage_format && <span>Color: {ext_color}</span>}
                <span>Interior Color: {int_color}</span>
              </div>
            </CardMobileMileage3>
            <CardExtColorsMobile3>
              <CardExtColors colors={[ext_color, int_color]} />
            </CardExtColorsMobile3>
          </div>
          <CardAdressMobile>
            <CardAddressContainer3 href={address_google_url} target="_blank">
              <GoLocation size={15} />
              <span>
                {street ? (
                  <>
                    {city},{street}
                  </>
                ) : (
                  <>{city}</>
                )}
              </span>
            </CardAddressContainer3>
          </CardAdressMobile>
        </CardPrice3>
        <Card3Header>
          {!isVideoPlaying && (
            <>
              {tag_title && (
                <CardTopLabel
                  shape="sharp"
                  disclaimer={car.tag_disclaimer}
                  text={tag_title}
                />
              )}
              {tag_addit_title && (
                <Card2Badge
                  disclaimer={tag_addit_disclaimer}
                  top={`${POSITION_FOR_BADGE}%`}
                  content={tag_addit_title}
                />
              )}
              {is_special || params.get('special') ? (
                <Card2Badge
                  top={`${
                    !tag_addit_title
                      ? POSITION_FOR_BADGE
                      : POSITION_FOR_BADGE + 17
                  }%`}
                  content="Special"
                />
              ) : undefined}
            </>
          )}
          <a href={permalink}>
            <Card3ImageWrapper>
              {video ? (
                <CardVideo
                  videoCC={video_cc}
                  poster={photo_small}
                  posterPlaceholder={photo_base64}
                  carData={car}
                  videoSrc={video}
                  errorImage={veh_no_photo_url}
                  cardDesign="theme1"
                  setVideoPlaying={setIsVideoPlaying}
                />
              ) : (
                <Card3Image
                  src={photo_small}
                  placeholder={photo_base64}
                  alt={title_short}
                  onErrorImage={veh_no_photo_url}
                />
              )}
            </Card3ImageWrapper>
          </a>
        </Card3Header>
        <CardBody3>
          <CardBodyContent>
            <div>
              <a href={permalink}>
                <CardTitle3>
                  {title_short?.length > 50
                    ? title_short.slice(1, 50) + '..'
                    : title_short}
                </CardTitle3>
              </a>
              <CardMileageContainer3>
                {mileage_format && <span>Color: {ext_color}</span>} |{' '}
                <span>Interior Color: {int_color}</span>
              </CardMileageContainer3>
            </div>
            <CardExtColorsContainer3>
              <CardExtColors colors={[ext_color, int_color]} />
            </CardExtColorsContainer3>
          </CardBodyContent>
          <CardAddressContainer3 href={address_google_url} target="_blank">
            {street ? (
              <>
                <GoLocation size={15} />
                {city},{street}
              </>
            ) : (
              <>
                {city && <GoLocation size={15} />}
                <>{city}</>
              </>
            )}
          </CardAddressContainer3>
        </CardBody3>
      </Card3Container>

      <CardFooter3>
        <CardFooterInner3>
          <Button
            variant="outlined"
            shape="sharp"
            style={{ border: '1px solid #b6b6b6', fontSize: '0.8em' }}
          >
            Estimate Payment
          </Button>

          <CertifiedLogosContainer>
            {logos?.length
              ? logos
                  .filter((logo: any) => logo.name === 'certified')
                  .map(({ url, src, name }: any) => (
                    <a key={`${name}-${url}`} href={url} target="_blank">
                      <img width={90} height={30} src={src} alt={name} />
                    </a>
                  ))
              : ''}
          </CertifiedLogosContainer>
        </CardFooterInner3>
      </CardFooter3>
    </div>
  );
};

export default CardDesign3;

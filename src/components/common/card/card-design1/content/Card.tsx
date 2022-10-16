import React, { useState } from 'react';
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  VehicleCond,
  CardPrice,
  CardFooter,
  CardAction,
  CarConditionContainer,
  CardImageWrapper,
  CardImage,
  VehicleStockContainer,
} from '../styles/card.styles';
import { Button } from '../../../button';
import { motion } from 'framer-motion';
import { CardPropsType } from './card_types';

import CardVideo from '../../../card-video/content/CardVideo';
import CardTopLabel from '../card-top-label/content/CardTopLabel';
import { useSWRConfig } from 'swr';
import { currencyFormat } from '../../utils/utils';
import { kFormatter } from '../../../badge/content/Badge';
import Card2Badge from '../../card-design2/content/card2-badge/content/Card2Badge';
import useSaveCar from '../../../../../hooks/useSaveCar';
import useVehicle from '../../../../../hooks/useVehicle';

import useQuery from '../../../../../hooks/useQuery';

const POSITION_FOR_BADGE = 15;

const Card: React.FC<CardPropsType> = ({ car }: CardPropsType) => {
  const {
    id,
    photo_small,
    title_short,
    is_special,
    pricing,
    vin,
    stock_number,
    veh_no_photo_url,
    cond,
    mileage_format,
    video,
    video_cc,
    tag_title,
    tag_addit_title,
    tag_disclaimer,
    tag_addit_disclaimer,
    photo_base64,
    year,
    make,
    model,
    dealer_slug,
  } = car;
  const params = useQuery();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const { renderSaveCar } = useSaveCar(car);
  const { cache } = useSWRConfig();

  const [vehicleId, setVehicleId] = useState(null);
  const data = useVehicle(vehicleId);

  const handleNavigateToVehicle = () => {
    const existsInCache = cache.get(`${id}`);

    if (existsInCache) {
      window.location.assign(`#/vdp/${year}/${make}/${model}/${id}`);
    } else {
      setVehicleId(car.id);
    }
  };

  return (
    <>
      <CardContainer
        as={motion.div}
        whileHover={{
          scale: 1.01,
          zIndex: 3,
          boxShadow: '0px 4px 11px 0px rgba(0, 0, 0, 0.1)',
        }}
        data-dealer={dealer_slug}
        data-stockNumber={stock_number}
        data-vin={vin}
      >
        <CardHeader>
          {tag_title && (
            <CardTopLabel
              shape="rounded"
              disclaimer={tag_disclaimer}
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
                !tag_addit_title ? POSITION_FOR_BADGE : POSITION_FOR_BADGE + 17
              }%`}
              content="Special"
            />
          ) : undefined}

          <CardImageWrapper>
            {video ? (
              <CardVideo
                videoCC={video_cc}
                poster={photo_small}
                posterPlaceholder={photo_base64}
                videoSrc={video}
                errorImage={veh_no_photo_url}
                carData={car}
                setVideoPlaying={setIsVideoPlaying}
                cardDesign="theme2"
              />
            ) : (
              <CardImage
                onClick={handleNavigateToVehicle}
                src={photo_small}
                placeholder={photo_base64}
                alt={title_short}
                onErrorImage={veh_no_photo_url}
                link={car.id}
              />
            )}
          </CardImageWrapper>
        </CardHeader>

        <div
          onClick={handleNavigateToVehicle}
          style={{ paddingInline: '1em', paddingTop: '0.5em' }}
        >
          <CarConditionContainer>
            <VehicleCond cond={cond}>{cond}</VehicleCond>
            <VehicleStockContainer>
              {stock_number ? `| #${stock_number}` : ''}
            </VehicleStockContainer>
          </CarConditionContainer>
          <CardTitle>
            {title_short?.length > 40
              ? title_short.slice(1, 40) + '..'
              : title_short}
          </CardTitle>
        </div>
        <CardBody>
          <CardPrice>
            <CardSubtitle>
              {kFormatter(Number(mileage_format))} miles
            </CardSubtitle>
            {isNaN(Number(pricing)) ? pricing : currencyFormat(Number(pricing))}
          </CardPrice>
        </CardBody>

        <CardFooter style={{ zIndex: 99999 }}>
          {renderSaveCar()}
          <CardAction>
            <Button onClick={handleNavigateToVehicle} block>
              SEE DETAILS
            </Button>
          </CardAction>
        </CardFooter>
      </CardContainer>
    </>
  );
};

export default Card;

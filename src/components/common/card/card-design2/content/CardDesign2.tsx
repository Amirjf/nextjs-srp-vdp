import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import Link from 'next/link';
import { useTheme } from 'styled-components';
import { useCopyToClipboard, useLocalStorage } from 'usehooks-ts';
import useVehicle from '../../../../../hooks/useVehicle';
import { kFormatter } from '../../../badge/content/Badge';
import CardVideo from '../../../card-video/content/CardVideo';
import Tooltip from '../../../tooltip/content/Tooltip';
import CardTopLabel from '../../card-design1/card-top-label/content/CardTopLabel';
import { currencyFormat } from '../../utils/utils';
import {
  Card2Container,
  Card2Header,
  Card2Image,
  Card2ImageWrapper,
  CarConditionContainer2,
  VehicleCond2,
  CardTitle2,
  StockNumnber2,
  CardBody2,
  CardFooter2,
  CardMileage2,
  CardLikeContainer2,
  CardPriceContainer2,
  CertifiedLogosContainer,
  CardAddressContainer,
  FooterRow,
} from '../styles/cardDesign2.styles';
import Card2Badge from './card2-badge/content/Card2Badge';
import { CardDesign2Props } from './cardDesign2_types';
import { useSWRConfig } from 'swr';
import useQuery from '../../../../../hooks/useQuery';
import { CopyableText } from '../../../../VDP/vehicle-info/styles/vehicleInfo.styles';
import { FaRegCopy } from 'react-icons/fa';
import { handleShowingTextWithTradeMark } from '../../../../../global/utils/utils';

const POSITION_FOR_BADGE = 15;

const CardDesign2 = ({ car }: CardDesign2Props) => {
  const {
    vin,
    photo_small,
    title_short,
    is_special,
    pricing,
    stock_number,
    veh_no_photo_url,
    cond,
    mileage_format,
    video,
    video_cc,
    tag_title,
    tag_disclaimer,
    tag_addit_title,
    logos,
    address_google_url,
    address_full,
    tag_addit_disclaimer,
    street,
    city,
    photo_base64,
    year,
    make,
    model,
    buttons,
    dealer_slug,
    drive_train,
  } = car;
  const theme = useTheme();
  const params = useQuery();
  const [savedCars, setSaveCar] = useLocalStorage<any>('savedCars', []);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const [stockNumCopyValue, copyStockNumber] = useCopyToClipboard();

  const handleSaveCar = () => {
    setSaveCar((prev: any) => [...prev, car]);
  };

  const handleRemoveCar = (carToRemove: any) => {
    const updatedSavedCars = savedCars.filter(
      (saveCar: any) => saveCar.id !== carToRemove.id
    );
    setSaveCar(updatedSavedCars);
  };

  const handleSavingVehicle = () => {
    const exists = savedCars.find((saveCar: any) => saveCar.id === car.id);
    if (exists) {
      return (
        <CardLikeContainer2 onClick={() => handleRemoveCar(car)}>
          <AiFillHeart size={18} color={theme.palette.primary.main} />
        </CardLikeContainer2>
      );
    } else {
      return (
        <CardLikeContainer2 onClick={handleSaveCar}>
          <AiOutlineHeart size={18} color={theme.palette.grey[400]} />
        </CardLikeContainer2>
      );
    }
  };

  return (
    <Card2Container
      as={motion.div}
      whileHover={{
        scale: 1.01,
        zIndex: 3,
        boxShadow: '0px 4px 11px 0px rgba(0, 0, 0, 0.1)',
      }}
      data-dealer={dealer_slug}
      data-stockNumber={stock_number}
      data-vin={vin}
      data-cond={`${cond}`}
    >
      <Card2Header>
        {!isVideoPlaying && (
          <>
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
                  !tag_addit_title
                    ? POSITION_FOR_BADGE
                    : POSITION_FOR_BADGE + 17
                }%`}
                content="Special"
              />
            ) : undefined}
          </>
        )}
        <Link prefetch={false} href={`vehicle/${vin}`}>
          <a>
            <Card2ImageWrapper>
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
                //@ts-ignore
                <Card2Image
                  placeholder={photo_base64 ? 'blur' : 'empty'}
                  blurDataURL={photo_base64}
                  layout="fill"
                  priority
                  src={photo_small}
                  alt={title_short}
                />
              )}
            </Card2ImageWrapper>
          </a>
        </Link>
      </Card2Header>
      <CardBody2>
        <CarConditionContainer2>
          <div style={{ display: 'flex', columnGap: 4 }}>
            <VehicleCond2 cond={cond}>
              {cond === 'used' ? 'Pre-Owned' : cond}
            </VehicleCond2>
            {stock_number && '|'}
            {stock_number ? (
              <Tooltip
                showOnClick
                position="right"
                content={true ? 'Stock # Copied !' : 'Click to Copy'}
              >
                <CopyableText>
                  <StockNumnber2 onClick={() => copyStockNumber(stock_number)}>
                    #{stock_number}
                    <FaRegCopy />
                  </StockNumnber2>
                </CopyableText>
              </Tooltip>
            ) : (
              ''
            )}
          </div>
          {
            <Tooltip position="left" content="Save this vehicle">
              {handleSavingVehicle()}
            </Tooltip>
          }
        </CarConditionContainer2>

        <CardTitle2
          dangerouslySetInnerHTML={{
            __html: handleShowingTextWithTradeMark(
              `${year} ${make} ${model} ${drive_train}`
            ),
          }}
        ></CardTitle2>

        <CardFooter2>
          <FooterRow>
            <CardMileage2>
              {kFormatter(Number(mileage_format))} miles
            </CardMileage2>
            <CardPriceContainer2>
              {!pricing || isNaN(Number(pricing))
                ? 'Call for Price'
                : currencyFormat(Number(pricing))}
            </CardPriceContainer2>
          </FooterRow>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: 36,
            }}
          >
            <CardMileage2>
              {address_full || city || street ? (
                <CardAddressContainer href={address_google_url} target="_blank">
                  {street ? (
                    <>
                      <GoLocation size={15} />
                      <span>{street}</span>
                    </>
                  ) : (
                    <>
                      <GoLocation size={15} />
                      <span>{city}</span>
                    </>
                  )}
                </CardAddressContainer>
              ) : (
                ''
              )}
            </CardMileage2>
            <CertifiedLogosContainer>
              {logos?.length ? (
                logos.map(({ url, src, name }: any) => {
                  if (!url.length) {
                    return (
                      <span key={`${name}-logo`} style={{ cursor: 'pointer' }}>
                        <img width={90} height={30} src={src} alt={name} />
                      </span>
                    );
                  }
                  return (
                    <a
                      key={`${name}-logo`}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img width={90} height={30} src={src} alt={name} />
                    </a>
                  );
                })
              ) : (
                <CardPriceContainer2></CardPriceContainer2>
              )}
            </CertifiedLogosContainer>
          </div>
        </CardFooter2>
      </CardBody2>
      <div className="srp-btns-container">
        {buttons && <span dangerouslySetInnerHTML={{ __html: buttons }}></span>}
        <a
          href={`https://express.spokanemercedes.com/express/${vin}`}
          className="roadster-btn"
        >
          <button className="cbtn is_desk is_mobile">
            SEE PAYMENT OPTIONS
          </button>
        </a>
      </div>
    </Card2Container>
  );
};

export default CardDesign2;

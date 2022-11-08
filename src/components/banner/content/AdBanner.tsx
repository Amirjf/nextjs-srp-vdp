import { Fragment, useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import useBanners from '../../../hooks/useBanners';

import { Button, Typography } from '../../common';
import DisclaimerTooltip from '../../common/card/shared-components/tag-discaimer/DisclaimerTooltip';
import { BannerAd } from '../../common/main-content/styles/mainContent.styles';
import { Space } from '../../common/space';
import {
  BannerDisclaimerContainer,
  ExpiresDateContainer,
  BannerInfoContainer,
} from '../styles/banner.styles';
import VerticalAdBanner from './VerticalAdBanner';

const Banner = ({ position, getCols }: any) => {
  const { bannersToShow } = useBanners();

  const [isActive, setIsActive] = useState(false);
  const [imgDimensions, setImgDimensions] = useState(0);

  const showTip = () => {
    setIsActive(true);
  };

  const hideTip = () => {
    setIsActive(false);
  };

  const getImagedimensions = ({ target: img }: any) => {
    setImgDimensions(img.naturalWidth);
  };

  const isBannerDynamic = imgDimensions < 1080;

  const handleBanners = (indexOfBanner: number) => {
    return bannersToShow.map((banner: any, bannerIndex: number) => {
      const indexBanner = Math.floor(indexOfBanner / getCols) - 1;

      const {
        is_vertical,
        title,
        link_url,
        link_target,
        image_mob,
        image,
        disclaimer,
        additional_info,
        expires_at,
      } = banner;

      if (bannerIndex === indexBanner) {
        if (is_vertical) {
          return (
            <VerticalAdBanner
              key={`${title}${bannerIndex}`}
              bannerContent={banner}
            />
          );
        } else {
          return (
            <Fragment key={`${title}${bannerIndex}`}>
              <BannerAd
                href={link_url}
                target={link_target}
                style={{
                  background: isBannerDynamic ? '#fff' : 'unset',
                  borderRadius: 5,
                }}
              >
                <span
                  style={{
                    width: isBannerDynamic ? 'auto' : '100%',
                    background: isBannerDynamic ? '#fff' : 'unset',
                    maxWidth: isBannerDynamic ? '25%' : 'unset',
                  }}
                >
                  <img
                    style={{ width: '100%', height: 'auto' }}
                    src={image_mob.length ? image_mob : image}
                    loading="lazy"
                    decoding="async"
                    onLoad={getImagedimensions}
                  />
                </span>
                {isBannerDynamic && title && (
                  <BannerInfoContainer>
                    <Space direction="vertical" alignItems="center">
                      <Typography variant="h3">{title}</Typography>
                      <Typography variant="subtitle2" align="center">
                        {additional_info}
                      </Typography>
                      <a href={link_url} target={link_target}>
                        <Button variant="text">Click Here</Button>
                      </a>
                    </Space>
                  </BannerInfoContainer>
                )}

                <BannerDisclaimerContainer
                  onMouseEnter={showTip}
                  onMouseLeave={hideTip}
                >
                  {disclaimer && (
                    <Button
                      style={{ fontSize: 14 }}
                      variant="text"
                      icon={<BiHelpCircle />}
                    >
                      Disclaimer
                    </Button>
                  )}
                  {isActive && disclaimer && (
                    <DisclaimerTooltip content={disclaimer} />
                  )}
                </BannerDisclaimerContainer>
                {expires_at && (
                  <ExpiresDateContainer>
                    expires at {expires_at}
                  </ExpiresDateContainer>
                )}
              </BannerAd>
            </Fragment>
          );
        }
      }
    });
  };

  return handleBanners(position);
};

export default Banner;

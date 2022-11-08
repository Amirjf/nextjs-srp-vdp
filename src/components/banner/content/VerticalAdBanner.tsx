import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import useToggle from '../../../hooks/useToggle';
import { Button } from '../../common';
import CardDisclaimer from '../../common/card-disclaimer/content/CardDisclaimer';
import { Space } from '../../common/space';
import {
  VerticalBannerBody,
  VerticalBannerContainer,
  VerticalHeaderContainer,
  VerticalBannerFooter,
  VerticalBannerWrapper,
} from '../styles/banner.styles';

type VerticalBannerProps = {
  bannerContent: any;
};

const VerticalAdBanner = ({ bannerContent }: VerticalBannerProps) => {
  const [showDisclaimer, setShowDisclaimer] = useToggle();

  const { additional_info, expires_at, image, title, link_url, disclaimer } =
    bannerContent;

  return (
    <VerticalBannerWrapper>
      <VerticalBannerContainer>
        <VerticalHeaderContainer>
          <img
            style={{
              width: '75%',
              height: 'auto',
              minHeight: 80,
              paddingBottom: 12,
            }}
            src={image}
            alt={title}
          />
          <h3>{title}</h3>
        </VerticalHeaderContainer>
        <VerticalBannerBody>
          <div dangerouslySetInnerHTML={{ __html: additional_info }}></div>
          <a href={link_url}>
            <Button variant="text">Get Your Offer</Button>
          </a>
        </VerticalBannerBody>
        <VerticalBannerFooter>
          {expires_at && <span>Expires at {expires_at}</span>}
        </VerticalBannerFooter>
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            width: 200,
            height: 'max-content',
          }}
        >
          {disclaimer && (
            <Space
              onClick={setShowDisclaimer}
              align="end"
              style={{ cursor: 'pointer', columnGap: 2, fontSize: 14 }}
              alignItems="center"
            >
              <BiHelpCircle />
              Disclaimer
            </Space>
          )}
        </div>
      </VerticalBannerContainer>
      <AnimatePresence>
        {showDisclaimer && (
          <CardDisclaimer
            toggleDisclaimer={setShowDisclaimer}
            title="Disclaimer"
            content={disclaimer}
          />
        )}
      </AnimatePresence>
    </VerticalBannerWrapper>
  );
};

export default VerticalAdBanner;

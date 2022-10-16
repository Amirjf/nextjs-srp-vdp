import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import Modal from 'styled-react-modal';
import { Button, Divider, Typography } from '../../common';
import DisclaimerTooltip from '../../common/card/shared-components/tag-discaimer/DisclaimerTooltip';
import { Space } from '../../common/space';
import {
  VerticalBannerBody,
  VerticalBannerContainer,
  VerticalHeaderContainer,
  VerticalBannerFooter,
} from '../styles/banner.styles';

type VerticalBannerProps = {
  bannerContent: any;
};

const VerticalAdBanner = ({ bannerContent }: VerticalBannerProps) => {
  const [showKeys, setShowKeys] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const { additional_info, expires_at, image, title, link_url, disclaimer } =
    bannerContent;
  function toggleModal() {
    setOpacity(0);
    setShowKeys(!showKeys);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }
  return (
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
            onClick={toggleModal}
            align="end"
            style={{ cursor: 'pointer', columnGap: 2, fontSize: 14 }}
            alignItems="center"
          >
            <BiHelpCircle />
            Disclaimer
          </Space>
        )}
      </div>
      <Modal
        isOpen={showKeys}
        afterOpen={afterOpen}
        onEscapeKeydown={toggleModal}
        backgroundProps={{
          opacity,
          backgroundColor: 'rgba(0,0,0,0.93)',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '70%',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: 5,
              padding: '1rem',
            }}
          >
            <div style={{ position: 'absolute', top: -25, right: -28 }}>
              <Button variant="text" onClick={toggleModal}>
                <AiFillCloseCircle color="#fff" size={30} />
              </Button>
            </div>
            <div>
              <Typography variant="h5">Disclaimer</Typography>
              <Divider middle style={{ width: '30%' }} />
              <Typography variant="body2" style={{ textAlign: 'justify' }}>
                {disclaimer}
              </Typography>
            </div>
          </div>
        </div>
      </Modal>
    </VerticalBannerContainer>
  );
};

export default VerticalAdBanner;

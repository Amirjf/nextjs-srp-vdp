import { useContext } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import useBottomInfoSlider from '../../../../hooks/useBottomInfoSlider';
import useVehicle from '../../../../hooks/useVehicle';
import { Button } from '../../../common';
import { currencyFormat } from '../../../common/card/utils/utils';
import { Space } from '../../../common/space';
import {
  CardContainer,
  CardInner,
  Indicator,
  IndicatorWrapper,
  VehiclePrice,
  VehicleTitle,
} from '../styles/vehicleInfo.styles';
import GoBackButton from './GoBackButton';

import { ACTIONS } from './VehicleInfo';

const MobileVehicleInfoSlider = () => {
  const params = useParams();
  const { data } = useVehicle(params.id);
  const { infoAction, setPageAction }: any = useContext(VdpContext);
  const { year, make, model, body, pricing } = data;

  const { scrolling, sliderRef, initialSlide, slider } = useBottomInfoSlider();

  const handleShowingSlider = (e: any) => {
    e.stopPropagation();
    if (initialSlide === 0) {
      slider.current?.moveToIdx(2);
    } else {
      slider.current?.moveToIdx(0);
    }
  };

  return (
    <CardContainer>
      <CardInner
        className="keen-slider"
        style={{ height: '95vh' }}
        ref={sliderRef}
      >
        <div
          data-keen-slider-scrollable
          style={{
            height: '100%',
            overflowY: scrolling ? 'scroll' : 'visible',
            width: '100%',
            position: 'relative',
            padding: '0 15px',
          }}
        >
          <IndicatorWrapper onClick={handleShowingSlider}>
            <Indicator />
          </IndicatorWrapper>
          <div
            style={{
              minHeight: 'auto',
              overflow: 'visible',
              borderRadius: '4px',
              boxSizing: 'border-box',
              paddingTop: 20,
            }}
            className="keen-slider__slide"
          >
            <Space align="space-between">
              <VehicleTitle>
                {`${year} ${make} ${model}`}
                <br />
                <span>{body}</span>
              </VehicleTitle>
              <Space direction="vertical">
                <VehiclePrice>
                  {' '}
                  {isNaN(Number(pricing))
                    ? pricing
                    : currencyFormat(Number(pricing))}
                </VehiclePrice>
                <span
                  style={{ display: 'flex', justifyContent: 'start' }}
                  onClick={() => setPageAction('Price Details')}
                >
                  <Button variant="text" scale="sm" icon={<FiHelpCircle />}>
                    Price Details
                  </Button>
                </span>
              </Space>
            </Space>
            {initialSlide !== 2 && (
              <Button
                onClick={(e: any) => {
                  setPageAction('Choose an Option');
                  handleShowingSlider(e);
                }}
                block
                style={{
                  backgroundColor: 'var(--mainColor)',
                  fontWeight: 300,
                  borderRadius: 15,
                  marginTop: 15,
                  fontFamily: 'Arial',
                }}
              >
                {`I'm Interested`}
              </Button>
            )}
          </div>
          <div style={{ paddingBottom: 20 }} className="keen-slider__slide">
            <br />
            {infoAction !== 'baseInfo' && <GoBackButton />}

            {ACTIONS[infoAction]}
          </div>
        </div>
      </CardInner>
    </CardContainer>
  );
};

export default MobileVehicleInfoSlider;

import { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import useVehicle from '../../../../hooks/useVehicle';
import {
  FeatureItemsContainer,
  KeyFeatureItemContainer,
  KeyFeaturesModal,
} from '../../../car-keyFeature-filter/styles/carKeyFeaturesFilter.styles';
import { FEATURES_ICONS } from '../../../car-keyFeature-filter/utils/constants';
import { formatString } from '../../../car-keyFeature-filter/utils/utils';
import { Button, Typography } from '../../../common';

import IconBox from '../../../common/icon-box/content/IconBox';
import { Space } from '../../../common/space';
import KeyFeatureItemSelect from '../../../key-feature-item/content/KeyFeatureItemSelect';
import { VehicleAdvatagesTitle } from '../styles/vehicleAdvantages.styles';

const VehicleAdvantages = () => {
  const params = useParams();
  const { data } = useVehicle(params.id);

  const [showKeys, setShowKeys] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const { key_features } = data;

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
    <div style={{ marginBlock: 30 }}>
      <br />
      <VehicleAdvatagesTitle>
        Main advantages buying this car
      </VehicleAdvatagesTitle>
      <br />
      <Space style={{ rowGap: 20 }} wrap align="flex-start">
        {key_features
          ?.map((feature: string, idx: number) => (
            <IconBox
              key={idx}
              style={{ rowGap: 10 }}
              title={feature}
              icon={FEATURES_ICONS[formatString(feature).toLowerCase()]}
            />
          ))
          .slice(0, 3)}
        {key_features.length > 6 && (
          <IconBox
            onClick={toggleModal}
            style={{ cursor: 'pointer', columnGap: 10 }}
            orientation="row"
            title="VIEW MORE"
            icon={<FiMoreVertical />}
          />
        )}
      </Space>
      <KeyFeaturesModal
        isOpen={showKeys}
        afterOpen={afterOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        backgroundProps={{ opacity }}
      >
        <div style={{ position: 'absolute', top: '22px', right: '12px' }}>
          <Button variant="text" onClick={toggleModal}>
            <MdClose onClick={toggleModal} size={33} />
          </Button>
        </div>
        <br />
        <div
          style={{
            paddingInline: 50,
          }}
        >
          <Typography variant="h5">KEY FEATURES</Typography>
        </div>
        <br />

        <FeatureItemsContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {key_features?.map((item: any, i: number) => {
              return (
                <KeyFeatureItemContainer key={`${i}`}>
                  <KeyFeatureItemSelect
                    name={item}
                    value={item}
                    disabled
                    id={item}
                    label={`${item}`}
                    icon={FEATURES_ICONS[formatString(item).toLowerCase()]}
                  />
                </KeyFeatureItemContainer>
              );
            })}
          </div>
        </FeatureItemsContainer>
      </KeyFeaturesModal>
    </div>
  );
};

export default VehicleAdvantages;

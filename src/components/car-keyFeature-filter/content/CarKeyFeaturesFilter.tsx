import React from 'react';
import { MdClose, MdOutlineFeaturedPlayList } from 'react-icons/md';
import { CarsContext } from '../../../context/CarsContext';
import { Button, Typography } from '../../common';

import KeyFeatureItemSelect from '../../key-feature-item/content/KeyFeatureItemSelect';
import {
  KeyFeatureButton,
  KeyFeaturesModal,
  FeatureItemsContainer,
  KeyFeatureItemContainer,
} from '../styles/carKeyFeaturesFilter.styles';
import { FEATURES_ICONS } from '../utils/constants';
import { formatString } from '../utils/utils';

const CarKeyFeaturesFilter = ({ items }: any) => {
  const [showKeys, setShowKeys] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);

  const { addFilters, clearItemFromFilters }: any =
    React.useContext(CarsContext);

  const handleAddFilter = (event: any) => {
    if (event.target.checked) {
      addFilters({ key: 'key_features', value: event.target.value });
    } else {
      clearItemFromFilters({ key: 'key_features', value: event.target.value });
    }
  };

  function toggleModal() {
    setOpacity(0);
    setShowKeys(!showKeys);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  const handleChecked = (name: string) => {
    const params = new URLSearchParams(window.location.search);
    const getFeatures = params.getAll('key_features');
    return getFeatures.includes(name);
  };

  return (
    <div>
      <KeyFeatureButton onClick={toggleModal}>
        <MdOutlineFeaturedPlayList size={29} />
        <span>CHOOSE FEATURE</span>
      </KeyFeatureButton>
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
          <Typography variant="h4">KEY FEATURES</Typography>
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
            {items.map((item: any, i: number) => {
              const name = Object.keys(item).join();
              const count = Object.values(item).join();
              return (
                <KeyFeatureItemContainer key={`${i}`}>
                  <KeyFeatureItemSelect
                    onChange={handleAddFilter}
                    name={name}
                    value={name}
                    checked={handleChecked(name)}
                    id={name}
                    label={`${name}`}
                    count={count}
                    icon={FEATURES_ICONS[formatString(name).toLowerCase()]}
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

export default CarKeyFeaturesFilter;

import React from 'react';
import { MdClose, MdOutlineFeaturedPlayList } from 'react-icons/md';
import useApplyFilter from '../../../hooks/useApplyFilter';
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
  const [showModal, setShowModal] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const { onFilterChange, checkHandler } = useApplyFilter('key_features');

  function toggleModal() {
    setOpacity(0);
    setShowModal(!showModal);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  return (
    <div>
      <KeyFeatureButton onClick={toggleModal}>
        <MdOutlineFeaturedPlayList size={29} />
        <span>CHOOSE FEATURE</span>
      </KeyFeatureButton>
      <KeyFeaturesModal
        isOpen={showModal}
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
              const name = Object.keys(item).join().toLowerCase();
              const count = Object.values(item).join();
              return (
                <KeyFeatureItemContainer key={`${i}`}>
                  <KeyFeatureItemSelect
                    onChange={onFilterChange}
                    name={name}
                    value={name}
                    checked={checkHandler(name)}
                    id={name}
                    label={`${name}`}
                    count={count}
                    icon={FEATURES_ICONS[formatString(name)]}
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

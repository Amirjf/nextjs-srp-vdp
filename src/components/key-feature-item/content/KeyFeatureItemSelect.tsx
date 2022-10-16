import React from 'react';
import { CarsContext } from '../../../context/CarsContext';
import {
  KeyFeatureCheckbox,
  KeyFeatureCount,
  KeyFeatureItemContainer,
  KeyFeatureLabel,
  FeatureIconContainer,
  FeatureContent,
} from '../styles/keyFeatureItemSelect.styles';
import { KeyFeaturesProps } from './keyFeaturesItem_types';

const KeyFeatureItemSelect: React.FC<KeyFeaturesProps> = ({
  onChange,
  label,
  name,
  ...props
}: KeyFeaturesProps) => {
  const { loadingFilters }: any = React.useContext(CarsContext);

  return (
    <KeyFeatureItemContainer loading={loadingFilters}>
      <KeyFeatureCheckbox
        onChange={onChange}
        id={name}
        type="checkbox"
        name={name}
        {...props}
      />
      <KeyFeatureLabel htmlFor={name}>
        <FeatureContent>
          {props.icon ? (
            <FeatureIconContainer>{props.icon}</FeatureIconContainer>
          ) : (
            ''
          )}
          {label}
        </FeatureContent>
        <KeyFeatureCount checked={props.checked}>
          {props.count?.toString()}
        </KeyFeatureCount>
      </KeyFeatureLabel>
    </KeyFeatureItemContainer>
  );
};

export default KeyFeatureItemSelect;

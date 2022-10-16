import React from 'react';
import { handleShowingTextWithTradeMark } from '../../../../global/utils/utils';
import useFilters from '../../../../hooks/useFilters';

import {
  CheckboxContainer,
  CustomCheckbox,
  CheckboxLabel,
  CheckboxCount,
} from '../styles/checkbox.styles';
import { CheckboxProps } from './checkbox_types';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  value,
  onChange,
  count,
  ...props
}: CheckboxProps) => {
  const { isLagging } = useFilters();

  const transltedLabel = handleShowingTextWithTradeMark(label);

  return (
    <CheckboxContainer loading={isLagging}>
      <CheckboxLabel>
        <CustomCheckbox
          onChange={onChange}
          type="checkbox"
          name={name?.toString()}
          value={value?.toString()}
          id={name?.toString()}
          {...props}
        />
        <span
          dangerouslySetInnerHTML={{
            __html:
              transltedLabel.length > 20
                ? transltedLabel.slice(1, 21) + ' ...'
                : transltedLabel,
          }}
        ></span>
      </CheckboxLabel>
      <CheckboxCount>{count?.toString()}</CheckboxCount>
    </CheckboxContainer>
  );
};
export default Checkbox;

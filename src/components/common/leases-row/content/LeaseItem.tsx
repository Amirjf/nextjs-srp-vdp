import React from 'react';
import { Space } from '../../space';
import { LeaseItemContainer } from '../styles/leasesRow.styles';

const LeaseItem = ({ item }: any) => {
  return (
    <LeaseItemContainer>
      <span>{item.fieldName}</span>
      <Space direction="vertical" style={{ rowGap: 2 }}>
        <h4>{item.fieldTitle}</h4>
        <p>{item.fieldDescription}</p>
      </Space>
    </LeaseItemContainer>
  );
};

export default LeaseItem;

import React from 'react';
import { LeaseRowContainer } from '../styles/leasesRow.styles';
import LeaseItem from './LeaseItem';

const data = [
  {
    fieldName: 'Lease',
    fieldTitle: '$229 /mo',
    fieldDescription: 'For 36 months, $1049 due at signing',
  },
  {
    fieldName: 'Lease',
    fieldTitle: '$229 /mo',
    fieldDescription: 'For 36 months, $1049 due at signing',
  },
  {
    fieldName: 'Lease',
    fieldTitle: '$229 /mo',
    fieldDescription: 'For 36 months, $1049 due at signing',
  },
  {
    fieldName: 'Lease',
    fieldTitle: '$229 /mo',
    fieldDescription: 'For 36 months, $1049 due at signing',
  },
  {
    fieldName: 'Lease',
    fieldTitle: '$229 /mo',
    fieldDescription: 'For 36 months, $1049 due at signing',
  },
  {
    fieldName: 'Lease',
    fieldTitle: '$229 /mo',
    fieldDescription: 'For 36 months, $1049 due at signing',
  },
];

const LeasesRow = () => {
  return (
    <LeaseRowContainer>
      {data.map((field: any) => (
        <LeaseItem item={field} />
      ))}
    </LeaseRowContainer>
  );
};

export default LeasesRow;

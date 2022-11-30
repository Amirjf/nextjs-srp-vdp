import axios from 'axios';
import React from 'react';
import SRPApp from '../src/components/srp-app/SRPApp';

const srp = ({ initVehicles }: any) => {
  return <SRPApp initVehicles={initVehicles} />;
};

export default srp;

export const getServerSideProps = async ({ res }: any) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=159'
  );

  let url = `https://salemnissan.datgate.com/api/json/vehicles/fl.json?url=inventory`;
  const result = await axios.get(url);

  return {
    props: {
      initVehicles: result.data,
    },
  };
};

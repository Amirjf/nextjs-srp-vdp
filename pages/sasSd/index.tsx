import axios from 'axios';
import { useRouter } from 'next/router';

import React from 'react';
import SRPApp from '../../src/components/srp-app/SRPApp';

const index = ({ initVehicles }: any) => {
  // const router = useRouter();
  // console.log(router);
  return <></>;
};
// export const getServerSideProps = async (router: any) => {
//   let url = `https://salemnissan.datgate.com/api/json/vehicles/fl.json?url=inventory/make=${router.query.make}`;
//   const result = await axios.get(url);

//   return {
//     props: {
//       initVehicles: result.data,
//     },
//   };
// };

export default index;

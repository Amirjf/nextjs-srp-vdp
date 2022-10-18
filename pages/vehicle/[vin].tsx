import { useRouter } from 'next/router';
import React from 'react';

const VDPPage = () => {
  const router = useRouter();
  console.log(router);
  return <div>VDP</div>;
};

export default VDPPage;

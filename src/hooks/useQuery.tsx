import { useRouter } from 'next/router';
import React from 'react';

const useQuery = () => {
  const router = useRouter();

  return new URLSearchParams(router.asPath);
};

export default useQuery;

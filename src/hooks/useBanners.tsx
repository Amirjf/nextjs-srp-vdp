import { useContext } from 'react';
import { CarsContext } from '../context/CarsContext';
import { useMediaQuery } from 'usehooks-ts';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import CarClient from '../client/client';
const fetcher = (url: string) => CarClient.get(url).then((res) => res.data);

const useBanners = () => {
  const { data, error } = useSWR(
    'https://spokanemercedes.com/api/json/vehicles/opt.json?type=srpbanners',
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  const mediumMedia = useMediaQuery('(min-width:768px) and (max-width:1700px)');
  const lgMedia = useMediaQuery('(min-width:1700px');
  const xlMedia = useMediaQuery('(min-width:2300px)');
  const smMedia = useMediaQuery('(min-width:525px) and (max-width:768px)');
  const xsMedia = useMediaQuery('(max-width:525px)');
  const { asPath } = useRouter();
  const {
    filters: { make, model },
  }: any = useContext(CarsContext);

  const params = new URLSearchParams(asPath);
  const vehicleConds: any = params.getAll('cond');

  const getBannersData = data;

  const bannersToShow = getBannersData?.banners_data.filter((item: any) => {
    const bannersForModels = item.model;

    if (make?.length && bannersForModels[0] === 'not_set') {
      return item.make.includes(...make);
    }

    if (model?.length && bannersForModels[0] !== 'not_set') {
      return bannersForModels.includes(...model);
    }

    if (item.make[0] === 'not_set' && item.model[0] === 'not_set') {
      return item.cond.includes(...vehicleConds);
    }
  });

  const handleMediaQuery = () => {
    const ROW = Number(getBannersData?.banner_row);

    if (smMedia) {
      return 2 * ROW;
    }
    if (xsMedia) {
      return ROW;
    }

    if (xlMedia) {
      return 5 * ROW;
    }
    if (mediumMedia) {
      return 3 * ROW;
    }

    if (lgMedia) {
      return 4 * ROW;
    }
  };

  const loadingBanner = !data && !error;

  return {
    loadingBanner,
    bannersToShow,
    handleMediaQuery,
  };
};

export default useBanners;

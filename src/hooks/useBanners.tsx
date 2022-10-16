import { useContext } from 'react';
import { CarsContext } from '../context/CarsContext';
import { useMediaQuery, useReadLocalStorage } from 'usehooks-ts';
import useSWR from 'swr';
import { GoogleContext } from '../context/GoogleOptContext';

const useBanners = () => {
  const { isGoogleBot }: any = useContext(GoogleContext);
  const cachedBanners = useReadLocalStorage('srpBanners');

  const { data, error } = useSWR(
    !cachedBanners && isGoogleBot === false ? '/opt.json?type=srpbanners' : null
  );

  const mediumMedia = useMediaQuery('(min-width:768px) and (max-width:1700px)');
  const lgMedia = useMediaQuery('(min-width:1700px');
  const xlMedia = useMediaQuery('(min-width:2300px)');
  const smMedia = useMediaQuery('(min-width:525px) and (max-width:768px)');
  const xsMedia = useMediaQuery('(max-width:525px)');

  const {
    filters: { make, model },
  }: any = useContext(CarsContext);

  const params = new URLSearchParams(window.location.search);
  const vehicleConds: any = params.getAll('cond');

  const getBannersData = cachedBanners || data;

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

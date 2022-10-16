import { SetStateAction } from 'react';

export type CarType = {
  isAd: boolean;
  img: string | undefined;
  salamImg: JSX.Element;
  id: string;
  photo_small: string | undefined;
  title_short: string | undefined;
  vin: string | undefined;
  price: string | number | undefined;
  permalink: string | undefined;
  is_saved: boolean | undefined;
  stock_number: string | undefined;
  veh_no_photo_url: string | undefined;
};

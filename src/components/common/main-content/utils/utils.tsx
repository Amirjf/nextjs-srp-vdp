import { CarType } from '../content/mainContent_types';
import { Card, CardDesign3, CardDesign2 } from '../../card';

import CardDesign2Loader from '../../card/card-design2/content/card-design-2-loader/CardDesign2Loader';
import CardDesign3Loader from '../../card/card-design3/content/card-design-3-loader/CardDesign3Loader';
import VerticalAdBanner from '../../../banner/content/VerticalAdBanner';
import Banner from '../../../banner/content/AdBanner';

Array.prototype.insert = function (index: number, item: any) {
  this.splice(index, 0, item);
};
export const getSrpTheme: any = {
  theme1: (car: CarType) => <Card car={car} key={`${car.id}`} />,
  theme2: (car: CarType) => <CardDesign2 car={car} key={`${car.id}`} />,
  theme3: (car: CarType) => <CardDesign3 car={car} key={`${car.id}`} />,
};

export const CARD_LOADERS: any = {
  theme1: <CardDesign2Loader />,
  theme2: <CardDesign2Loader />,
  theme3: <CardDesign3Loader />,
};

export const handleShowingFirstBanner = (bannersToShow: any) => {
  const bannerToShow = bannersToShow && bannersToShow[0];
  if (bannerToShow) {
    if (bannerToShow.is_vertical) {
      return <VerticalAdBanner bannerContent={bannerToShow} />;
    } else {
      return <Banner getCols={1} position={1} />;
    }
  } else {
    return null;
  }
};

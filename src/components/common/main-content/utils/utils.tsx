import CardDesign2Loader from '../../card/card-design2/content/card-design-2-loader/CardDesign2Loader';
import VerticalAdBanner from '../../../banner/content/VerticalAdBanner';
import Banner from '../../../banner/content/AdBanner';

export const CARD_LOADERS: any = {
  theme1: <CardDesign2Loader />,
  theme2: <CardDesign2Loader />,
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

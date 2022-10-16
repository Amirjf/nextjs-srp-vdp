import { Divider } from '../../common/divider';
import { Typography } from '../../common/typography';

import { FiltersHeaderTitleContainer } from '../styles/filtersHeaderTitle';

const FiltersHeaderTitle = () => {
  return (
    <FiltersHeaderTitleContainer>
      <Typography variant="h5">SELECT FILTER</Typography>
      <Divider middle />
    </FiltersHeaderTitleContainer>
  );
};

export default FiltersHeaderTitle;

import { useContext } from 'react';
import { GoogleContext } from '../../context/GoogleOptContext';
import useFilters from '../../hooks/useFilters';
import useInfiniteVehicles from '../../hooks/useInfiniteVehicles';
import { Typography } from '../common';
import { SearchResult } from '../top-search/styles/topSearch.styles';

const FoundedVehicles = ({ color }: any) => {
  const { data }: any = useInfiniteVehicles();
  const { totalVehicles, isLagging } = useFilters();
  const { gChecker }: any = useContext(GoogleContext);

  return (
    <SearchResult>
      {!gChecker ? (
        <Typography
          align="center"
          variant="h4"
          style={{ color: color || '#000' }}
        >
          Showing{' '}
          {totalVehicles?.found_count && !isLagging && (
            <strong>{`${totalVehicles?.found_count}`}</strong>
          )}
          {totalVehicles == undefined && <strong>0</strong>}
          {totalVehicles?.found_count === null && data
            ? data[0]?.length > 8
              ? `${data[0]?.length}+ `
              : data[0]?.length
            : ' '}
          results
        </Typography>
      ) : (
        <Typography align="center" variant="h4">
          Showing +20 results
        </Typography>
      )}
    </SearchResult>
  );
};

export default FoundedVehicles;

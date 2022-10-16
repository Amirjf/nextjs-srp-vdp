import { motion } from 'framer-motion';
import useInfiniteVehicles from '../../../hooks/useInfiniteVehicles';
import FoundedVehicles from '../../founded-vehicles/FoundedVehicles';
import { FilterResultContainer } from '../styles/showFilterResult.styles';
import { FilterResultProps } from './showFilterResult_types';

const ShowFilterResult = ({ onClick }: FilterResultProps) => {
  const { data }: any = useInfiniteVehicles();

  return (
    <FilterResultContainer
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      as={motion.div}
      onClick={onClick}
    >
      <FoundedVehicles color="#fff" />
    </FilterResultContainer>
  );
};

export default ShowFilterResult;

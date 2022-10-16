import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { CardLikeContainer } from '../components/common/card/card-design1/styles/card.styles';
import { CarType } from '../components/common/main-content/content/mainContent_types';

const useSaveCar = (car: any) => {
  const [savedCars, setSaveCar] = useLocalStorage<CarType[]>('savedCars', []);
  const theme = useTheme();

  const handleSaveCar = () => {
    setSaveCar((prev: CarType[]) => [...prev, car]);
  };

  const handleRemoveCar = (carToRemove: CarType) => {
    const updatedSavedCars = savedCars.filter(
      (saveCar: CarType) => saveCar.id !== carToRemove.id
    );
    setSaveCar(updatedSavedCars);
  };

  const renderSaveCar = () => {
    const exists = savedCars.find((saveCar: CarType) => saveCar.id === car.id);
    if (exists) {
      return (
        <CardLikeContainer onClick={() => handleRemoveCar(car)}>
          <AiFillHeart size={18} color={theme.palette.primary.main} />
        </CardLikeContainer>
      );
    } else {
      return (
        <CardLikeContainer onClick={handleSaveCar}>
          <AiOutlineHeart size={18} />
        </CardLikeContainer>
      );
    }
  };

  return { renderSaveCar };
};

export default useSaveCar;

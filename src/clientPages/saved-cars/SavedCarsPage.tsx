import { useContext } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useLocalStorage } from 'usehooks-ts';
import { Divider, Typography } from '../../components/common';
import { CarType } from '../../components/common/main-content/content/mainContent_types';
import { MainContentContainer } from '../../components/common/main-content/styles/mainContent.styles';
import { getSrpTheme } from '../../components/common/main-content/utils/utils';
import NoSavedCars from '../../components/empty-saved-cars/NoSavedCars';
import {
  RemoveCarContainer,
  RemoveCarIconContainer,
  SavedVehiclesHeader,
} from '../../components/saved-cars/styles/savedCars.styles';
import BackToInventoryButton from '../../components/VDP/back-to-inventory-button/content/BackToInventoryButton';
import { GoogleContext } from '../../context/GoogleOptContext';

const SavedCarsPage = () => {
  const [savedCars, setSaveCar] = useLocalStorage<any>('savedCars', []);
  const { cachedSrpTheme, srpTheme }: any = useContext(GoogleContext);

  const srpCardsTheme = cachedSrpTheme || srpTheme;

  const handleRemoveCar = (carToRemove: any) => {
    const updatedSavedCars = savedCars.filter(
      (saveCar: any) => saveCar.id !== carToRemove.id
    );
    setSaveCar(updatedSavedCars);
  };
  return (
    <div style={{ marginBlock: '3rem' }}>
      <BackToInventoryButton />
      {savedCars.length > 0 && (
        <SavedVehiclesHeader>
          <Typography variant="h5">Your Saved Cars</Typography>
          <Divider middle />
        </SavedVehiclesHeader>
      )}

      <div style={{ maxWidth: '80%', margin: '0 auto' }}>
        {savedCars.length > 0 ? (
          <MainContentContainer>
            {savedCars.map((car: CarType) => {
              const srpThemeTranslator = getSrpTheme[srpCardsTheme];
              return (
                <div key={car.id} style={{ position: 'relative' }}>
                  {srpThemeTranslator(car)}
                  <RemoveCarContainer onClick={() => handleRemoveCar(car)}>
                    <RemoveCarIconContainer>
                      <FiTrash size={20} color="#fff" />
                    </RemoveCarIconContainer>
                  </RemoveCarContainer>
                </div>
              );
            })}
          </MainContentContainer>
        ) : (
          <NoSavedCars />
        )}
      </div>
    </div>
  );
};

export default SavedCarsPage;

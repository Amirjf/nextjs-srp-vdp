import { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillChatSquareTextFill } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import useVehicle from '../../../../hooks/useVehicle';
import { Button } from '../../../common';
import { CarType } from '../../../common/main-content/content/mainContent_types';
import { Space } from '../../../common/space';
import VerticalSeperator from '../../../common/vertical-seprator/VerticalSeperator';
import { VehicleActionsContainer } from '../styles/vehicleInfo.styles';

const VehicleActions = () => {
  const theme = useTheme();
  const params = useParams();
  const { data: car } = useVehicle(params.id);
  const [savedCars, setSaveCar] = useLocalStorage<any>('savedCars', []);
  const { setPageAction }: any = useContext(VdpContext);

  const handleSaveCar = () => {
    setSaveCar((prev: any) => [...prev, car]);
  };

  const handleRemoveCar = (carToRemove: any) => {
    const updatedSavedCars = savedCars.filter(
      (saveCar: any) => saveCar.id !== carToRemove.id
    );
    setSaveCar(updatedSavedCars);
  };

  const onShare = () => {
    const shareData = {
      title: car.title_short,
      url: window.location.href,
    };
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => {
          console.log('Successfully shared');
        })
        .catch((error) => {
          console.error('Something went wrong', error);
        });
    }
  };

  const isCarExists = () => {
    const exists = savedCars.find((saveCar: CarType) => saveCar.id === car.id);
    if (exists) {
      return (
        <Button
          onClick={() => handleRemoveCar(car)}
          variant="text"
          style={{ color: 'rgba(89, 80, 80, 1)' }}
          icon={<AiFillHeart color={theme.palette.primary.main} size={25} />}
        >
          Saved
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => handleSaveCar()}
          variant="text"
          style={{ color: 'rgba(89, 80, 80, 1)' }}
          icon={<AiFillHeart color="rgba(177, 184, 208, 1)" size={25} />}
        >
          Save
        </Button>
      );
    }
  };
  return (
    <VehicleActionsContainer>
      <Space align="center">
        <Space alignItems="center">
          {isCarExists()}
          <VerticalSeperator />
          <Button
            onClick={onShare}
            variant="text"
            style={{ color: 'rgba(89, 80, 80, 1)' }}
            icon={<FaShareAlt color="rgba(177, 184, 208, 1)" size={25} />}
          >
            Share
          </Button>
          <VerticalSeperator />
          <Button
            onClick={() => setPageAction('Questions?')}
            variant="text"
            style={{ color: 'rgba(89, 80, 80, 1)' }}
            icon={
              <BsFillChatSquareTextFill
                color="rgba(177, 184, 208, 1)"
                size={25}
              />
            }
          >
            Question
          </Button>
        </Space>
      </Space>
    </VehicleActionsContainer>
  );
};

export default VehicleActions;

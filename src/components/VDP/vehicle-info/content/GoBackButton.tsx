import { useContext } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import { Button, Typography } from '../../../common';

const GoBackButton = () => {
  const { setPageAction, infoAction }: any = useContext(VdpContext);

  const handleGoingBack = () => {
    infoAction === 'Schedule Test Drive'
      ? setPageAction('Choose an Option')
      : setPageAction('baseInfo');
  };
  return (
    <>
      <Button onClick={handleGoingBack} variant="text" scale="sm">
        <FiArrowLeft />
        Go Back
      </Button>
      <Typography variant="h4">{infoAction}</Typography>
      <br />
    </>
  );
};

export default GoBackButton;

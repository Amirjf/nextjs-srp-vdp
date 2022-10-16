import React from 'react';
import FindMyVehicleForm from '../../../find-vehicle-form/content/FindMyVehicleForm';
import { Typography } from '../../typography';
import { NotFoundContainer } from '../styles/notfoundVehicle.styles';

const NotFoundVehicle: React.FC = () => {
  return (
    <NotFoundContainer>
      <Typography align="center" variant="h3">
        Don't worry, we can put you in that perfect vehicle!
      </Typography>
      <Typography align="center" variant="subtitle2">
        No vehicles matched your search query, but we have new vehicles arriving
        often and can get one reserved for you. Just let us know what you are
        looking for.
      </Typography>
      <br />
      <br />
      <br />
      <FindMyVehicleForm />
    </NotFoundContainer>
  );
};

export default NotFoundVehicle;

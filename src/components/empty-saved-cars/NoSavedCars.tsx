import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '../common';
import { EmptySavedCarsContainer } from './styles/noSavedCars.styles';

const NoSavedCars = () => {
  return (
    <EmptySavedCarsContainer>
      <Typography style={{ color: 'rgb(93, 93, 93)' }} variant="h2">
        No Saved Cars
      </Typography>
      <Link to="/">
        <Button scale="lg">Get Started</Button>
      </Link>
    </EmptySavedCarsContainer>
  );
};

export default NoSavedCars;

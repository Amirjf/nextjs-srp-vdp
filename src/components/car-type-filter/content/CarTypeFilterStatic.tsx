import CarClient from '../../../client/client';
import { CarsContext } from '../../../context/CarsContext';
import queryString from 'query-string';
import { Checkbox } from '../../common';
import React, { useEffect } from 'react';

const CarTypeFilterStatic = () => {
  const { setCarTypes, carTypes, addFilters }: any =
    React.useContext(CarsContext);

  const updateListOfItems = (itemIndex: any, newsChecked: any) => {
    const updatedListOfItems = [...carTypes];
    updatedListOfItems[itemIndex].isChecked = newsChecked;
    setCarTypes(updatedListOfItems);
    addFilters({ key: 'cond' });
  };

  return (
    <>
      {carTypes.map((item: any, i: number) => {
        return (
          <Checkbox
            key={i}
            onChange={() => updateListOfItems(i, !item.isChecked)}
            name={item.cond}
            value={item.cond}
            checked={item.isChecked}
            id={item.cond}
            label={`${item.cond.toUpperCase()}`}
          />
        );
      })}
    </>
  );
};

export default CarTypeFilterStatic;

import React, { useEffect } from 'react';
import { CarsContext } from '../../../context/CarsContext';
import { Checkbox } from '../../common';
import useSWR from 'swr';
import { useReadLocalStorage, useSessionStorage } from 'usehooks-ts';
import useQuery from '../../../hooks/useQuery';

const CarTypeFilter = () => {
  const { setCarTypes, carTypes, addFilters, setIsClickedOnFilters }: any =
    React.useContext(CarsContext);
  const [isApplied, setIsApplied] = useSessionStorage('carTypesApplied', false);
  const cachedCondsDefault: any = useReadLocalStorage('srpInfo');
  const params = useQuery();

  useSWR(!cachedCondsDefault ? '/opt.json?type=srpinfo' : null, {
    //in case if local storage cache was not available
    onSuccess(data) {
      if (data) {
        const updatedListOfItems = [...carTypes];
        updatedListOfItems.map((carType: any) => {
          data?.srp_default_cond.map((item: any) => {
            if (carType.cond === item) {
              carType.isChecked = true;
            }
          });
        });
        setCarTypes(updatedListOfItems);
      }
    },
  });

  const updateListOfItems = (itemIndex: any, newsChecked: any) => {
    const updatedListOfItems = [...carTypes];
    updatedListOfItems[itemIndex].isChecked = newsChecked;
    setCarTypes(updatedListOfItems);
    setIsClickedOnFilters(true);
    addFilters({ key: 'condition' });
  };

  useEffect(() => {
    const condsFromURL = params.getAll('condition');
    const slashUrlStructure: any = localStorage.getItem('currentURL');

    const isCondsExistsinURL =
      condsFromURL.length || slashUrlStructure?.includes('condition');

    if (cachedCondsDefault && !isApplied && !isCondsExistsinURL) {
      const updatedListOfItems = [...carTypes];
      updatedListOfItems.map((carType: any) => {
        cachedCondsDefault?.srp_default_cond.map((item: any) => {
          if (carType.cond === item) {
            carType.isChecked = true;
          }
        });
      });
      setCarTypes(updatedListOfItems);
      setIsApplied(true);
    }
  }, []);

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
            label={`${item.label}`}
          />
        );
      })}
    </>
  );
};

export default CarTypeFilter;

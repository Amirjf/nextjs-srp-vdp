import React, { useContext, useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Input } from '../../common';
import { TopSearchContainer, TopSearchField } from '../styles/topSearch.styles';

import { CarsContext } from '../../../context/CarsContext';
import SortButton from '../../sorting/content/SortButton';
import { MdClose } from 'react-icons/md';
import FoundedVehicles from '../../founded-vehicles/FoundedVehicles';
import { useReadLocalStorage } from 'usehooks-ts';
import SavedCars from '../../saved-cars/content/SavedCars';

const TopSearch = () => {
  // const { setSearchQuery, searchQuery }: any = useContext(CarsContext);

  // const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleClearSearchInput = () => {
  //   setSearchQuery('');
  //   const params = new URLSearchParams(window.location.search);
  //   params.delete('search');
  // };

  return (
    <>
      <TopSearchContainer>
        <FoundedVehicles />
        <TopSearchField>
          <Input
            scale="sm"
            variant="filled"
            placeholder="SEARCH FOR A CAR"
            color="#000"
          />
        </TopSearchField>

        <SortButton />
      </TopSearchContainer>
    </>
  );
};

export default TopSearch;

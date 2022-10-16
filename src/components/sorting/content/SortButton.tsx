import React from 'react';
import { BiSortDown } from 'react-icons/bi';
import { CarsContext } from '../../../context/CarsContext';
import { Button } from '../../common';
import CustomDropdown from '../../common/dropdown/DropDown';
import { SortBtnContainer } from '../styles/sortButton.styles';

const SortButton = () => {
  const { setActiveSort, addFilters, activeSort }: any =
    React.useContext(CarsContext);

  const SORTS = [
    { label: 'Default Sorting', value: '' },
    { label: 'Price (High to Low)', value: 'price__desc' },
    { label: 'Price (Low to High)', value: 'price__asc' },
    { label: 'Year (High to Low)', value: 'year__desc' },
    { label: 'Year (Low to High)', value: 'year__asc' },
    { label: 'Mileage (High to Low)', value: 'mileage__desc' },
    { label: 'Mileage (Low to High)', value: 'mileage__asc' },
    { label: 'MPG Highway (Low to High)', value: 'mpg_highway__asc' },
    { label: 'MPG Highway (High to Low)', value: 'mpg_highway__desc' },
    { label: 'MPG City (Low to High)', value: 'mpg_city__asc' },
    { label: 'MPG City (High to Low)', value: 'mpg_city__desc' },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const onSortChange = (e: any) => {
    toggleOpen();
    setActiveSort(e.value);
    addFilters({ key: '' });
  };
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const curerntSortValue: any = SORTS.find(
    (sort: any) => sort.value === activeSort
  );

  return (
    <SortBtnContainer>
      <CustomDropdown
        isOpen={isOpen}
        element={
          <Button
            block
            scale="lg"
            icon={<BiSortDown size={20} />}
            onClick={toggleOpen}
          >
            {curerntSortValue ? `${curerntSortValue.label}` : 'SORT'}
          </Button>
        }
        options={SORTS}
        onChange={onSortChange}
        value={curerntSortValue}
        onClose={toggleOpen}
      />
    </SortBtnContainer>
  );
};

export default SortButton;

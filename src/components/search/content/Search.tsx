import React from 'react';
import { SearchContainer } from '../styles/search.styles';
import { Input } from '../../common/input';
import { RiSearchLine } from 'react-icons/ri';
import { CarsContext } from '../../../context/CarsContext';
import { MdClose } from 'react-icons/md';

const Search = () => {
  const { setSearchQuery, searchQuery, addFilters }: any =
    React.useContext(CarsContext);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    addFilters({ key: '' });
  };

  const handleClearSearchInput = () => {
    setSearchQuery('');
  };
  return (
    <SearchContainer>
      <Input
        scale="sm"
        icon={
          searchQuery.length ? (
            <MdClose color="#fff" onClick={handleClearSearchInput} size={27} />
          ) : (
            <RiSearchLine color="#fff" size={26} />
          )
        }
        placeholder="SEARCH FOR A CAR"
        onChange={handleSearch}
        color="#fff"
        value={searchQuery}
      />
    </SearchContainer>
  );
};

export default Search;

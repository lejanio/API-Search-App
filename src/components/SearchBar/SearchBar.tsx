import React, { FC, useState } from 'react';

type SearchBarProps = {
    getFilterValue: (value: string) => void
}

const SearchBar:FC<SearchBarProps> = ({ getFilterValue }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChange = (value: string) => {
    setSearchValue(value);
    getFilterValue(value);
    console.log('searchValue', searchValue);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder="Search products"
        onChange={(e) => onChange(e.target.value)}
      />
      Searchbar Comp
    </div>
  );
};

export default SearchBar;

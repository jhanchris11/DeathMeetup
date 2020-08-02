import React from "react";
import { SearchContainer } from './SearchStyled';
import './SearchStyle.scss';

import { Input } from 'antd';
const { Search : SearchAnt } = Input;

const Search = () => {
  return (
    <SearchContainer>
      <SearchAnt
        className="searchInputStyle"
        placeholder="Search event you want"
        onSearch={value => console.log(value)}
      />
    </SearchContainer>
  );
};

export default Search;

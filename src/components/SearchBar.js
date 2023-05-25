import React, { useState } from 'react';
import './Navbar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="search-bar"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;

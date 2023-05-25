import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';

const Navbar = ({ title, onSignOut, onSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">{title}</div>
      <SearchBar onSearch={onSearch} />
      <button className="sign-out-button" onClick={onSignOut}>
        Sign Out
      </button>
    </nav>
  );
};
export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/LOGO 1.png';
import { searchPages } from './SearchPages';

import './nav.css';

const Nav = ({ pages }) => {
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const toggleSearchVisibility = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const path = searchPages(searchQuery, pages);
    if (path) {
      navigate(path);
    } else {
      alert('No results found');
    }
    setSearchVisible(false);
    setSearchQuery('');
  };

  return (
    <div className="nav">
      <div className="div1">
        <Link to={"/"}><img src={logo} alt="Logo" /></Link>
      </div>

      <ul className={visible ? 'visible' : ''}>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/help">How We Help</Link>
        </li>
        <li>
          <Link to="/involved">Get Involved</Link>
        </li>
        <li>
          <Link to="/local">Act Local</Link>
        </li>
      </ul>

      <div className="divName">
        <FontAwesomeIcon icon={faBars} className="navi" onClick={toggleVisibility} />
        <Link to={"/donate"}><button className="button2">DONATE</button></Link>
        <button className="button1" onClick={toggleSearchVisibility}>
          <FontAwesomeIcon icon={faSearch} className='searchi' />
        </button>
      </div>

      {searchVisible && (
        <div className="search-dialog">
          <div className="search-content">
            <button className="close-button" onClick={toggleSearchVisibility}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;

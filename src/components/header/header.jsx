import React from 'react';
import { Link } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={crown} alt="LOGO" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;

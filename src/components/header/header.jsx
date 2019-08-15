import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import crown from '../../assets/crown.svg';
import './header.scss';

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            {' '}
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

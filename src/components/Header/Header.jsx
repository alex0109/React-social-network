import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__block">
        <div className="header__logo">
          <img src="https://i.pinimg.com/736x/c6/cf/10/c6cf10d2ac1857eb897c1436c67ffa4d.jpg" alt=""></img>
        </div>
      </div>
      <div className="login">
        <div className="login__block">
          { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </div>
    </div>
  );
}

export default Header;
import React from 'react';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png'
import Deezer from '../images/deezer.png'
import Logout from './Logout';

const NavbarLight = () => {
  return (
    <Navbar expandSm light>
      <Nav start="true">
        <NavLink exact to="/" light="true" brand="true">
          <img alt="BRAND" className="logo" src={Logo}/>
        </NavLink>
      </Nav>
      <Nav start="true" collapse expandSm>
          <NavLink exact to="/">
            <NavbarLink light >Home</NavbarLink>
          </NavLink>
          <NavLink to="/about">
            <NavbarLink light >About</NavbarLink>
          </NavLink>
          <NavLink exact to="/music-genres">
            <NavbarLink light >Music Genres</NavbarLink>
          </NavLink>
      </Nav>
      <Nav className="deezer-icon">
        {/* eslint-disable-next-line */}
        <NavLink target="blank" to={{ pathname: "https://www.deezer.com/en/?utm_campaign=crm&utm_source=crm&utm_medium=obj_stream&utm_content=email-logo" }} target="_blank">
          <div>
            <img alt="deezer" className="logo" src={Deezer}/><span>Let’s dive right in!</span>
          </div> 
        </NavLink>
      </Nav>
      <Nav start="true">
        <NavLink to="/">
          <Logout/>
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavbarLight;

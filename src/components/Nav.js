import React, { useState } from 'react';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png'

const NavbarLight = () => {
  const [hidden, setHidden] = useState(true);
 
  return (
    <Navbar expandSm light>
      <Nav start="true">
        <NavbarLink light brand href="#"><img alt="BRAND" className="logo" src={Logo}/></NavbarLink>
        <Nav end="true">
          <Button
            light
            outline
            toggleCollapse
            expandSm
            onClick={() => setHidden(!hidden)}
          >
            <span>&#9776;</span>
          </Button>
        </Nav>
      </Nav>
      <Nav start="true" collapse expandSm hidden={hidden}>
          <NavLink exact to="/">
            <NavbarLink light >Home</NavbarLink>
          </NavLink>
          <NavLink to="/about">
            <NavbarLink light >About</NavbarLink>
          </NavLink>
          <NavLink to="/music-genres">
            <NavbarLink light >Music Genres</NavbarLink>
          </NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavbarLight;

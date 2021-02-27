import React, { useState } from 'react';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png'
import Deezer from '../images/deezer.png'

const NavbarLight = () => {
  const [hidden, setHidden] = useState(true);
 
  return (
    <Navbar expandSm light>
      <Nav start="true">
      <NavLink exact to="/" light="true" brand="true">
        <img alt="BRAND" className="logo" src={Logo}/>
      </NavLink>
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
          <NavLink exact to="/music-genres">
            <NavbarLink light >Music Genres</NavbarLink>
          </NavLink>
      </Nav>
      <Nav>
        {/* eslint-disable-next-line */}
        <NavLink className="deezer-icon" target="blank" to={{ pathname: "https://www.deezer.com/en/?utm_campaign=crm&utm_source=crm&utm_medium=obj_stream&utm_content=email-logo" }} target="_blank">
          <div>
            <img alt="deezer" className="logo" src={Deezer}/><span>Let’s dive right in!</span>
          </div> 
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavbarLight;

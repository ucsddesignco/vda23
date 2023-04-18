import { React, useState } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/home/vda-white.png';
import Hamburger from '../../assets/images/home/hamburger.svg';
import Cross from '../../assets/images/home/cross.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    document.body.style.overflow = menuOpen ? 'visible' : 'hidden';
    document.documentElement.style.overflow = menuOpen ? 'visible' : 'hidden';
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = menuOpen ? 'visible' : 'hidden';
    document.documentElement.style.overflow = menuOpen ? 'visible' : 'hidden';
  };

  return (
    <div className="navbar">
      <NavLink to="/">
        <img className="logo" src={Logo} alt="" />
      </NavLink>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            Showcase
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/program-overview"
          >
            Program Overview
          </NavLink>
        </li>
      </ul>
      <img
        src={Hamburger}
        onClick={() => {
          handleMenuClick();
        }}
        className="hamburger"
        alt="Hamburger menu"
      />
      {menuOpen && (
        <div className="background">
          <div className="top">
            <a href="/">
              <img className="mobile-logo" src={Logo} alt="" />
            </a>
            <img
              src={Cross}
              onClick={() => {
                closeMenu();
              }}
              className="mobile-hamburger"
              alt="Close hamburger menu"
            />
          </div>
          <li class="middle">
            <NavLink
            onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              Showcase
            </NavLink>
          </li>
          <li class="middle">
            <NavLink
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li class="middle">
            <NavLink
            onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/program-overview"
            >
              Program Overview
            </NavLink>
          </li>
        </div>
      )}
    </div>
  );
}

export default Navbar;

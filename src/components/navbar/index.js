import { React, useState } from 'react'
import './styles.scss'
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/home/vda-white.png'
import Star from '../../assets/images/home/star-black.png'
import Hamburger from '../../assets/images/home/hamburger.svg'
import Cross from '../../assets/images/home/cross.svg'

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
      document.body.style.overflow = menuOpen ? "visible" : "hidden";
      document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
      setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
      setMenuOpen(false);
      document.body.style.overflow = menuOpen ? "visible" : "hidden";
      document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
    };
  
    return (
      <div className='navbar'>
        <NavLink to="/">
          <img className='logo' src={Logo} alt="" />
        </NavLink>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/program-overview">Program Overview</NavLink></li>
          <li>
            <a className='button' href="https://forms.gle/2bnSgXW4Usddx6JP6" target='_blank'>
              <p>APPLY</p>
              <img src={Star} alt="" />
            </a>
          </li>
        </ul>
        <img 
          src={Hamburger}
          onClick={() => {
            handleMenuClick();
          }} 
          className='hamburger'
        />
        {menuOpen && (
          <div className="background">
            <div className="top">
              <a href="/">
                <img className='mobile-logo' src={Logo} alt="" />
              </a>
              <img 
                src={Cross}
                onClick={() => {
                  closeMenu();
                }} 
                className='mobile-hamburger'
              />
            </div>
            <a href='/' className="middle">
              <p>Home</p>
            </a>
            <a href='/program-overview' className="middle">
              <p>Program Overview</p>
            </a>
            <div className="bottom">
              <a href="https://forms.gle/2bnSgXW4Usddx6JP6" target='_blank' className="button">
                <p>APPLY</p>
                <img src={Star} alt="" />
              </a>
            </div>
          </div>
        )}
      </div>
    )
    
  }

export default Navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyled';
import { NavbarComponent, HamburgerIcon } from './NavbarStyled'; 


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarComponent>
      <div className='logo'>
        <h1>the planets</h1>
      </div>
     
      <HamburgerIcon onClick={toggleMenu} isOpen={isOpen}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </HamburgerIcon>
    
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/card/1">mercury</Link></li>
          <li><Link to="/card/2">venus</Link></li>
          <li><Link to="/card/3">earth</Link></li>
          <li><Link to="/card/4">mars</Link></li>
          <li><Link to="/card/5">jupiter</Link></li>
          <li><Link to="/card/6">saturn</Link></li>
          <li><Link to="/card/7">uranus</Link></li>
          <li><Link to="/card/8">neptune</Link></li>
        </ul>
      </div>
    </NavbarComponent>
  );
};

export default Navbar;

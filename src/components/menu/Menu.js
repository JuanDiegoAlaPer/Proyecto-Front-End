import React, { useState } from 'react';
import './Menu.scss';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-1295394_960_720.webp';
import { useNavigate } from "react-router-dom"; 

function Menu() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className={`menu ${isMenuActive ? 'active' : ''}`}>
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo UAM" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="menu-icon">&#9776;</div>
          <span className="dropdown-icon">&#9660;</span>  
        </div>
        <div className={`dropdown-content ${isMenuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="#seccion1" >Flexbox</a></li>
            <li><a href="#seccion2">Services</a></li>
            <li><a href="#seccion3">Contacts</a></li>
            <li><a href="#seccion4">Products</a></li>
            <li><a href="#seccion5">Seccion 5</a></li>
            <li onClick={handleLoginClick}><a href="#">Login</a></li>  
          </ul>
        </div>
        <div className="avatar-container">
          <img src={avatar} className="avatar" alt="Foto de perfil" />
        </div>
      </div>
    </div>
  );
}

export default Menu;

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo"><i className="fa-brands fa-vaadin"></i> DINE.</div>

      <ul className={`nav justify-content-center sidebar ${isOpen ? 'open' : ''}`}>
        <li><a href="#"></a></li>
        <li className="nav-item">
          <a className="nav-link active" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#work">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>

      <div className="toggle_btn" onClick={toggleNavbar}>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>

      {/* Dropdown menu should be conditional based on isOpen */}
      {isOpen && (
        <div className="dropdown_menu">
          <li className="nav-item">
            <a className="nav-link active" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work">Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </div>
      )}
    </div>
  );
};

export default Navbar;

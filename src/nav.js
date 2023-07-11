import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import logo1 from './img/logo/AVANI Visiting Card Final.png';

const Nav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="container-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
          <div className="container">
            <img className="logo-img" src={logo1} alt="AvaniXerox" />
            <button
              className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
              type="button"
              onClick={handleMenuClick}
              aria-controls="navbarSupportedContent"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span><i id="bar" className="fas fa-bars"></i></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" onClick={handleLinkClick} className={location.pathname === "/" ? "active nav-link" : "inactive nav-link"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" onClick={handleLinkClick} className={location.pathname === "/product" ? "active nav-link" : "inactive nav-link"}>Shop</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" onClick={handleLinkClick} className={location.pathname === "/about" ? "active nav-link" : "inactive nav-link"}>About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" onClick={handleLinkClick} className={location.pathname === "/contact" ? "active nav-link" : "inactive nav-link"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;

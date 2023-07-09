import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './nav.css'
import logo1 from './img/logo/AVANI Visiting Card Final.png'
const Nav = () => {
  const location = useLocation()
    
    
  return (
    <>
       <div className="container-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div className="container">

          <img className="logo-img" src={logo1} alt="AvaniXerox" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span><i id="bar" className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                    <Link to='/'className={location.pathname === "/" ? "active nav-link" : "inactive nav-link"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/product'className={location.pathname === "/product" ? "active nav-link" : "inactive nav-link"}>Shop</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about'className={location.pathname === "/about" ? "active nav-link" : "inactive nav-link"}>About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact'className={location.pathname === "/contact" ? "active nav-link" : "inactive nav-link"}>Contact</Link>
                </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Nav
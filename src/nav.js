import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import logo1 from './img/logo/logo2icon.png';
import logo2 from './img/logo/Red_logp.png'; // Add your second logo here
import qrCode from './img/logo/qr-code.png'; // Add your QR code image here

const Nav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQRModalOpen, setQRModalOpen] = useState(false);
  const [isLogoOne, setIsLogoOne] = useState(true); // Track which logo is shown
  const [isAnimating, setIsAnimating] = useState(false); // Animation state
  const [isCenterAnim, setIsCenterAnim] = useState(false); // Center animation state

  // Enlarge and rotate logo in navbar every 5 seconds (no logo switch)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Ensure that toggleQRModal is defined within the functional component
  const toggleQRModal = () => {
    setQRModalOpen(!isQRModalOpen); // This function toggles the modal open/close
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Toggle logo on click
  const handleLogoClick = () => {
    if (isAnimating || isCenterAnim) return; // Prevent multiple triggers
    setIsCenterAnim(true);
    setTimeout(() => {
      setIsLogoOne((prev) => !prev);
    }, 500); // Switch logo halfway through animation
    setTimeout(() => {
      setIsCenterAnim(false);
    }, 1000); // End animation
  };

  return (
    <>
      <div className="container-navbar">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <img
              className={`logo-img${isAnimating ? ' logo-animate-inplace' : ''}${isCenterAnim ? ' logo-animate-center' : ''}`}
              src={isLogoOne ? logo1 : logo2}
              alt="AvaniXerox"
              style={{ cursor: 'pointer' }}
              onClick={handleLogoClick}
            />
            <button
              className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
              type="button"
              onClick={handleMenuClick}
              aria-controls="navbarSupportedContent"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span>
                <i id="bar" className="fas fa-bars"></i>
              </span>
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''
                }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={handleLinkClick}
                    className={
                      location.pathname === '/'
                        ? 'active nav-link'
                        : 'inactive nav-link'
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/product"
                    onClick={handleLinkClick}
                    className={
                      location.pathname === '/product'
                        ? 'active nav-link'
                        : 'inactive nav-link'
                    }
                  >
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    onClick={handleLinkClick}
                    className={
                      location.pathname === '/about'
                        ? 'active nav-link'
                        : 'inactive nav-link'
                    }
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    onClick={handleLinkClick}
                    className={
                      location.pathname === '/contact'
                        ? 'active nav-link'
                        : 'inactive nav-link'
                    }
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={toggleQRModal} className="qr-button">
                    Show QR
                  </button>
                </li>
              </ul>
              <div className="cta-buttons">
                <a href="tel:+919320999385" className="cta-button call-now">
                  Call
                </a>
                <a
                  href="mailto:avanixerox999@gmail.com"
                  className="cta-button email-now"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* QR Code Modal */}
      {isQRModalOpen && (
        <div className="qr-modal">
          <div className="qr-modal-content">
            <span className="qr-modal-close" onClick={toggleQRModal}>
              &times;
            </span>
            <h3>Scan the QR Code for more details</h3>
            <img src={qrCode} alt="QR Code" className="qr-code-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

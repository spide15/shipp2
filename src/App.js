import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';
import './App.css';
import logo1 from './img/logo/logo2icon.png'; // Logo image

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Add to cart
  const [cart, setCart] = useState([]);

  // Product detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);

  // Filter product
  const [product, setProduct] = useState(Productdetail);

  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };

  // Product detail view
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {loading ? (
          <div className="loading-overlay">
            <img src={logo1} alt="Logo" className="logo-animation" />
            <p className="tagline">Where Quality Meets Affordability</p>
          </div>
        ) : (
          <>
            {/* Navigation bar */}
            <Nav searchbtn={searchbtn} />

            
            {/* Main content */}
            <main className="main-content">
              <Rout product={product} setProduct={setProduct} />
            </main>

            {/* Footer */}
            <Footer />

            {/* WhatsApp floating button */}
            <a
              href="https://wa.me/+7738405495"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp whatsapp-icon"></i>
            </a>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';
import { Vortex } from 'react-loader-spinner';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './App.css';
import logo1 from './img/logo/logo2icon.png'; // Add your logo image

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // Set the loading screen duration
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

  console.log(cart);

  return (
    <BrowserRouter>
      <div className="content">
        {loading ? (
          <div className="loading-overlay">
            <img src={logo1} alt="Logo" className="logo-animation" />
          </div>
        ) : (
          <>
            <Nav searchbtn={searchbtn} />
            <Rout />
            <Footer />
            {/* WhatsApp icon */}
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

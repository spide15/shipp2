import React, { useState, useEffect } from 'react'
import Nav from './nav'
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';
import { Vortex } from 'react-loader-spinner'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './App.css'
const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  // add to cart
  const [cart, setCart] = useState([])
  //product Detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }

  // add to cart

  console.log(cart)
  return (
    <>

      <BrowserRouter>
        <div className="content">
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
              <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
              />
            </div>
          ) : (
            <>
              <Nav searchbtn={searchbtn} />
              <Rout />
              <Footer />
              {/* WhatsApp icon */}

              <a
                href="https://wa.me/+7738405495"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <i className="fab fa-whatsapp whatsapp-icon"></i>
                
              </a>



            </>
          )}
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
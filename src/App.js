import React, { useState } from 'react'
import Nav from './nav'
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';
const App = () => {
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
      {/* <div className="App">
        <header>
          <Nav searchbtn={searchbtn} />
        </header>
        <main>
          <Rout />
        </main>
        <footer>
          <Footer />
        </footer>
      </div> */}
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from "./layout";
import Home from './home'
import Contact from './contact'
import About from './about'
import ProductDetails from './ProductDetails';
import ProductList from './shop'
const Rout = ({ product, setProduct }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product' element={<ProductList product={product} setProduct={setProduct} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>

    </>
  )
}

export default Rout
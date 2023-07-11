import React from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'
import ProductDetails from './ProductDetails';
import ProductList from './shop'
const Rout = ({ product, setProduct }) => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductList product={product} setProduct={setProduct} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      {/* Redirect "/shipp2" to another route */}
      <Route path="/shipp2" element={<Navigate to="/" />} />
    </Routes>

    </>
  )
}

export default Rout
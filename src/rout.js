import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'
import ProductDetails from './ProductDetails';
import ProductList from './shop'
const Rout = ({product, setProduct, detail, view, close, setClose, addtocart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        {/* <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} /> */}
        <Route path='/product' element={<ProductList product={product} setProduct={setProduct} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes>
    </>
  )
}

export default Rout
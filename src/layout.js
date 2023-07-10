import React from 'react'
import Nav from './nav'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return <>
  <Nav />
  <Outlet />
  <Footer />
  </>
}

export default layout
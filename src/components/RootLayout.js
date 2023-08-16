import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
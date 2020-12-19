import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )

}

export default Layout

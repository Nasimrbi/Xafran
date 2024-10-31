import React from 'react'
import Navbar from '../components/modules/navbar/navbar'
import Topbar from '../components/modules/topbar/topbar'
import Header from '../components/modules/header/header'


function Contactlayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Topbar />
    <Navbar isShare />
    <Header />
    {children}
    </>
  )
}

export default Contactlayout

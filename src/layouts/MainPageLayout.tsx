import React from 'react'
import Navbar from '@/app/components/modules/navbar/navbar'

function MainPageLayout({children}: {children:React.ReactNode}) {
  return (
    <>
      <Navbar  />
      {children}
    </>
  )
}

export default MainPageLayout

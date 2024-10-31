import React from 'react'
import Footer from '@/app/components/modules/footer/footer'

function GeneralLayout({children}: {children:React.ReactNode}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default GeneralLayout

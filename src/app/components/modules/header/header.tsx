import React from 'react'
import Styles from './header.module.css'
import BreadCrumb from '../breadcrumb/BreadCrumb'

function header() {

  return (
    <div className={`${Styles.bgHeadr}`}>
      <div className="container mx-auto px-20">
        <div className="text-center py-60">
           <BreadCrumb />
        </div>
      </div>
    </div>
  )
}

export default header

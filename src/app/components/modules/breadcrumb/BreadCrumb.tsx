'use client'
import Link from 'next/link'
import React from 'react'
import { useParams, usePathname } from 'next/navigation'



function BreadCrumb() {

  const pathName = usePathname()
  const param: {} = useParams()

  console.log(param);
  

  const breadcrumbMap: BreadCrumbMap = {
    '/' : 'Home',
    '/about' : 'ABOUT US',
    '/services' : 'SERVICES',
    '/contact' : 'CONTACT US',
  }

  interface BreadCrumbMap {
    [key: string]: string
  }

  const mainPath = breadcrumbMap[pathName]


  return (
    <>
    <div className='flex mb-5 gap-2 justify-center flex-wrap lg:flex-nowrap' style={{zIndex : 10 , position : 'relative'}}>
        <Link href={'/'} className='text-white font-bold text-xl'>HOME </Link> 
        <Link href={'#'} className='font-bold text-xl primary-color'>/ {mainPath}</Link>
    {
      Object.keys(param).length  ? 
        <Link href={'/'} className='text-white font-bold text-5xl '>param</Link> : ''
    }
    </div>
    <h1 className='text-white text-3xl font-bold'>{mainPath}</h1>
    </>
  )
}

export default BreadCrumb

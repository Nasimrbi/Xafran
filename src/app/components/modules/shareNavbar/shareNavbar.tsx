'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import Styles from './shareNvabr.module.css'
import Logo from '@/app/public/assets/images/logo-2.png'

function shareNavbar() {

    const navbarMenu = useRef<HTMLDivElement | null>(null)
    const pathname = usePathname()
    const isActive = (path:string) => pathname === path
    

   useEffect(() => {
    const handleScroll = () => {
        if (navbarMenu.current) {
            if (window.scrollY > 100) {
                navbarMenu.current.classList.add('stickyMenu')
            } else {
                navbarMenu.current.classList.remove('stickyMenu')
            }
        }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
   },[])

   

    return (
        <div ref={navbarMenu} className="bg-white">
            <div className='container mx-auto px-20'>
                <div className="flex justify-between items-center text-white py-8 lg:py-0">
                    <div className="logo">
                        <Image src={Logo} priority alt='xafran Logo' layout='responsive'  />
                    </div>
                    <div className="menus hidden lg:block">
                    <ul className='flex gap-10'>
                    <li style={{ paddingBlock: '40px' }} className={`text-lg ${Styles.menulink} relative ${isActive('/') ? Styles.active : ''}`}>
                        <Link href={'/'}>
                            Home
                        </Link>
                        </li>
                        <li style={{ paddingBlock: '40px' }} className={`text-lg ${Styles.menulink} relative ${isActive('/about') ? Styles.active : ''}`}>
                        <Link href={'/about'}>
                            About
                        </Link>
                        </li>
                        <li style={{ paddingBlock: '40px' }} className={`text-lg ${Styles.menulink} relative wrap-menu ${isActive('/services') ? Styles.active : ''}`}>
                            <Link href="/services">Services</Link>
                            <ul className="sub-menu">
                                <li><Link href="/">Architecture</Link></li>
                                <li><Link href="/">Interior Design</Link></li>
                                <li><Link href="/">UiUx Designing</Link></li>
                                <li><Link href="/">Building Renovation</Link></li>
                                <li><Link href="/">Construction Site</Link></li>
                                <li><Link href="/">Security System</Link></li>
                            </ul>
                        </li>
                        <li style={{ paddingBlock: '40px' }} className={`text-lg ${Styles.menulink} relative ${isActive('/contact') ? Styles.active : ''}`}>
                        <Link href={'/contact'}>
                            Contact
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className="search text-2xl hidden lg:block ">
                    <HiMagnifyingGlass style={{color : '#000'}} />
                </div>
                <div className='lg:hidden text-3xl'>
                <GiHamburgerMenu />
                </div>
                </div>
            </div>
        </div>
    )
}

export default shareNavbar

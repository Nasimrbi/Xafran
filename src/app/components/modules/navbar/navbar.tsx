'use client'
import React, { useEffect, useRef, useState } from 'react'
import Styles from './navbar.module.css'
import Image from 'next/image'
import logo from "@/app/public/assets/images/logo-1.png"
import Link from 'next/link'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo2 from '@/app/public/assets/images/logo-2.png'
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


interface NavbarProps {
    isShare?: boolean
}

function Navbar({ isShare }: NavbarProps) {

    const navbarMenu = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname()
    const [isSticky, setIsSticky] = useState(false)
    const isActive = (path: string) => pathname === path
    const mobileNav = useRef<HTMLDivElement | null>(null)
    const [isShowSubMenu, setIsShowSubMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (navbarMenu.current) {
                if (window.scrollY > 100) {
                    navbarMenu.current.classList.add('sticky-menu')
                    setIsSticky(true)
                } else {
                    navbarMenu.current.classList.remove('sticky-menu')
                    setIsSticky(false)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const showMobileNav = () => {
        mobileNav.current?.classList.toggle('mobile-menu-visible')
        document.body.classList.toggle('overflow-hidden')
    }

    const CloseMenu = () => {
        mobileNav.current?.classList.remove('mobile-menu-visible')
        document.body.classList.remove('overflow-hidden')
    }

    const showSubMenu = () => {
        setIsShowSubMenu(!isShowSubMenu)
    }

    return (
        <div ref={navbarMenu} className={`container navbar mx-auto px-5 absolute   ${isShare ? 'lg:top-[4rem]' : 'top-0'} right-0 left-0 ${isShare ? 'bg-white lg:px-20' : 'px-5'}`} style={{ zIndex: 99, borderBottom: '1px solid rgba(255,255,255,.14)', maxWidth: '100%' }}>
            <div className='flex justify-between items-center text-white py-8 lg:py-0' style={{ zIndex: 99 }}>
                <div className="logo">
                    <Link href={'/'}>
                        {
                            isSticky ? <Image src={logo} alt='' /> : <Image src={isShare ? Logo2 : logo} priority alt='xafran Logo' />
                        }
                    </Link>
                </div>
                <div className="menus hidden lg:block">
                    <ul className='flex gap-10'>
                        <li style={{ paddingBlock: '40px' }} className={`text-lg ${Styles.menulink} ${isShare ? 'text-dark' : 'text-white'} relative ${isActive('/') ? Styles.active : ''}`}>
                            <Link href={'/'}>
                                Home
                            </Link>
                        </li>
                        <li style={{ paddingBlock: '40px' }} className={`text-lg ${Styles.menulink} ${isShare ? 'text-dark' : 'text-white'} relative ${isActive('/about') ? Styles.active : ''}`}>
                            <Link href={'/about'}>
                                About
                            </Link>
                        </li>
                        <li style={{ paddingBlock: '40px' }} className={`text-lg ${Styles.menulink} ${isShare ? 'text-dark' : 'text-white'} relative wrap-menu ${isActive('/services') ? Styles.active : ''}`}>
                            <Link href="/services">Services</Link>
                            <ul className="sub-menu">
                                <li className={`${isSticky ? 'text-dark' : ''}`} ><Link href="/">Architecture</Link></li>
                                <li className={`${isSticky ? 'text-dark' : ''}`} ><Link href="/">Interior Design</Link></li>
                                <li className={`${isSticky ? 'text-dark' : ''}`} ><Link href="/">UiUx Designing</Link></li>
                                <li className={`${isSticky ? 'text-dark' : ''}`} ><Link href="/">Building Renovation</Link></li>
                                <li className={`${isSticky ? 'text-dark' : ''}`} ><Link href="/">Construction Site</Link></li>
                                <li className={`${isSticky ? 'text-dark' : ''}`} ><Link href="/">Security System</Link></li>
                            </ul>
                        </li>
                        <li style={{ paddingBlock: '40px' }} className={`text-lg ${Styles.menulink} ${isShare ? 'text-dark' : 'text-white'} relative ${isActive('/contact') ? Styles.active : ''}`}>
                            <Link href={'/contact'}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div ref={mobileNav} className="mobile-nav lg:hidden">
                    <div className="nav-box">
                        <div className="nav-logo flex p-5 justify-between">
                            <Link href={'/'}><Image src={Logo2} priority alt='Logo' /></Link>
                            <IoClose style={{ color: '000', fontSize: '30px' }} onClick={CloseMenu} />
                        </div>
                        <div className="mobileNav" style={{ borderBottom: '1px solid rgba(0, 0, 0, .1)' }}>
                            <ul className='mt-2'>
                                <li className='p-3'>
                                    <Link href={'/'} onClick={() => document.body.classList.remove('overflow-hidden')}>Home</Link>
                                </li>
                                <li className='p-3'>
                                    <Link href={'/about'} onClick={() => document.body.classList.remove('overflow-hidden')}>About</Link>
                                </li>
                                <li className={` flex justify-between  relative p-3`}>
                                    <Link href={'services'} onClick={() => document.body.classList.remove('overflow-hidden')}>Services</Link>
                                    <div onClick={showSubMenu} className='flex justify-center items-center p-2' style={{ background: '#e90b35' }}>
                                        <MdKeyboardArrowRight className='text-2xl' />
                                    </div>
                                </li>
                                    {
                                        isShowSubMenu ?
                                            <ul>
                                                <li className={`text-dark p-3`} ><Link href="/">Architecture</Link></li>
                                                <li className={`text-dark p-3`} ><Link href="/">Interior Design</Link></li>
                                                <li className={`text-dark p-3`} ><Link href="/">UiUx Designing</Link></li>
                                                <li className={`text-dark p-3`} ><Link href="/">Building Renovation</Link></li>
                                                <li className={`text-dark p-3`} ><Link href="/">Construction Site</Link></li>
                                                <li className={`text-dark p-3`} ><Link href="/">Security System</Link></li>
                                            </ul> : ''
                                    }
                                <li className='p-3'>
                                    <Link href={'/contact'} onClick={() => document.body.classList.remove('overflow-hidden')}>Contact</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="flex gap-5 pl-5 pt-5 items-center">
                            <div className='p-3 rounded-full' style={{ background: '#e90b35' }}>
                                <BsFillTelephoneFill className='text-white' />
                            </div>
                            <Link style={{ color: '#000' }} href={'tel:6295550129'}>(629) 555-0129</Link>
                        </div>
                        <div className="social-media flex justify-center gap-2 p-5">
                            <div className="p-3 flex justify-center items-center rounded" style={{ border: '1px solid #000' }}>
                                <FaFacebookF style={{ color: '#000' }} />
                            </div>
                            <div className="p-3 flex justify-center items-center rounded" style={{ border: '1px solid #000' }}>
                                <FaTwitter style={{ color: '#000' }} />
                            </div>
                            <div className="p-3 flex justify-center items-center rounded" style={{ border: '1px solid #000' }}>
                                <FaInstagram style={{ color: '#000' }} />
                            </div>
                            <div className="p-3 flex justify-center items-center rounded" style={{ border: '1px solid #000' }}>
                                <FaLinkedinIn style={{ color: '#000' }} />
                            </div>
                            <div className="p-3 flex justify-center items-center rounded" style={{ border: '1px solid #000' }}>
                                <FaYoutube style={{ color: '#000' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search text-2xl hidden lg:block">
                    <HiMagnifyingGlass className={`${isShare ? 'text-dark' : 'text-white'}`} />
                </div>
                <div className={`lg:hidden text-3xl   ${isSticky && isShare ? 'text-white' : ''} ${isShare ? 'text-dark' : ''} ${isSticky ? 'text-white' : ''}`}>
                    {isSticky ? <GiHamburgerMenu className='text-white' onClick={() => showMobileNav()} /> : <GiHamburgerMenu onClick={() => showMobileNav()} />}
                </div>
            </div>
        </div>


    )
}

export default Navbar

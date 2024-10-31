import React from 'react'
import Styles from './ourServices.module.css'
import Image from 'next/image'
import { IoFastFoodOutline } from "react-icons/io5";
import Link from 'next/link';
import { GiFarmTractor } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { PiCodesandboxLogo } from "react-icons/pi";
import serviceOneShape from '@/app/public/assets/images/service-v1-shape1.png'
import seriveTwoShape from '@/app/public/assets/images/service-v1-shape1.png'
import serviceThree from '@/app/public/assets/images/service-v1-shape1.png'
import serviceFour from '@/app/public/assets/images/service-v1-shape1.png'




function ourServices() {
    return (
        <div className='bg-dark  lg:my-10 relative' style={{overflowX : 'hidden'}}>
            <div className="container mx-auto p-5 lg:px-20">
                <div className="flex justify-center flex-col text-center lg:p-10">
                    <h3 className='primary-color font-bold'>OUR SERVICE</h3>
                    <h1 className='secoundry-color font-bold lg:text-5xl text-xl mb-5 lg:mb-0 mt-5'>Our Architecture Services</h1>
                </div>
                <div className="flex flex-wrap lg:px-10" style={{ marginInline: '15px' }}>
                    <div className='w-full lg:w-1/2 px-5'>
                        <div className={`${Styles.servicebox} `}>
                            <Image src={serviceOneShape} alt='shape' className={`${Styles.shape}`} />
                            <div className={`${Styles.serviceInner} flex flex-wrap lg:flex-nowrap lg:gap-10 items-center relative`}>
                                <div>
                                    <div className={`${Styles.counttext}`}>01</div>
                                    <div className={`${Styles.iconbox} text-7xl`}>
                                        <IoFastFoodOutline />
                                    </div>
                                </div>
                                <div className={`${Styles.contentbox}  lg:pl-10`}>
                                    <h2 className='secoundry-color font-bold text-3xl'><Link href={'/'}>General Contracting</Link></h2>
                                    <p className='mt-5'>Through a unique combination of construction and design disciplines expertise, Concor and delivers world class</p>
                                    <div className={`${Styles.btnbox} mt-5`}>
                                        <Link href={'/'} className='font-bold'>EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-5'>
                        <div className={`${Styles.servicebox} `}>
                            <Image src={seriveTwoShape} alt='shape' className={`${Styles.shape}`} />
                            <div className={`${Styles.serviceInner} flex flex-wrap lg:flex-nowrap gap-10 items-center relative`}>
                                <div>
                                    <div className={`${Styles.counttext}`}>02</div>
                                    <div className={`${Styles.iconbox} text-7xl`}>
                                        <GiFarmTractor />

                                    </div>
                                </div>
                                <div className={`${Styles.contentbox}  lg:pl-10`}>
                                    <h2 className='secoundry-color font-bold text-3xl'><Link href={'/'}>Machine Design</Link></h2>
                                    <p className='mt-5'>Through a unique combination of construction and design disciplines expertise, Concor and delivers world class</p>
                                    <div className={`${Styles.btnbox} mt-5`}>
                                        <Link href={'/'} className='font-bold'>EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-5'>
                        <div className={`${Styles.servicebox}  `}>
                            <Image src={serviceThree} alt='shape' className={`${Styles.shape}`} />
                            <div className={`${Styles.serviceInner} flex flex-wrap lg:flex-nowrap gap-10 items-center relative`}>
                                <div>
                                    <div className={`${Styles.counttext}`}>03</div>
                                    <div className={`${Styles.iconbox} text-7xl`}>
                                        <GoProjectRoadmap />
                                    </div>
                                </div>
                                <div className={`${Styles.contentbox}  lg:pl-10`}>
                                    <h2 className='secoundry-color font-bold text-3xl'><Link href={'/'}>Project Planing</Link></h2>
                                    <p className='mt-5'>Through a unique combination of construction and design disciplines expertise, Concor and delivers world class</p>
                                    <div className={`${Styles.btnbox} mt-5`}>
                                        <Link href={'/'} className='font-bold'>EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-5'>
                        <div className={`${Styles.servicebox}  `}>
                            <Image src={serviceFour} alt='shape' className={`${Styles.shape}`} />
                            <div className={`${Styles.serviceInner} flex flex-wrap lg:flex-nowrap gap-10 items-center relative`}>
                                <div>
                                    <div className={`${Styles.counttext}`}>04</div>
                                    <div className={`${Styles.iconbox} text-7xl`}>
                                        <PiCodesandboxLogo />
                                    </div>
                                </div>
                                <div className={`${Styles.contentbox}  lg:pl-10`}>
                                    <h2 className='secoundry-color font-bold text-3xl'><Link href={'/'}>Interior Design</Link></h2>
                                    <p className='mt-5'>Through a unique combination of construction and design disciplines expertise, Concor and delivers world class</p>
                                    <div className={`${Styles.btnbox} mt-5`}>
                                        <Link href={'/'} className='font-bold'>EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Styles.animImage} bgSolidAnim `} ></div>
        </div>
    )
}

export default ourServices

'use client'
import React from 'react'
import Styles from './aboutCompany.module.css'
import Link from 'next/link'
import Image from 'next/image'
import about1 from '@/app/public/assets/images/about-v1-img1.jpg'
import aboutCompany1 from '@/app/public/assets/images/about-v1-shape1.png'
import about2 from '@/app/public/assets/images/about-v1-img2.jpg'
import signature from '@/app/public/assets/images/signature-1.png'



function aboutCompany() {
    return (
        <div className='relative '>
            <Image alt='about shape' className={`${Styles.shape1}  float-bob-y`} src={aboutCompany1} />
            <div className='container mx-auto lg:px-32 px-5 lg:my-10'>
                <div className={`${Styles.aboutWrapper} `}>
                    <div className="grid grid-cols-1  lg:grid-cols-12  gap-20">
                        <div className='col-span-1 lg:col-span-5 relative'>
                            <div className={`${Styles.inneImageAbout}`}>
                            <div className={`${Styles.inner}`}>
                            <Image src={about1} alt='about' className={`${Styles.aboutCompanyImage}`} style={{width: '100%'}} />
                            </div>
                            </div>
                            <div className={`${Styles.experiencebox} flex-wrap`}>
                                <h2 className={`${Styles.experienceCount}`}>24</h2>
                                <p className={`${Styles.textBox}`}>
                                    YEARS <br />
                                    WORKIGN <br />
                                    EXPERIENCE
                                </p>
                            </div>
                        </div>
                        <div className='col-span-1 lg:col-span-7'>
                            <h5 className={`${Styles.aboutHeading} font-bold`}>About Company</h5>
                            <h2 className={`${Styles.aboutTitle} mb-10 mt-5`}>Find Architect to Building
                                Your Vision & Passion</h2>
                            <p>Arki features minimal and stylish design. The theme is well crafted for all the modern architect and interior design website. With Arki, it makes your website look even more attractive and impressive to</p>
                            <div className={`${Styles.contentProgressSingle} mt-10`}>
                                <h4>Design</h4>
                                <div className={`${Styles.bar}`}>
                                    <div className={`${Styles.barinner}`}>
                                        <div className={`${Styles.count1} hidden lg:block`}>80%</div>
                                    </div>
                                </div>
                                <h4 className='mt-10'>Architect</h4>
                                <div className={`${Styles.bar}`}>
                                    <div className={`${Styles.barinner2}`}>
                                        <div className={`${Styles.count2} hidden lg:block`}>90%</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Styles.contentBottom}`}>
                                <div className='flex flex-wrap gap-10 items-center'>
                                    <Link href={'/'} className='primaryButton'><span>Discover More</span></Link>
                                    <div className='flex gap-3 items-center'>
                                        <Image src={about2} alt='author' className='rounded-full border border-black-900' />
                                        <Image src={signature} alt='Signature' />
                                    </div>
                                </div>
                                <div className='flex flex-wrap items-center mt-20'>
                                    <h3 className='font-bold text-xl text-black'>Do you have any project on your mind? Call Us:</h3>
                                    <h3 className='font-bold text-xl primary-color'>+123 456789</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutCompany

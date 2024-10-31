'use client'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Styles from './ourTeam.module.css'
import { IoShareSocialSharp } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { TbLetterV } from "react-icons/tb";
import { TbLetterX } from "react-icons/tb";
import {Autoplay} from 'swiper/modules'
import Team1 from '@/app/public/assets/images/team-v1-img1.jpg'
import Team2 from '@/app/public/assets/images/team-v1-img2.jpg'
import Team3 from '@/app/public/assets/images/team-v1-img3.jpg'
import Team4 from '@/app/public/assets/images/team-v1-img4.jpg'
import Team5 from '@/app/public/assets/images/team-v1-img2.jpg'

function ourTeam() {
    return (
        <div className='container mx-auto px-5 lg:px-10 my-10'>
            <div className="flex flex-wrap mb-5 lg:mb-0 justify-between items-center ">
                <div>
                    <h3 className='font-bold primary-color'>OUR TEAM MEMBER</h3>
                    <h2 className='font-bold text-5xl mt-5 mb-20'>Our Talented Team <br />
                        Member Behind Xafran</h2>
                </div>
                <div>
                    <Link href={'/'} className='primaryButton' ><span>JOIN OUR TEAM</span></Link>
                </div>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop = {true}
                  breakpoints={{
                    0: {
                        slidesPerView : 1
                    },

                    1200 : {
                        slidesPerView : 4
                    }
                    
                  }}
            >
                <SwiperSlide>
                    <div className={`${Styles.wrapper} lg:pr-8`} >
                    <div className={`${Styles.innerImage} relative`}>
                    <Image src={Team1} alt='team'  />
                    <div className={`${Styles.singleIcon}`}>
                        <div className={`${Styles.iconShare}`}>
                        <IoShareSocialSharp className='text-3xl' />
                        </div>
                        <ul className={`${Styles.socialinnerlink}`}>
                            <li><Link href={'/'}><IoLogoFacebook className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterV className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterX className='text-3xl' /></Link></li>
                        </ul>
                    </div>
                    </div>
                        <div className="bottomImage mt-5 pl-5">
                            <h3 className='font-bold text-2xl'><Link href={'/'}>Shamim Khan</Link></h3>
                            <p>Co Founder</p>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${Styles.wrapper} lg:pr-8`}>
                    <div className={`${Styles.innerImage} relative`}>
                    <Image src={Team2} alt='team' />
                    <div className={`${Styles.singleIcon}`}>
                        <div className={`${Styles.iconShare}`}>
                        <IoShareSocialSharp className='text-3xl' />
                        </div>
                        <ul className={`${Styles.socialinnerlink}`}>
                            <li><Link href={'/'}><IoLogoFacebook className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterV className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterX className='text-3xl' /></Link></li>
                        </ul>
                    </div>
                    </div>
                        <div className="bottomImage mt-5 pl-5">
                            <h3 className='font-bold text-2xl'><Link href={'/'}>Ananta Khan</Link></h3>
                            <p>Designer</p>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${Styles.wrapper} lg:pr-8`}>
                    <div className={`${Styles.innerImage} relative`}>
                    <Image src={Team3} alt='team' />
                    <div className={`${Styles.singleIcon}`}>
                        <div className={`${Styles.iconShare}`}>
                        <IoShareSocialSharp className='text-3xl' />
                        </div>
                        <ul className={`${Styles.socialinnerlink}`}>
                            <li><Link href={'/'}><IoLogoFacebook className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterV className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterX className='text-3xl' /></Link></li>
                        </ul>
                    </div>
                    </div>
                        <div className="bottomImage mt-5 pl-5">
                            <h3 className='font-bold text-2xl'><Link href={'/'}>Annete Black</Link></h3>
                            <p>Engineer</p>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${Styles.wrapper} lg:pr-8`}>
                    <div className={`${Styles.innerImage} relative`}>
                    <Image src={Team4} alt='team' />
                    <div className={`${Styles.singleIcon}`}>
                        <div className={`${Styles.iconShare}`}>
                        <IoShareSocialSharp className='text-3xl' />
                        </div>
                        <ul className={`${Styles.socialinnerlink}`}>
                            <li><Link href={'/'}><IoLogoFacebook className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterV className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterX className='text-3xl' /></Link></li>
                        </ul>
                    </div>
                    </div>
                        <div className="bottomImage mt-5 pl-5">
                            <h3 className='font-bold text-2xl'><Link href={'/'}>Anannya Wifey</Link></h3>
                            <p>Developer</p>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${Styles.wrapper} lg:pr-8`}>
                    <div className={`${Styles.innerImage} relative`}>
                    <Image src={Team5} alt='team' />
                    <div className={`${Styles.singleIcon}`}>
                        <div className={`${Styles.iconShare}`}>
                        <IoShareSocialSharp className='text-3xl' />
                        </div>
                        <ul className={`${Styles.socialinnerlink}`}>
                            <li><Link href={'/'}><IoLogoFacebook className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterV className='text-3xl' /></Link></li>
                            <li><Link href={'/'}><TbLetterX className='text-3xl' /></Link></li>
                        </ul>
                    </div>
                    </div>
                        <div className="bottomImage mt-5 pl-5">
                            <h3 className='font-bold text-2xl'><Link href={'/'}>Ananta Khan</Link></h3>
                            <p>Designer</p>
                        </div> 
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ourTeam

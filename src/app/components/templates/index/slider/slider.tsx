'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Styles from '../slider/slider.module.css'
import Link from 'next/link';
import { IoPlayOutline } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import Shaep1 from '@/app/public/assets/images/slider-v1-shape1.png'
import Shep2 from '@/app/public/assets/images/slider-v1-shape2.png'
import Navbar from '@/app/components/modules/navbar/navbar';




export default  function   Slider() {

  return (
    <div >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='relative main-slide'
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        <Navbar />
        <SwiperSlide className='relative'>
          <div className={`${Styles.sliderbg} ${Styles.slideone} image-layer`}>
            <Image
              className='animate__animated  image-dark'
              src={Shaep1}
              alt='slide one'
              priority
            />
            <h3 className='text-white  absolute top-56 lg:top-96 left-20 lg:left-96 text-5xl md:text-7xl font-bold'>Creative</h3>
            <h2 className='text-white  absolute top-56 left-20 lg:top-96 lg:left-96 main-heading-slide font-bold mt-10 lg:mt-6' >Architecture</h2>
            <div className=" absolute flex flex-wrap gap-9 items-center btns  left-20 lg:left-96 mt-10 lg:mt-6 text-white" >
              <Link href="/" className={`${Styles.primaryButton} relative   font-bold `}> <span>Discover More</span></Link>
              <Link href="/" className={` relative ${Styles.videobtn}  font-bold `}> <div className={`${Styles.videoIconContainer}`}><IoPlayOutline className={`${Styles.videoIcon} text-3xl`} /></div> <span className='text-lg'>Watch Our Videos</span></Link>
            </div>
            <Image className={`absolute lg:block hidden right-5 md:right-40 bottom-20 ${Styles.animImg}`} src={Shep2} alt='shapeanim'  />
            <div className={`${Styles.socials} hidden lg:flex flex-wrap gap-10 socials absolute right-5 md:right-20 bottom-10 `}>
              <Link href={'/'}><ImFacebook2 className=' text-lg' /></Link>
              <Link href={'/'}><FaInstagram className=' text-lg' /></Link>
              <Link href={'/'}> <FaTiktok className=' text-lg' /></Link>
            </div>

            <div className={`${Styles.details} absolute details bottom-20 left-20 lg:left-96 hidden lg:flex flex-wrap justify-center  gap-5`}>
              <div className='flex flex-wrap gap-5'>
                <IoLocationOutline className='text-xl' />
                <span className='text-bold'>465 NT Road. North West, England</span>
              </div>

              <div className='flex flex-wrap gap-5'>
                <TfiEmail className='text-xl' />
                <Link className='text-bold' href={'mailto:yourmail@email.com'}>needhelpxafran@gmail.com</Link>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <div className={`${Styles.sliderbg} ${Styles.slidTwo} image-layer`}>
            <Image
              className='animate__animated  image-dark'
              src={Shaep1}
              alt='slide one'
              priority
            />
            <h3 className='text-white  absolute top-56 lg:top-96 left-20 lg:left-96 text-5xl md:text-7xl font-bold'>Creative</h3>
            <h2 className='text-white  absolute top-56 left-20 lg:top-96 lg:left-96 main-heading-slide font-bold mt-10 lg:mt-6' >Architecture</h2>
            <div className=" absolute flex flex-wrap gap-9 items-center btns  left-20 lg:left-96 mt-10 lg:mt-6 text-white" >
              <Link href="/" className={`${Styles.primaryButton} relative   font-bold `}> <span>Discover More</span></Link>
              <Link href="/" className={` relative ${Styles.videobtn}  font-bold `}> <div className={`${Styles.videoIconContainer}`}><IoPlayOutline className={`${Styles.videoIcon} text-3xl`} /></div> <span className='text-lg'>Watch Our Videos</span></Link>
            </div>
            <Image className={`absolute lg:block hidden right-5 md:right-40 bottom-20 ${Styles.animImg}`} src={Shep2} alt='shapeanim'  />
            <div className={`${Styles.socials} hidden lg:flex flex-wrap gap-10 socials absolute right-5 md:right-20 bottom-10 `}>
              <Link href={'/'}><ImFacebook2 className=' text-lg' /></Link>
              <Link href={'/'}><FaInstagram className=' text-lg' /></Link>
              <Link href={'/'}> <FaTiktok className=' text-lg' /></Link>
            </div>

            <div className={`${Styles.details} absolute details bottom-20 left-20 lg:left-96 hidden lg:flex flex-wrap justify-center  gap-5`}>
              <div className='flex flex-wrap gap-5'>
                <IoLocationOutline className='text-xl' />
                <span className='text-bold'>465 NT Road. North West, England</span>
              </div>

              <div className='flex flex-wrap gap-5'>
                <TfiEmail className='text-xl' />
                <Link className='text-bold' href={'mailto:yourmail@email.com'}>needhelpxafran@gmail.com</Link>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <div className={`${Styles.sliderbg} ${Styles.slidethree} image-layer`}>
            <Image
              className='animate__animated  image-dark'
              src={Shaep1}
              alt='slide one'
              priority
            />
            <h3 className='text-white  absolute top-56 lg:top-96 left-20 lg:left-96 text-5xl md:text-7xl font-bold'>Creative</h3>
            <h2 className='text-white  absolute top-56 left-20 lg:top-96 lg:left-96 main-heading-slide font-bold mt-10 lg:mt-6' >Architecture</h2>
            <div className=" absolute flex flex-wrap gap-9 items-center btns  left-20 lg:left-96 mt-10 lg:mt-6 text-white" >
              <Link href="/" className={`${Styles.primaryButton} relative   font-bold `}> <span>Discover More</span></Link>
              <Link href="/" className={` relative ${Styles.videobtn}  font-bold `}> <div className={`${Styles.videoIconContainer}`}><IoPlayOutline className={`${Styles.videoIcon} text-3xl`} /></div> <span className='text-lg'>Watch Our Videos</span></Link>
            </div>
            <Image className={`absolute lg:block hidden right-5 md:right-40 bottom-20 ${Styles.animImg}`} src={Shep2} alt='shapeanim'  />
            <div className={`${Styles.socials} hidden lg:flex flex-wrap gap-10 socials absolute right-5 md:right-20 bottom-10 `}>
              <Link href={'/'}><ImFacebook2 className=' text-lg' /></Link>
              <Link href={'/'}><FaInstagram className=' text-lg' /></Link>
              <Link href={'/'}> <FaTiktok className=' text-lg' /></Link>
            </div>

            <div className={`${Styles.details} absolute details bottom-20 left-20 lg:left-96 hidden lg:flex flex-wrap justify-center  gap-5`}>
              <div className='flex flex-wrap gap-5'>
                <IoLocationOutline className='text-xl' />
                <span className='text-bold'>465 NT Road. North West, England</span>
              </div>

              <div className='flex flex-wrap gap-5'>
                <TfiEmail className='text-xl' />
                <Link className='text-bold' href={'mailto:yourmail@email.com'}>needhelpxafran@gmail.com</Link>
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}



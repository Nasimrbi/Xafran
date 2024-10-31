'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {  Autoplay } from 'swiper/modules';
import Brand1 from '@/app/public/assets/images/brand-v1-img5.png'
import Brand2 from '@/app/public/assets/images/brand-v1-img5.png'
import Brand3 from '@/app/public/assets/images/brand-v1-img4.png'
import Brand4 from '@/app/public/assets/images/brand-v1-img3.png'
import Brand5 from '@/app/public/assets/images/brand-v1-img1.png'
import Brand6 from '@/app/public/assets/images/brand-v1-img2.png'
import Brand7 from '@/app/public/assets/images/brand-v1-img1.png'



function logoSlider() {
  return (
    <div className='container mx-auto px-5 lg:px-40 my-20'>
       <Swiper
      spaceBetween={5}
      slidesPerView={5}
     className={`brandSlide`}
     loop={true}
     autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0 : {
          slidesPerView : 1
        },
        1200 : {
          slidesPerView : 5
        }
      }}
    >
      <SwiperSlide>
        <div className={`imageBox justify-center flex`}>
        <Image src={Brand1}  alt='brand' />
        </div>
        <div className={`imgBox2 justify-center flex`}>
        <Image src={Brand2}  alt='brand' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`imageBox justify-center flex`}>
        <Image src={Brand3}  alt='brand' />
        </div>
        <div className={`imgBox2 justify-center flex`}>
        <Image src={Brand3}  alt='brand' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`imageBox justify-center flex`}>
        <Image src={Brand4}  alt='brand' />
        </div>
        <div className={`imgBox2 justify-center flex`}>
        <Image src={Brand4}  alt='brand' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`imageBox justify-center flex`}>
        <Image src={Brand5}  alt='brand' />
        </div>
        <div className={`imgBox2 justify-center flex`}>
        <Image src={Brand5}  alt='brand' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`imageBox justify-center flex`}>
        <Image src={Brand6}  alt='brand' />
        </div>
        <div className={`imgBox2 justify-center flex`}>
        <Image src={Brand6}  alt='brand' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`imageBox justify-center flex`}>
        <Image src={Brand7}  alt='brand' />
        </div>
        <div className={`imgBox2 justify-center flex`}>
        <Image src={Brand7}  alt='brand' />
        </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default logoSlider

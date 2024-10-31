'use client'
import React from 'react'
import Styles from './testimonal.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdStar } from "react-icons/io";
import { Pagination, Autoplay } from 'swiper/modules';
import TestimonialOne from '@/app/public/assets/images/testimonials-v1-shape1.png'
import TestimonialTwo from '@/app/public/assets/images/testimonials-v1-img1.jpg'
import TestimonialThree from '@/app/public/assets/images/testimonials-v1-img2.jpg'
import TestimonialFour from '@/app/public/assets/images/testimonials-v1-img3.jpg'



function testimonial() {
    return (
        <div className={`${Styles.testimonal}`}>
            <div className={`${Styles.shape}`}>
                <Image src={TestimonialOne} alt='shape' />
            </div>
            <div className="container mx-auto px-5 lg:px-20 py-40">
                <div className="heading text-center">
                    <h3 className='font-bold primary-color mb-5'>OUR CLIENT TESTIMONIALS</h3>
                    <h2 className='font-bold text-4xl'>What Client Say About Xafran</h2>
                </div>
                <div className="wrapperTestimonial mt-10 lg:px-40">
                    <div className={`${Styles.inneerTestimonial} relative`}>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            className='testimonalSlider'
                            modules={[Pagination]}
                            loop={true}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                         
                        >
                            <SwiperSlide>
                                <div className={`${Styles.ratingBox} mb-5`}>
                                    <IoMdStar className='primary-color' />
                                    <IoMdStar className='primary-color' />
                                    <IoMdStar className='primary-color' />
                                    <IoMdStar className='primary-color' />
                                    <IoMdStar className='primary-color' />
                                </div>
                                <div className={`${Styles.testimonalContent} `}>
                                    <p>We are an architecture firm with a focus on beautiful but functional design. At its <br /> heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read projects, our process and our team below.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${Styles.ratingBox} mb-5`}>
                                    <IoMdStar className='primary-color' />
                                    <IoMdStar className='primary-color' />
                                    <IoMdStar className='primary-color' />
                                    <IoMdStar className='primary-color' />
                                    <IoMdStar className='primary-color' />
                                </div>
                                <div className={`${Styles.testimonalContent} `}>
                                    <p>We are an architecture firm with a focus on beautiful but functional design. At its <br /> heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read projects, our process and our team below.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${Styles.ratingBox} mb-5`}>
                                    <IoMdStar className='primary-color text-2xl' />
                                    <IoMdStar className='primary-color text-2xl' />
                                    <IoMdStar className='primary-color text-2xl' />
                                    <IoMdStar className='primary-color text-2xl' />
                                    <IoMdStar className='primary-color text-2xl' />
                                </div>
                                <div className={`${Styles.testimonalContent} `}>
                                    <p>We are an architecture firm with a focus on beautiful but functional design. At its <br />  heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read projects, our process and our team below.</p>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                    <div className="members mt-20">
                        <div className="singleMember flex flex-wrap justify-center gap-10">
                            <div className="flex flex-wrap items-center gap-10 ">
                                <div className="testimonialThumb relative">
                                    <div className="thumnImage">
                                        <Image className='memberImage' src={TestimonialTwo} alt='' />
                                    </div>
                                </div>
                                <div className="details">
                                    <h2 className='font-bold text-2xl'>Annete Black</h2>
                                    <p>Engineer</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="testimonialThumb relative">
                                    <div className="thumnImage">

                                        <Image className='memberImage' src={TestimonialThree} alt='' />
                                    </div>
                                </div>
                                <div className="details">
                                    <h2 className='font-bold text-2xl'>Robert Hazelhood</h2>
                                    <p>CEO & Co Founder</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="testimonialThumb relative">
                                    <div className="thumnImage">

                                        <Image className='memberImage' src={TestimonialFour} alt='' />
                                    </div>
                                </div>
                                <div className="details">
                                    <h2 className='font-bold text-2xl'>Anannya Islam</h2>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default testimonial

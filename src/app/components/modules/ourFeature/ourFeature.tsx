import React from 'react'
import Styles from './ourFeature.module.css'
import Image from 'next/image'
import Link from 'next/link'
import FeaturesOne from '@/app/public/assets/images/feauture-v3-shape1.png'
import FeaturesTwo from '@/app/public/assets/images/feauture-v3-img1.jpg'


function ourFeature() {
  return (
    <div className={`${Styles.features} relative pb-20 mt-10 lg:mt-0`}>
        <div className={`${Styles.shape1} float-bob-y`}>
            <Image src={FeaturesOne} alt='shape' />
        </div>
        <div className="container mx-auto w-full px-5">
        <div className="grid grid-cols-1 px-10 lg:px-0 lg:grid-cols-12">
            <div className="col-span-2 lg:col-span-6">
                <Image src={FeaturesTwo} alt='features' className={`${Styles.featureImage}`} />
            </div>
            <div className="cols-span-1 lg:col-span-5 mt-5 lg:mt-32 ">
                <h3 className='font-bold primary-color'>EXPLORE OUR FEAUTURE</h3>
                <h2 className='font-bold text-5xl mt-5 mb-10'>We provide the best <br />
                architect & interior design</h2>
                <p className='mb-10'>
                Arki features minimal and stylish design. The theme is well crafted for all the modern architect and interior design website. With Arki, it makes your website look even more attractive and impressive to
                </p>
                <Link className='primaryButton' href={'/'}>
                 <span>discover more</span>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ourFeature

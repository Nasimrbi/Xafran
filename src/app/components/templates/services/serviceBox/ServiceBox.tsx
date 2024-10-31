import React from 'react'
import Styles from './ServiceBox.module.css'
import Link from 'next/link';
import { IconType } from 'react-icons';
import Image from 'next/image';
import Shape2 from '@/app/public/assets/images/service-v2-shape2.png'
import bg from '@/app/public/assets/images/service-v2-single-bg.jpg'



interface ServiceBoxProps {
    Icon : IconType,
    title : string
}

function ServiceBox({Icon , title}: ServiceBoxProps) {
  return (
    <div className={`w-full lg:w-1/3 bg-white p-7 ${Styles.serviceSingle}`}>
        <div className={`${Styles.shape2}`}>
            <Image src={Shape2} alt='shape'  />
        </div>
        <div className={`${Styles.bg}`}></div>
        <div className="icon mb-10">
        <Icon className='text-7xl' style={{color : '#e90b35'}} />
        </div>
        <h2 className='text-dark text-3xl font-bold mb-5'>{title}</h2>
        <p className='mb-20 text-lg'>Through a unique coN construction and design disciplines expertise Concor and delivers </p>
        <Link href={'/'}>EXPLORE SERVICE</Link>
    </div>
  )
}

export default ServiceBox

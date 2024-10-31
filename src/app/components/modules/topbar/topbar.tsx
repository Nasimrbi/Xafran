import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import Styles from './topbar.module.css'
import Link from 'next/link';

function topbar() {
  return (
    <div className='bg-dark hidden lg:block p-5'>
         <div className="container mx-auto  lg:px-20">
              <div className="flex flex-wrap lg:flex-nowrap justify-between">
                   <div className='flex flex-wrap lg:flex-nowrap gap-4'>
                    <p className={Styles.topbarPhone}><Link className={Styles.phoneLink} href={'tel:+18002343445'}>1(800)234-34-45</Link></p>
                    <p className={Styles.email}><Link className={`${Styles.emailLink}`} href={'mailto:xafrancompany@gmail.com'}>xafrancompany@gmail.com</Link></p>
                   </div>
                   <div className='flex flex-wrap lg:flex-nowrap gap-5'>
                    <Link href={'/'} className={`${Styles.socialLinks}`}>
                   <FaFacebookSquare  className={`${Styles.socialIcons} text-lg`} />
                    </Link>
                    <Link href={'/'} className={`${Styles.socialLinks} `}>
                   <BsInstagram  className={`${Styles.socialIcons} text-lg`}/>
                    </Link>
                    <Link href={'/'} className={`${Styles.socialLinks}`}>
                   <IoLogoTiktok className={`${Styles.socialIcons} text-lg`} />
                    </Link>
                    <Link href={'/'} className={`${Styles.socialLinks}`}>
                   <CiYoutube className={`${Styles.socialIcons} text-lg`} />
                    </Link>
                   </div>
              </div>
         </div>
    </div>
  )
}

export default topbar

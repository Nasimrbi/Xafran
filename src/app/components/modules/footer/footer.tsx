import React from 'react'
import Styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";
import Shape from '@/app/public/assets/images/footer-v1-shape1.png'
import Logo from '@/app/public/assets/images/logo-1.png'


function footer() {
    return (
        <div className={`${Styles.bgdark} ${Styles.footer} relative`}>
            <Image src={Shape} alt='shape' className={`float-bob-y ${Styles.shape1}`} />
            <div className='container mx-auto  px-5 lg:px-32  '>
                <div className={`grid grid-cols-1 gap-10 lg:grid-cols-4 py-20 ${Styles.footer}`}>
                    <div className="about">
                        <Image src={Logo} alt='Logo' />
                        <p className={`${Styles.footerParagraph} mt-5`}>
                            Address 301 Princes Street, Ei class
                            Mahall Damietta Egypt-104
                        </p>
                        <p className={`${Styles.footerPhone} mt-5`}>+1 343 5335 3545</p>
                        <div className={` flex gap-5   mt-5`}>
                            <Link className={`${Styles.footerSocialLinks} text-xl ${Styles.footerParagraph}`} href={'/'}><ImFacebook2 /></Link>
                            <Link className={`${Styles.footerSocialLinks} text-xl ${Styles.footerParagraph}`} href={'/'}><FaInstagram /></Link>
                            <Link className={`${Styles.footerSocialLinks} text-xl ${Styles.footerParagraph}`} href={'/'}> <FaTiktok /></Link>
                        </div>
                    </div>
                    <div>
                        <h2 className={`${Styles.footerheading} mb-5 `}>Navigation</h2>
                        <ul>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`}> <li style={{ marginBottom: '11px' }} className='flex  text-lg'><FiPlus className={`${Styles.pusIcon}`} /> Home</li> </Link>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`} > <li style={{ marginBottom: '11px' }} className='flex  text-lg'><FiPlus className={`${Styles.pusIcon}`} /> About Us</li> </Link>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`}> <li style={{ marginBottom: '11px' }} className='flex  text-lg'><FiPlus className={`${Styles.pusIcon}`} /> Services</li> </Link>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`} > <li style={{ marginBottom: '11px' }} className='flex text-lg'><FiPlus className={`${Styles.pusIcon}`} />Contact Us</li> </Link>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`}> <li style={{ marginBottom: '11px' }} className='flex  text-lg'><FiPlus className={`${Styles.pusIcon}`} /> Our Blog</li> </Link>
                        </ul>
                    </div>
                    <div>
                        <h2 className={`${Styles.footerheading} mb-5`}>Quick Link</h2>
                        <ul>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`}> <li style={{ marginBottom: '11px' }} className='flex  text-lg'><FiPlus className={`${Styles.pusIcon}`} />Help</li> </Link>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`}> <li style={{ marginBottom: '11px' }} className='flex text-lg'><FiPlus className={`${Styles.pusIcon}`} />Support</li> </Link>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`}> <li style={{ marginBottom: '11px' }} className='flex  text-lg'><FiPlus className={`${Styles.pusIcon}`} />Clients</li> </Link>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`}> <li style={{ marginBottom: '11px' }} className='flex text-lg'><FiPlus className={`${Styles.pusIcon}`} />Our Team</li> </Link>
                            <Link href={'/'} className={`${Styles.footerItems} ${Styles.footerParagraph}`}> <li style={{ marginBottom: '11px' }} className='flex text-lg'><FiPlus className={`${Styles.pusIcon}`} />Portfolio</li> </Link>
                        </ul>
                    </div>
                    <div>
                        <h2 className={`${Styles.footerheading} mb-5`}>Newsletter</h2>
                        <p className={`${Styles.footerParagraph} mb-5`}>Subscribe our newsletter to get the
                            latest news & updates</p>
                            <div className='relative'>
                        <input type="text" placeholder='email@example.com' className={`${Styles.newsletterInput}`} />
                          <button className={`${Styles.newsletterbtn} absolute `}><BsFillSendFill className='text-white text-lg' /></button>
                            </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 py-10" style={{ borderTop: '1px solid #191f2a' }}>
                    <div className={`${Styles.copyright} flex justify-center mt-10`}>
                        <p>Copyright © 2024 Xafran by <span className={`${Styles.mainCopyright}`}>codesholder</span>.All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer

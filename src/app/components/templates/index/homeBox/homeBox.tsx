import React from 'react'
import Styles from './homeBox.module.css'
import Link from 'next/link'
import { AiOutlinePlus } from "react-icons/ai";
import { SlPuzzle } from "react-icons/sl";
import { TfiWrite } from "react-icons/tfi";
import { PiBuildingOfficeLight } from "react-icons/pi";

function homeBox() {
    return (
        <div className='container mx-auto px-5 lg:px-40 my-5 lg:my-20 lg:pb-10'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                <div className={`${Styles.feautureonesingle}`}>
                    <div className={`${Styles.feautureonesingletext} mb-20`}>
                        <p>EXPLORE FEATURE</p>
                        <h2>
                            <Link href={'/'} className='text-3xl font-bold '>
                                Creative Solution
                            </Link>
                        </h2>
                    </div>
                    <div className={`${Styles.feautureonesinglebottom}`}>
                        <div className={`${Styles.btnbox}`}>
                            <Link href={'/'}><AiOutlinePlus className=' text-xl' /></Link>
                        </div>
                        <div className={`${Styles.iconBox}`}>
                        <SlPuzzle  className={`${Styles.featursIcon} text-4xl`} />
                        </div> 
                    </div>
                </div>
                <div className={`${Styles.feautureonesingle}`}>
                    <div className={`${Styles.feautureonesingletext} mb-20`}>
                        <p>EXPLORE FEATURE</p>
                        <h2>
                            <Link href={'/'} className='text-3xl font-bold '>
                            Minimal Architect
                            </Link>
                        </h2>
                    </div>
                    <div className={`${Styles.feautureonesinglebottom}`}>
                        <div className={`${Styles.btnbox}`}>
                            <Link href={'/'}><AiOutlinePlus className=' text-xl' /></Link>
                        </div>
                        <div className={`${Styles.iconBox}`}>
                        <TfiWrite  className={`${Styles.featursIcon} text-4xl`} />
                        </div> 
                    </div>
                </div>
                <div className={`${Styles.feautureonesingle}`}>
                    <div className={`${Styles.feautureonesingletext} mb-20`}>
                        <p>EXPLORE FEATURE</p>
                        <h2>
                            <Link href={'/'} className='text-3xl font-bold '>
                            Redesign Dream
                            </Link>
                        </h2>
                    </div>
                    <div className={`${Styles.feautureonesinglebottom}`}>
                        <div className={`${Styles.btnbox}`}>
                            <Link href={'/'}><AiOutlinePlus className=' text-xl' /></Link>
                        </div>
                        <div className={`${Styles.iconBox}`}>
                        <PiBuildingOfficeLight   className={`${Styles.featursIcon} text-4xl`} />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homeBox

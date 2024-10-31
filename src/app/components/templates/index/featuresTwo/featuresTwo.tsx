import React from 'react'
import Styles from './featuresTwo.module.css'
import { GiLampreyMouth } from "react-icons/gi";
import Link from 'next/link';
import { GrUserManager } from "react-icons/gr";


function featuresTwo() {
    return (
        <div className={`${Styles.featuresTwo}`}>
            <div className="container mx-auto px-5 md:px-10 lg:px-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="col-span-1 lg:col-span-6 pr-0 lg:pr-7">
                        <div className={`${Styles.featureSingle}`}>
                            <div className={`${Styles.feauturetwosingleimg} ${Styles.feauturetwosingleimgOne}`}>
                                <div className={`${Styles.iconbox}`}>
                                    <span>
                                        <GiLampreyMouth />
                                    </span>
                                </div>
                            </div>
                            <div className={`${Styles.feauturetwosingleContent}`}>
                                <h2>
                                    <Link href={'/'} >We Will Provide You <br /> By Best Design</Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-6">
                        <div className={`${Styles.featureSingle}`}>
                            <div className={`${Styles.feauturetwosingleimgTwo} ${Styles.feauturetwosingleimg}`}>
                                <div className={`${Styles.iconbox}`}>
                                    <span>
                                        <GrUserManager />
                                    </span>
                                </div>
                            </div>
                            <div className={`${Styles.feauturetwosingleContent}`}>
                                <h2>
                                    <Link href={'/'} >
                                        We Have Qualified <br />
                                        Engineer’s Team  </Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default featuresTwo

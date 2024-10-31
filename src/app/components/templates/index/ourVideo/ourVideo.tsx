import React from 'react'
import Image from 'next/image'
import Styles from './ourVideo.module.css'
import Link from 'next/link'
import { IoPlayOutline } from "react-icons/io5";
import VideoPattern from '@/app/public/assets/images/video-v1-pattern.png'
import Shape from '@/app/public/assets/images/video-v1-shape1.png'

function ourVideo() {
    return (
        <div className={`${Styles.darkOverlay} `}>
            <div className={`${Styles.videoOnePattern}`}>
                <Image src={VideoPattern} alt='bg'  />
            </div>
            <div className="container mx-auto px-5" style={{maxWidth: '100%'}}>
                <div className={`${Styles.videoInner}`}>
                  <div className={`${Styles.shape1} float-bob-x`}>
                    <Image src={Shape} alt='shape' />
                  </div>
                <div className={`${Styles.bgVideo}`}>
                    <div className={`${Styles.titleBox} pt-20`}>
                        <h2>
                            We Are The Leadern

                            <br />
                            the Architectural
                        </h2>

                    </div>
                </div>
                <div className={`${Styles.videoBtns} pt-32`}>
                       <Link href={'/'} className={`${Styles.videoIcon}`}>
                       <IoPlayOutline />
                       </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ourVideo

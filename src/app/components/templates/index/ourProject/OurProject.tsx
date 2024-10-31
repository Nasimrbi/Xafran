import React from 'react'
import Image from 'next/image'
import Styles from './ourProject.module.css'
import { CiSearch } from "react-icons/ci";
import Link from 'next/link'
import { GrShareOption } from "react-icons/gr";
import Project1 from '@/app/public/assets/images/project-v1-img1.jpg'
import Project2 from '@/app/public/assets/images/project-v1-img2.jpg'
import Project3 from '@/app/public/assets/images/project-v1-img3.jpg'
import Project4 from '@/app/public/assets/images/project-v1-img4.jpg'

function OurProject() {
  return (
    <React.Fragment>

    <div className='container mx-auto px-5 mt-10 lg:mt-0'>
        <div className="flex text-center flex-col gap-4 mb-20" >
               <h3 className='primary-color font-bold'>OUR RECENT PROJECT</h3>
               <h2 className='text-black text-5xl  font-bold '>Last Projects We Designed<br/>
               Check Our Work</h2>
        </div> 
    </div>
       <div className="flex flex-wrap" style={{zIndex : 0 , position : 'relative'}}>
             <div className="w-full lg:w-1/4">
             <div className={`${Styles.projectWrapper} lg:pr-2`}>
             <div className={`${Styles.innerProject} relative`}>
             <Image src={Project1} alt='image' className='w-full' />
             <div className={`${Styles.overlayBtns}`}>
                <Link href={`/public/assets/images/project-v1-img1.jpg`} ><CiSearch className='text-2xl' /></Link>
                <Link href={`/`} ><GrShareOption className='text-2xl' /></Link>
             </div>
             <div className={`${Styles.overlayText}`}>
              <p>San Fransisco</p>
              <h2><Link href={'/'}>Hotel Joshna Villa</Link></h2>
             </div>
             </div>
             </div>
             </div>
             <div className="w-full lg:w-1/4">
             <div className={`${Styles.projectWrapper} lg:pr-2`}>
             <div className={`${Styles.innerProject} relative`}>
             <Image src={Project2} alt='image' className='w-full' />
             <div className={`${Styles.overlayBtns}`}>
                <Link href={`/public/assets/images/project-v1-img1.jpg`} ><CiSearch className='text-2xl'/></Link>
                <Link href={`/`} ><GrShareOption className='text-2xl' /></Link>
             </div>
             <div className={`${Styles.overlayText}`}>
              <p>San Fransisco</p>
              <h2><Link href={'/'}>Hotel Joshna Villa</Link></h2>
             </div>
             </div>
             </div>
             </div>
             <div className="w-full lg:w-1/4">
             <div className={`${Styles.projectWrapper} lg:pr-2`}>
             <div className={`${Styles.innerProject} relative`}>
             <Image src={Project3} alt='image' className='w-full' />
             <div className={`${Styles.overlayBtns}`}>
                <Link href={`/public/assets/images/project-v1-img1.jpg`} ><CiSearch className='text-2xl' /></Link>
                <Link href={`/`} ><GrShareOption className='text-2xl' /></Link>
             </div>
             <div className={`${Styles.overlayText}`}>
              <p>San Fransisco</p>
              <h2><Link href={'/'}>Hotel Joshna Villa</Link></h2>
             </div>
             </div>
             </div>
             </div>
             <div className="w-full lg:w-1/4">
             <div className={`${Styles.projectWrapper} lg:pr-2`}>
             <div className={`${Styles.innerProject} relative`}>
             <Image src={Project4} alt='image' className='w-full' />
             <div className={`${Styles.overlayBtns}`}>
                <Link href={`/public/assets/images/project-v1-img1.jpg`} ><CiSearch className='text-2xl' /></Link>
                <Link href={`/`} ><GrShareOption className='text-2xl' /></Link>
             </div>
             <div className={`${Styles.overlayText}`}>
              <p>San Fransisco</p>
              <h2><Link href={'/'}>Hotel Joshna Villa</Link></h2>
             </div>
             </div>
             </div>
             </div>
       </div>

    </React.Fragment>
  )
}

export default OurProject

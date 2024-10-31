'use client'
import React, { useEffect, useRef } from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";



function BottomToUp() {

    const scrollToTopBtn = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 100) {
                scrollToTopBtn.current?.classList.add('show')
            }else {
                scrollToTopBtn.current?.classList.remove('show')
            }
        }
        
        window.addEventListener('scroll', handleScroll)
       return () => window.removeEventListener('scroll',handleScroll)

    },[])


    const ScrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior : 'smooth'
        })
    }


  return (
    <div ref={scrollToTopBtn} onClick={ () => ScrollToTop()} className='scrollToTopBtn'>
      <MdOutlineKeyboardArrowUp />
    </div>
  )
}

export default BottomToUp

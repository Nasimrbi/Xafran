
import React from 'react'
import Styles from'./faqSection.module.css'
import Image from 'next/image'
import Accrodion from '@/app/components/modules/accrodion/accrodion'
import Shape from '@/app/public/assets/images/faq-v1-shape1.png'


 
function faqSection() {
  return (
    <div className={`${Styles.faqSec} gray-bg`}>
     <Image src={Shape} alt='shape' priority className='hidden lg:block'   />
    <div className='container px-5  mx-auto lg:px-10'>
        <div className={`${Styles.faqOneInner}`}> 
                <div className={`${Styles.bigTitle}`}>
                    <h2>FAQ</h2>
                </div>
                <div className={`${Styles.faqGroup}`}>
                 <Accrodion />
                </div>  
        </div>
    </div>
    </div>
  )
}

export default faqSection

'use client'

import React from 'react'
import { GoPlus } from "react-icons/go";
import { useState } from 'react';
import { FiMinus } from "react-icons/fi";

function accrodion() {


    
 
  const faqs = [1,2,3,4]  
  const [activeIndex , setActiveIndex] = useState<number | null >(0)


   const toggleHander = (index: number) => {
      if(activeIndex === index) {
        setActiveIndex(null)
      }else {
        setActiveIndex(index)
      }
   }

  return (
    <>
    {
      faqs.map((faq , index) => (
          <div className='faqaccordian' key={index}>
              <div className="faqaccordianTitle" onClick={() => toggleHander(index)}>
                  <h3>How can we improve the lead generation process?</h3>
                  <div className={`accourdianIcon ${activeIndex === index ? 'active' : ''}`} >
                      {
                          activeIndex === index ? <GoPlus className='text-2xl ' /> : <FiMinus className='text-2xl' />
                      }
                  
                  </div>
              </div>
              {
                  activeIndex === index ? (
          
              <div className="faqaccordianContent">
                  <div className="inner">
                      <p>The main elements of a marketing strategy are your target audiance goals and objectives and the tax you will employ to acitvely markter to your achive the goals.Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                  </div>
              </div>
                  ) : ''
              }
          </div>
      ))
    }
    </>
)
}

export default accrodion

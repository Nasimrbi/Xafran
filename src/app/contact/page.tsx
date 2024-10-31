import Link from 'next/link';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:gap-20 lg:grid-cols-12 my-20 lg:px-10">
          <div className="col-span-6">
            <h1 className='font-bold text-5xl'>Get in Touch</h1>
            <p>A vast majority of the app marketers mainly concent post-launch app marketing techniques and measures while completely missing pre-launch campaign. This prevents the</p>
            <h2 className='text-3xl font-bold primary-color mt-10'>Contact Info</h2>
            <div className="flex flex-col gap-5  mt-10">
              <div className="flex gap-3 items-center">
              <div className='p-5 rounded-full bg-[#e90b35] flex justify-center items-center' style={{ width: '70px', height: '70px' }}>
                <CiLocationOn className='text-white text-4xl' />
              </div>
              <div>
                  <h2 className='text-xl font-bold'>Address</h2>
                  <p>
                  
                  254, North City, Bulex Center, New York
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
              <div className='p-5 rounded-full bg-[#e90b35] flex justify-center items-center' style={{ width: '70px', height: '70px' }}>
                <MdPhone className='text-white text-4xl' />
              </div>
              <div>
                  <h2 className='text-xl font-bold'>Phone</h2>
                  <p>
                  <Link className='contactLinks' href={'tel:09 (354) 587 874'} >09 (354) 587 874 </Link>

                  or

                   <Link className='contactLinks' href={'tel:10 (698) 852 741'}> 10 (698) 852 741 </Link>
                  </p>
                </div>
              </div>
              
              <div className='flex gap-3 items-center'>
                <div className='p-5 rounded-full bg-[#e90b35] flex justify-center items-center' style={{ width: '70px', height: '70px' }}>
                  <TfiEmail className='text-white text-7xl' />
                </div>
                <div>
                  <h2 className='text-xl font-bold'>Email</h2>
                  <p>
                  <Link className='contactLinks' href={'mailto:info@example.com'} > info@example.com </Link>
                  or
                   <Link className='contactLinks' href={'mailto:info@example.com'}> info@example.com </Link>
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-span-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.7918493964808!2d-118.8001664244788!3d34.15166707311974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469bfddbf69%3A0xf2bcd5e5a88069fe!2s5700%20Lindero%20Canyon%20Rd%2C%20Westlake%20Village%2C%20CA%2091362%2C%20USA!5e0!3m2!1sen!2suk!4v1729952301541!5m2!1sen!2suk" width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </div>
        <div className='bg-[#f5f5f8] p-5 lg:p-10 my-10'>
          <h1 className='text-3xl font-bold'>Let’s Get in Touch</h1>
          <p className='text-[#767676]'>Your email address will not be published. Required fields are marked *</p>
          <form className='mt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-5 flex-wrap lg:flex-nowrap'>
              <input type="text" className='col-span-12  lg:col-span-6  bg-white p-5 text-[#767676]' placeholder='Your Name *' />
              <input type="text" className='col-span-12 lg:col-span-6 bg-white p-5 text-[#767676]' placeholder='Your Email *' />
              <input type="text" className='col-span-12  lg:col-span-6  bg-white p-5 text-[#767676]' placeholder='Phone *' />
              <input type="text" className='col-span-12 lg:col-span-6 bg-white p-5 text-[#767676]' placeholder='Subject *' />
              <textarea rows={5} className='col-span-12 bg-white p-5 text-[#767676]' placeholder='Your Message *'></textarea>
            </div>
            <button className='primaryButton mt-5 '>
              <span>Discover More</span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact

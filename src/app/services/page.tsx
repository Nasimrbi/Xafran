import React from 'react'
import ServiceBox from '../components/templates/services/serviceBox/ServiceBox'
import { RiWebhookFill } from "react-icons/ri";
import { SiJsonwebtokens } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import OurServices from '../components/modules/ourServices/ourServices';
import OurFeature from '../components/modules/ourFeature/ourFeature';

function ServicesList() {
  return (
    <div className='bg-[#f5f5f8] py-20'>
     <div className="container mx-auto px-5 lg:px-10 ">
          <div className="flex gap-5  flex-wrap lg:flex-nowrap px-5 lg:px-20">
            <ServiceBox  Icon = {RiWebhookFill} title='Machine Design' />
            <ServiceBox  Icon = {SiJsonwebtokens} title='General Contracting' />
            <ServiceBox  Icon = {SiWebpack} title='Interior Design' />
          </div>
     </div>
     <OurServices />
     <OurFeature />
    </div>
  )
}

export default ServicesList

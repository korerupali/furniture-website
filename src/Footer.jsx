import React from 'react'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faReddit, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
  <>

<div className="flex justify-between items-center flex-wrap sm:flex-nowrap m-[20px] sm:my-[100px] sm:mx-[180px]">
        <div>
        <Logo/>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap space-x-2 mt-4 sm:mt-0">
          <FontAwesomeIcon icon={faFacebook} className="text-[green] bg-[white] w-[32px] h-[32px] "/>
          <FontAwesomeIcon icon={faInstagram} className="text-[green] bg-[white] w-[32px] h-[32px] "/>
          <FontAwesomeIcon icon={faLinkedin} className="text-[green] bg-[white] w-[32px] h-[32px] "/>
          <FontAwesomeIcon icon={faTwitter} className="text-[green] bg-[white] w-[32px] h-[32px] "/>
          <FontAwesomeIcon icon={faYoutube} className="text-[green] bg-[white] w-[32px] h-[32px] "/>
          <FontAwesomeIcon icon={faTiktok} className="text-[green] bg-[white] w-[32px] h-[32px] "/>
          <FontAwesomeIcon icon={faReddit} className="text-[green] bg-[white] w-[32px] h-[32px] "/>
        </div>

      </div>



  <div className='my-[50px] md:my-[100px] mx-[10px] md:mx-[100px] '>
  <div className='grid grid-cols-2 md:grid-cols-4 md:mx-[100px] '>
    <div className='mb-5'>
        <h1 className='text-[18px] font-semibold mb-4 '>Our Collections</h1>
        <ul>
            <li className='mb-2'>Living Room</li>
            <li className='mb-2'>Bedroom</li>
            <li className='mb-2'>Dining Room</li>
            <li className='mb-2'>Office</li>
            <li className='mb-2'>Outdoor Furniture</li>
        </ul>
    </div>
    
    <div>
        <h1 className='text-[18px] font-semibold mb-4'>Living Room</h1>
        <ul>
            <li className='mb-2'>Sofas</li>
            <li className='mb-2'>Chairs</li>
            <li className='mb-2'>Coffee Tables</li>
            <li className='mb-2'>Storage Units</li>
            <li className='mb-2'>Decor Items</li>
        </ul>
    </div>
    <div>
        <h1 className='text-[18px] font-semibold mb-4'>Office</h1>
        <ul>
            <li className='mb-2'>Desks</li>
            <li className='mb-2'>Office Chairs</li>
            <li className='mb-2'>Storage Solutions</li>
            <li className='mb-2'>Lighting</li>
            <li className='mb-2'>Office Accessories</li>
        </ul>
    </div>
    <div>
        <h1 className='text-[18px] font-semibold mb-4'>Customer Service</h1>
        <ul>
            <li className='mb-2'>FAQs</li>
            <li className='mb-2'>Return Policy</li>
            <li className='mb-2'>Shipping Information</li>
            <li className='mb-2'>Warranty</li>
            <li className='mb-2'>Contact Support</li>
        </ul>
    </div>

  </div>


  
  </div>

  <div>
  <p className="text-center text-[16px] sm:text-[22px] bg-[#f3efef] py-[40px]">&copy; 2024 Furniture Hub. All rights reserved.</p>
  </div>
  </>
  )
}

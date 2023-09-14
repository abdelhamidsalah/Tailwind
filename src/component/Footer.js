import React from 'react'
import taillogo from '../photos/taillogo.svg'
const Footer = () => {
  return (
    <div className='bg-[#101025] w-full'>
    <div className='container text-white grid grid-cols-1 text-center gap-9 items-center p-[90px] sm:grid-cols-2 md:grid-cols-4 '>
    <div>
    <img src={taillogo} alt='phot'></img>
    <p><i class="fa-solid fa-location-dot"></i> Lorem ipsum dolor sit amet  ertmt formation sit amet consectetur adipisicing elit. template who asipin ertmt formation cupilition.</p>
    </div>
    <div>
    <p>+20121212121</p>
    <p>example@.com</p>
    </div>
    <div>
    <p>About Us</p>
    <p>Jobs</p>
    <p>Press</p>
    <p>Blog</p>
    </div>
    <div>
    <p>Contact Us</p>
    <p>Terms</p>
    <p>Privacy</p>
    </div>
    </div>
    
    </div>
  )
}

export default Footer

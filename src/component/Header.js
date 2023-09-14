import React, { useEffect, useRef } from 'react'
import taillogo from '../photos/taillogo.svg'
const Header = () => {
  const headref = useRef();
  useEffect(() => {
    window.addEventListener("scroll" , () => {
    if(window.scrollY >100){
      headref.current.style.background = "rgb(8, 8, 27)";
      headref.current.style.padding = "20px 0";
    }
    else{
      headref.current.style.background = "transparent";
      headref.current.style.padding = "60px 0";
    }
    });
  },[])
  return (
   <header ref={headref} className='fixed top-0 left-0 w-full z-50 pt-[60px] transition-all duration-200'>
   <div className='container flex justify-between items-center w-[80%] flex-col sm:flex-row'>
    
   <a href='/'>
   <img src={taillogo} alt='phot'></img>
   </a>
   
  <nav>
  <ul className='flex flex-auto gap-[60px] '>
  <li ><a href='/' className='text-white  fs-6 opacity-[0.9] hover:text-white hover:opacity-[1] hover:underline transition-opacity duration-200' >Features</a></li>
  <li><a href='/' className='text-white  fs-6 opacity-[0.9] hover:text-white hover:opacity-[1] hover:underline transition-opacity duration-200'>Team</a></li>
  <li><a href='/' className='text-white  fs-6 opacity-[0.9] hover:text-white hover:opacity-[1] hover:underline transition-opacity duration-200'>Signin</a></li>
  </ul>
  </nav>
    </div>
   </header>
  )
}

export default Header
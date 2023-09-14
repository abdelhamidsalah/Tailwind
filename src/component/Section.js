import React from 'react'
import tail11 from '../photos/tail11.png'
const Section = () => {
  return (
  <section className='container mt-[240px] cont flex-col mx-auto'>
  <div className='container w-full'>
  <img src={tail11} alt='pho' className='w-[700px] mx-auto'></img>
    </div>
    <div className='text-center text-white mt-[50px]'>
    <h1>All your files in one secure location
    <br/>
    accessible anywhere
    </h1>
    <p className='px-[15px] md:w-[600px] m-auto'>Lorem ipsuum dolor sit amet constructor adispicing elit. Modeliuos iste discount sortm ilquied risi vartion voluplus vet.
    eos adept rulie irrept commicci</p>
    
    </div>
   <div>
   <a href='/' className='btn mt-[30px] w-[200px] h-[60px] font-medium flex'>Get Started</a>
   </div>
  </section>
  )
}

export default Section
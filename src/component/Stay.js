import React from 'react'
import arrow from '../photos/arrow.svg'
const Stay = () => {
  return (
    <div className='container grid grid-cols-1 gap-8  items-center   mt-[170px]  md:grid-cols-2'>
    <img src={require('../photos/tail10.png')} alt='phot' className='w-[520px] mx-auto'></img>
    <div className='text-white '>
    <h2 className='w-[300px] pb-[30px] '>Stay productive, wherever you are</h2>
    <p className='fs-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. dolore exception incidete quo destrunt quidom
     accusums iure ab eqrum recepehment debetis</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. dolore exception incidete quo destrunt quidom
     accusums iure ab eqrum recepehment debetis</p>
     <a href='/' className='flex text-[#42b0d1] no-underline '>See how Fylo works 
     <img src={arrow} alt='arr' className='animate-[moveRight_1s_ease-in-out_infinite] pl-[20px] pt-[7px]'></img>
     </a>
     <hr className='w-[180px] text-[#42b0d1]'></hr>
    </div>
   
    </div>
  )
}

export default Stay
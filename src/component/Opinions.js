import React from 'react'

const Opinions = () => {
  return (
    

    <div className='container mt-[240px] grid grid-cols-1 gap-4 text-white w-full md:grid-cols-2 lg:grid-cols-3'>
    
    <div className='bg-[#21293c] relative'>
    <div className=' absolute  top-[-30px]'><img src={require('../photos/tail2.png')} alt='ppp'></img></div>
    <p className='p-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. dolore exception incidete quo destrunt quidom
     accusums iure ab eqrum recepehment debetis adipisicing elit. dolore exception incidete quo destrunt quidom</p>
    <div className='flex items-center p-[20px]'>
    <img src={require('../photos/tail12.jpg')} alt='per' className='rounded-full w-[20%]'></img>
   <div className='pl-[25px] pt-[10px]'>
   <h3>Ahmed</h3>
   <p>Founder & CIQ Jiskon</p>
   </div>
    </div>
    </div>

    <div className='bg-[#21293c]'>
    <p className='p-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. dolore exception incidete quo destrunt quidom
     accusums iure ab eqrum recepehment debetis adipisicing elit. dolore exception incidete quo destrunt quidom</p>
    <div className='flex items-center p-[20px]'>
    <img src={require('../photos/tail13.jpg')} alt='per' className='rounded-full w-[20%]'></img>
   <div className='pl-[25px] pt-[10px]'>
   <h3>Mohamed</h3>
   <p>Founder & CIQ Jiskon</p>
   </div>
    </div>
    </div>

    <div className='bg-[#21293c] '>
    <p className='p-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. dolore exception incidete quo destrunt quidom
     accusums iure ab eqrum recepehment debetis adipisicing elit. dolore exception incidete quo destrunt quidom</p>
    <div className='flex items-center p-[20px]'>
    <img src={require('../photos/tail14.jpg')} alt='per' className='rounded-full w-[20%]'></img>
   <div className='pl-[25px] pt-[10px]'>
   <h3>Eman</h3>
   <p>Founder & CIQ Jiskon</p>
   </div>
    </div>
    </div>

    </div>
   
  )
}

export default Opinions
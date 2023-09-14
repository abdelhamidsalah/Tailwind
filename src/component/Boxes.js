import tail4 from '../photos/tail4.svg';
import tail6 from '../photos/tail6.svg';
import tail5 from '../photos/tail5.svg';
import tail9 from '../photos/tail9.svg';
const Boxes = () => {
  return (
    <div className='container grid grid-cols-1 grid-rows-2 gap-7 mt-[200px] text-white lg:grid-cols-2'>
   <div className=' w-[300px] mx-auto text-center md:w-[480px]'>
   <img src={tail4} alt='ppp' className='mx-auto'></img>
   <h3>Acces your files,anywhere</h3>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.</p>
   </div>
   <div className=' w-[300px] mx-auto text-center md:w-[480px]'>
   <img src={tail9} alt='ppp' className='mx-auto'></img>
   <h3>Security you can trust</h3>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.</p>
   </div>
   <div className=' w-[300px] mx-auto text-center md:w-[480px]'>
   <img src={tail6} alt='ppp' className='mx-auto'></img>
   <h3>Real-time collaboration</h3>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.</p>
   </div>
   <div className=' w-[300px] mx-auto text-center md:w-[480px]'>
   <img src={tail5} alt='ppp' className='mx-auto'></img>
   <h3>Store any type of file</h3>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.</p>
   </div>
    </div>
  )
}

export default Boxes
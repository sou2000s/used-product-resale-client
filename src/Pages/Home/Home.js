import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import bannerCar from '../../images/bannerCar.png'
import car2 from '../../images/humphrey-muleba-T-WRLSsiZYE-unsplash.jpg'
import car3 from '../../images/stephen-leonardi-OnHZTmU7WKQ-unsplash.jpg'
const Home = () => {
 const [advertisementIndex , setAdvertiseIndex] = useState(0)
 const [alldvertise , setAlladvertise] = useState([bannerCar ,car2 , car3 ])

// useEffect(()=>{
//   setInterval(()=>{
//     setAdvertiseIndex(setAdvertiseIndex => setAdvertiseIndex < alldvertise.length ? advertisementIndex + 1 : 0)
//   },3000)
// },[alldvertise , advertisementIndex])
 


    return (
        <div className='bg-[#0D0D0D] md:h-screen text-white'>
        <div className=' '>
        <div className="hero   text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannerCar} className=" w-1/2 " alt='' />
    <div>
      <h1 className="md:text-5xl font-bold">Get Best Secondhand Cars Here</h1>
      <p className="py-1">Quality check</p>
      <p className="py-1">paperwork</p>
      <p className="py-1">24/7 hour service</p>
      
    </div>
  </div>
</div>

        </div>
            
  <hr  className='mt-24'/>

     <div className='mt-11 mb-10 text-center'>
           <Categories/>

     </div>
       
  <hr  className='md:mt-24'/>
        

       <div className='md:mt-12 '>
        <h1 className='text-center'>Advertisement</h1>
        
           
       {/* <img src={alldvertise[advertisementIndex]} className="w-60" alt="" /> */}

       </div>

        </div>
    );
};

export default Home;
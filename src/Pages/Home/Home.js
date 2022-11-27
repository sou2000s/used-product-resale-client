import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import bannerCar from '../../images/bannerCar.png'
import car2 from '../../images/humphrey-muleba-T-WRLSsiZYE-unsplash.jpg'
import car3 from '../../images/stephen-leonardi-OnHZTmU7WKQ-unsplash.jpg'
import { useQuery } from '@tanstack/react-query';
import { contains } from '@firebase/util';
import Advertisements from './Advertisements';
const Home = () => {

const [addvertiseProduct , setAvertiseProducts] = useState([])
  
useEffect(()=>{
fetch('http://localhost:5000/advertiseProducts')
.then(res => res.json())
.then(data =>setAvertiseProducts(data))
} , [])




    return (
        <div className='bg-[#0D0D0D]  text-white'>
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
       
  {/* <hr  className='md:mt-24'/> */}


  <div className='md:mt-32'>
  <h1 className='text-center pb-4 text-2xl'>We make sure</h1>
    <ul className='md:flex justify-evenly  md:p-0 p-5 '>
      <li className='p-6  md:rounded-none rounded-md bg-[#3c2f2f]'>Full engine checkup</li>
      <li className='p-6   md:mt-0 md:rounded-none rounded-md  mt-6 bg-[#3c2f2f]'>Conditon check</li>
      <li className='p-6   md:mt-0 md:rounded-none rounded-md  mt-6  bg-[#3c2f2f]'>Valid paper check </li>
    </ul>
  </div>
        
  
       {/* {
        addvertiseProduct.length &&  <div>
        <Advertisements product = {addvertiseProduct} />
       </div>
  
       } */}
      
            
       
          {addvertiseProduct.length ? <div className='pt-32 bg-[#0D0D0D]'>
            <h1 className='text-center mb-6 text-2xl'>Advertisements</h1>
            <Advertisements  product={addvertiseProduct}   />
          </div> : ''}


        
          
              
        </div>
    );
};

export default Home;
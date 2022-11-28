import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import bannerCar from '../../images/bannerCar.png'
import car2 from '../../images/humphrey-muleba-T-WRLSsiZYE-unsplash.jpg'
import car3 from '../../images/stephen-leonardi-OnHZTmU7WKQ-unsplash.jpg'
import { useQuery } from '@tanstack/react-query';
import { contains } from '@firebase/util';
import Advertisements from './Advertisements';
import carIngineIco from '../../images/icons/2061956.png'
import paperCheckico from '../../images/icons/stamp.png'
import carCheckIco from '../../images/icons/car.png'
import Footer from '../../Components/Footer/Footer';

const Home = () => {

const [addvertiseProduct , setAvertiseProducts] = useState([])
  
useEffect(()=>{
fetch('https://server-site-used-products.vercel.app/advertiseProducts')
.then(res => res.json())
.then(data =>setAvertiseProducts(data))
} , [])


// bg-[#0D0D0D]

    return (
        <div className=' bg-[#0D0D0D] text-white'>
        <div className=' '>
        <div className="hero   text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannerCar} className=" w-1/2 " alt='' />
    <div>
      <h1 className="md:text-5xl font-bold">Get Best Secondhand Cars Here</h1>
      <p className="py-1">8+ years in this field</p>
      <p className="py-1">8k+ car sale</p>
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
  <h1 className='text-center pb-4 text-4xl'>How it works</h1>
    <ul className='md:flex justify-evenly  md:p-0 mt-5 p-5 '>
      <li className='p-6  md:rounded-none rounded-md bg-[#3c2f2f]'>
       <img src={carIngineIco} className="md:w-40 w-10" alt="" />
        
          <p>  Full engine checkup  </p>
      </li>
      <li className='p-6 md:mt-0 mt-5 md:rounded-none rounded-md bg-[#3c2f2f]'>
       <img src={carCheckIco} className="md:w-40 w-10" alt="" />
        
          <p> Conditon check  </p>
      </li>
      <li className='p-6  md:mt-0 mt-5  md:rounded-none rounded-md bg-[#3c2f2f]'>
       <img src={paperCheckico} className="md:w-40 w-10" alt="" />
        
          <p>  Valid paper check  </p>
      </li>
      
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


        {/* <hr className='mt-14' /> */}
          <div className='md:py-32'>
          <div className="hero  py-12 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src='https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='' className="md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">We have expert mechanics </h1>
      <p className="py-6">Well trained and cerified mechanics check the full car</p>
     
    </div>
  </div>
</div>
          </div>

        <div className='text-center py-14'>
          <h1>Subscrbe To Our newsletter</h1>
          <p>Here you can read about car, carbuying , and selling related articles</p>
         <div className='mt-4'>
         <input type="text" placeholder="your email" className="input input-bordered input-accent w-full max-w-xs" />
          <button className='btn btn-success ml-2'>Subscribe</button>
         </div>
      </div>
      
     


    
        {/* <button className='btn btn-primary block md:hidden ml-32'>Subscribe</button>    */}
              

   <Footer/>

        </div>

    );
};

export default Home;
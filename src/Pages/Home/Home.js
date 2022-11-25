import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import bannerCar from '../../images/bannerCar.png'

const Home = () => {
    return (
        <div>
        <div className=' '>
        <div>
            <div className='flex justify-center'>
               <div>
                <img src={bannerCar} alt="" className='w-9/12 p-8' srcset="" />
               </div>
               <div className='md:py-64 md:mr-0  text-black px-56'>
               <h1 className='md:text-6xl text-black'>Get the best second hand car from us</h1> <br />
               <p className='md:text-3xl'>QualityCheck</p>
               <p className='md:text-3xl'>Paperwork</p>
               <p className='md:text-3xl'>24/7 hour service</p>
               </div>
            </div>
        </div>

        </div>
           
     <div className='mt-11 mb-10 text-center'>
           <Categories/>

     </div>


        </div>
    );
};

export default Home;
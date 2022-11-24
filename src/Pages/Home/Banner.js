import React from 'react';

import {FaHandPointRight} from 'react-icons/fa'

const Banner = () => {
    return (
        <div>
            <div className='bg-[url("https://images.unsplash.com/photo-1610411605947-0a96f654d829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80")] h-screen  bg-no-repeat '>
               <div className='md:py-64 py-0 text-white px-56'>
               <h1 className='md:text-6xl text-white'>Get the best second hand car from us</h1> <br />
               <p className='md:text-3xl'>QualityCheck</p>
               <p className='md:text-3xl'>Paperwork</p>
               <p className='md:text-3xl'>24/7 hour service</p>
               </div>
            </div>
        </div>
    );
};

export default Banner;
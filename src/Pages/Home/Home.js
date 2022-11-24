import React from 'react';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div>
        <div className='ml-28 '>
           <Banner/>

        </div>
           
     <div className='mt-11 text-center'>
           <Categories/>

     </div>


        </div>
    );
};

export default Home;
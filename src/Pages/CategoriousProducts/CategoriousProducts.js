

import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import Modal from '../../Components/Modal/Modal';

const CategoriousProducts = () => {
    const [boking , setBoking] = useState(null) 
    const data = useLoaderData()
    console.log(data);

    const categoryName = useParams()
    console.log(categoryName.categoryName);



    return (
        <div className='bg-[#0D0D0D]  text-white'>
            <h1 className='text-center text-3xl'>{categoryName.categoryName}s</h1>
             <div className='grid  md:grid-cols-3 md:p-24 gap-3 mt-7'> 
            {
                data?.map(product =>  <Card key={product._id}  setBoking={setBoking} product={product}></Card>)
            }
             {boking && <Modal setBoking={setBoking} boking={boking}/>}  
        </div>

        <div className='md:mt-[20%] mt-[81%]'>
            <Footer></Footer>
        </div>
        </div>
       
    );
};

export default CategoriousProducts;
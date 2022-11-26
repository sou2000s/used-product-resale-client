

import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal';

const CategoriousProducts = () => {
    const [boking , setBoking] = useState(null) 
    const data = useLoaderData()
    console.log(data);

    const categoryName = useParams()
    console.log(categoryName.categoryName);



    return (
        <div>
            <h1 className='text-center text-3xl'>{categoryName.categoryName}s</h1>
             <div className='grid  md:grid-cols-4 gap-3 mt-7'> 
            {
                data?.map(product =>  <Card key={product._id}  setBoking={setBoking} product={product}></Card>)
            }
             {boking && <Modal setBoking={setBoking} boking={boking}/>}  
        </div>
        </div>
       
    );
};

export default CategoriousProducts;
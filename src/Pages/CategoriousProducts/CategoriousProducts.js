

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal';

const CategoriousProducts = () => {
    const [boking , setBoking] = useState(null) 
    const data = useLoaderData()
    console.log(data);



    return (
        <div className='grid  md:grid-cols-4 gap-3 mt-5'> 
            {
                data?.map(product =>  <Card key={product._id}  setBoking={setBoking} product={product}></Card>)
            }
             {boking && <Modal setBoking={setBoking} boking={boking}/>}  
        </div>
    );
};

export default CategoriousProducts;
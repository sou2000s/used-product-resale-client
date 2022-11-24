

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal';

const CategoriousProducts = () => {
    const [boking , setBoking] = useState(null) 
    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            {
                data?.map(product =>  <Card key={product._id}  setBoking={setBoking} product={product}></Card>)
            }
             {boking && <Modal setBoking={setBoking} boking={boking}/>}  
        </div>
    );
};

export default CategoriousProducts;
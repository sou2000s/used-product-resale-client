import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoriousProducts = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            {
                data?.map(product => <li>{product.name}</li>)
            }
        </div>
    );
};

export default CategoriousProducts;
import { useQuery } from '@tanstack/react-query';

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Myproducts = () => {
    const {user} = useContext(AuthContext)
   const   [myProducts , setMyproducts] = useState([])
   
   
   useEffect(()=>{
    fetch(`http://localhost:5000/sellers/products?email=${user?.email}`)
    .then(res =>  res.json())
    .then(data => {
        console.log(data);
        setMyproducts(data)
    })
   },[user?.email])
    return (
        <div>
            {myProducts?.length}
        </div>
    );
};

export default Myproducts;
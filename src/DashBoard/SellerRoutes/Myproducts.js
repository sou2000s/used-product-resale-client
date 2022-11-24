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


   const handleDelte = ()=>{

   }
    return (
        <div className="overflow-x-auto mt-9">
          <h1 className='text-3xl'>My products</h1> 

        <table className="table w-full mt-5">
      
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>type</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
         
            {
                myProducts?.map((product , i) => <tr key={i}>
              <th>{i + 1}</th>
              <td>{product.productName}</td>
              
              <td>
              <button className='btn btn-sm btn-error' onClick={()=>handleDelte(product._id)}>Delete</button>
              
              </td>
             
             
            </tr>)
            }
       
            
          </tbody>
        </table>
        </div>
    );
};

export default Myproducts;
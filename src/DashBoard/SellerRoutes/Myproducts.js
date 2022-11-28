
import { useQuery } from '@tanstack/react-query';

import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const Myproducts = () => {
    const {user} = useContext(AuthContext)
//    const   [myProducts , setMyproducts] = useState([])
   
   const {data:myProducts , refetch} = useQuery({
    queryKey: ['products' ],
    queryFn: async()=>{
        const res = await fetch(`https://server-site-used-products.vercel.app/sellers/products?email=${user?.email}`)
        const data = await res.json()
        return data
    }
   })
   
   
//    useEffect(()=>{
//     fetch(`https://server-site-used-products.vercel.app/sellers/products?email=${user?.email}`)
//     .then(res =>  res.json())
//     .then(data => {
//         console.log(data);
//         setMyproducts(data)
//     })
//    },[user?.email])


// https://server-site-used-products.vercel.app/


const handleAddtoAd = product =>{
  const addvertiseProduct = {
    productId: product._id,
    productName: product.productName,
    condition: product.condition,
    price: product.resaleingPrice,
    image: product.image,
    categoryName: product.categoryName


  }

  console.log(product);
  fetch('https://server-site-used-products.vercel.app/advertise' , {
    method: "POST",
    headers: {
      "content-type": 'application/json'
    },
    body: JSON.stringify(addvertiseProduct)
  })
  .then(res => res.json())
  .then(data => console.log(data))
}


  //  const handleStatus = id =>{
  //   fetch(`https://server-site-used-products.vercel.app/sellers/products/update/${id}` , {
  //       method: 'PUT'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //       console.log(data);
  //      refetch()
  //   })

  //  }



   const handleDelte = (id)=>{

     fetch(`https://server-site-used-products.vercel.app/sellers/product/delete/${id}` , {
        method: "DELETE"
     })
     .then(res => res.json())
     .then(data =>{ 
      if(data.deletedCount){
        toast.success('product deleted')
      }
      refetch()
    })
   }
    return (
        <div className="overflow-x-auto mt-9">
          <h1 className='text-3xl'>My products</h1> 

        <table className="table w-full mt-5">
      
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>categoryName</th>
              <th>status</th>
            
              <th>Delete</th>
              <th>Boost</th>
              
              
            </tr>
          </thead>
          <tbody>
         
            {
                myProducts?.map((product , i) => <tr key={i}>
              <th>{i + 1}</th>
              <td>{product.productName}</td>
              <td>{product.categoryName}</td>
              
              <td>
               {product.paid ? <p>sold</p> : <p>available</p>}
              </td>

              <td>
               <button className='btn btn-sm btn-error' onClick={()=>handleDelte(product._id)}>Delete</button>
              
              </td>

              <td>{!product.paid && <button className='btn btn-info'  onClick={()=>handleAddtoAd(product)}>Advertise your product</button>}</td>
             
             
            </tr>)
            }
       
            
          </tbody>
        </table>
        </div>
    );
};

export default Myproducts;
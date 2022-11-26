
import { useQuery } from '@tanstack/react-query';

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Myproducts = () => {
    const {user} = useContext(AuthContext)
//    const   [myProducts , setMyproducts] = useState([])
   
   const {data:myProducts , refetch} = useQuery({
    queryKey: ['products' ],
    queryFn: async()=>{
        const res = await fetch(`http://localhost:5000/sellers/products?email=${user?.email}`)
        const data = await res.json()
        return data
    }
   })
   
   
//    useEffect(()=>{
//     fetch(`http://localhost:5000/sellers/products?email=${user?.email}`)
//     .then(res =>  res.json())
//     .then(data => {
//         console.log(data);
//         setMyproducts(data)
//     })
//    },[user?.email])


// http://localhost:5000/


const handleAddtoAd = product =>{
  const addvertiseProduct = {
    productId: product._id
  }

  console.log(product);
  fetch('http://localhost:5000/advertise' , {
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
  //   fetch(`http://localhost:5000/sellers/products/update/${id}` , {
  //       method: 'PUT'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //       console.log(data);
  //      refetch()
  //   })

  //  }



   const handleDelte = (id)=>{

     fetch(`http://localhost:5000/sellers/product/delete/${id}` , {
        method: "DELETE"
     })
     .then(res => res.json())
     .then(data =>{ console.log(data)
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

              <td>{!product.paid && <button onClick={()=>handleAddtoAd(product)}>Advertise</button>}</td>
             
             
            </tr>)
            }
       
            
          </tbody>
        </table>
        </div>
    );
};

export default Myproducts;
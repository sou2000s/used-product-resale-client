import { useQuery } from '@tanstack/react-query';

import React from 'react';
import toast from 'react-hot-toast';


const AllSeller = () => {
    
    const {data:allSellers , refetch} = useQuery({
         queryKey: ['allSellers'],
         queryFn: async()=>{
            const res = await fetch("https://server-site-used-products.vercel.app/users/allSellers",{
               headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
               }
            })
            const data = await res.json()
            return data;
         }
    })


 const handleDelte = seller =>{
   console.log(seller);
  fetch(`https://server-site-used-products.vercel.app/users/allSellers/${seller._id}` , {
    method: 'DELETE'        
  })
  .then(res => res.json())
  .then(data => {
    if(data.deletedCount){
        // toast.success('seller deleted successfully')
         fetch(`https://server-site-used-products.vercel.app/sellerProducts/delete?email=${seller.email}`,{
          method: "DELETE"
         })
         .then(res => res.json())
         .then(data =>{
          console.log(data)
          toast.success('seller deleted successfully')
         })
       
        refetch()
    }
  })

 }


 const handleVerify = (id) =>{
  fetch(`https://server-site-used-products.vercel.app/users/allsellers/verified/${id}`,{
    method: "PUT"
  })
  .then(res => res.json())
  .then(data => {
    if(data.modifiedCount){
        refetch()
    }
  })

 }
  




    return (
        <div className='mt-5'>
            <h1 className='mb-5 text-3xl ml-3'>All sellers</h1>

            <div className="overflow-x-auto">
  <table className="table w-full">

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
        allSellers?.map((seller , i) => <tr key={i}>
        <th>{i + 1}</th>
        <td>{seller.name}</td>
        <td>{seller.role}</td>
        <td>{seller.email}</td>
        <td>
        <button className='btn btn-sm btn-success' onClick={()=>handleVerify(seller._id)}>{seller.status==="verified"  ?' verified' : 'verifyseller'}</button>
        <button className='btn btn-sm btn-error' onClick={()=>handleDelte(seller)}>Delete</button>
        
        </td>
       
       
      </tr>)
      }
 
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSeller;
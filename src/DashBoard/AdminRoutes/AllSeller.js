import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    
    const {data:allSellers , refetch} = useQuery({
         queryKey: ['allSellers'],
         queryFn: async()=>{
            const res = await fetch("http://localhost:5000/users/allSellers")
            const data = await res.json()
            return data;
         }
    })


 const handleDelte = id =>{
   
  fetch(`http://localhost:5000/users/allSellers/${id}` , {
    method: 'DELETE'        
  })
  .then(res => res.json())
  .then(data => {
    if(data.deletedCount){
        toast.success('seller deleted successfully')
        refetch()
    }
  })

 }

  




    return (
        <div>
            <h1>All sellers</h1>

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
        <button className='btn btn-sm btn-success'>verify</button>
        <button className='btn btn-sm btn-error' onClick={()=>handleDelte(seller._id)}>Delete</button>
        
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
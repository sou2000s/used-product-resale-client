import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyrs = () => {

    const {data:allBuyrs , refetch} = useQuery({
        queryKey: ['allBuyrs'],
        queryFn: async()=>{
           const res = await fetch("http://localhost:5000/users/allBuyrs" , {
            headers:{
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
           })
           const data = await res.json()
           return data;
        }
   })

   const handleDelte = (id)=>{
   
     fetch(`http://localhost:5000/users/allBuyrs/${id}` , {
        method:"DELETE"
     })
     .then(res => res.json())
     .then(data => {console.log(data)
      refetch()
    })
   }

    return (
        <div>
           <div className='mt-5'>
            <h1 className='mb-5 text-3xl ml-3'>All buyrs</h1>

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
        allBuyrs?.map((seller , i) => <tr key={i}>
        <th>{i + 1}</th>
        <td>{seller.name}</td>
        <td>{seller.role}</td>
        <td>{seller.email}</td>
        <td>
        <button className='btn btn-sm btn-error' onClick={()=>handleDelte(seller._id)}>Delete</button>
        
        </td>
       
       
      </tr>)
      }
 
      
    </tbody>
  </table>
  </div>
        </div>
        </div>
    );
};

export default AllBuyrs;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedProducts = () => {
  
    const {data:reportedProducts , refetch } = useQuery({
        queryKey: ['reportedproducts'],
        queryFn: async()=>{
            const res = await fetch('https://server-site-used-products.vercel.app/reported-item-admin')
            const data = await res.json()
            return data;
        }
    })

 const handleReportedProductDelete = id =>{
    console.log(id);

    fetch(`https://server-site-used-products.vercel.app/reportProduct-delete/${id}` , {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        if(data.acknowledged){
            toast.success('deleted')
            refetch()

        }
    })
 }


    return (
        <div className='mt-9'>
            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>

      {reportedProducts?.map((pd , i) =>{
        return <tr>
        <th>{i + 1}</th>
        <td>{pd.productName}</td>
         <td>
            {!pd.deleted && <button className='btn btn-sm btn-error ' onClick={()=>handleReportedProductDelete(pd.productId)}>Delete</button>}
         </td> 
      </tr>
      })}
       
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReportedProducts;
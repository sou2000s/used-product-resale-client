import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrders = () => {
const {user} = useContext(AuthContext)
const {data:myOrders , refetch} = useQuery({
    queryKey:['orders'],
    queryFn: async()=>{
        const res = await fetch(`http://localhost:5000/users/orders?email=${user?.email}`)
        const data = await res.json()
        return data;
    }
})

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {
                myOrders?.map((product , i) => <tr key={i}>
              <th>{i + 1}</th>
              <td><div className="avatar">
  <div className="w-24 rounded">
    <img src={product.productImage} alt='' /> 
  </div>
</div></td>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              
              

              <td>
              <button>Pay now</button>
              
              </td>
             
             
            </tr>)
            }
     
       
        
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;
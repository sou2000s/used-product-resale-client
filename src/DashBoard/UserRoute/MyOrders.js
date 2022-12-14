import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrders = () => {
const {user} = useContext(AuthContext)
// if(!user){
//   return
// }
const {data:myOrders , refetch} = useQuery({
    queryKey:['orders'],
    queryFn: async()=>{
        const res = await fetch(`https://server-site-used-products.vercel.app/users/orders?email=${user?.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = await res.json()
        return data;
    }
})

refetch()
  // const payNow = product =>{
  //   console.log(product);
  // }


    return (
        <div className='mt-8'>
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
               {
                 product.paid  ? <p>paid</p> :  <Link to={`/payment/${product._id}`}>Pay now</Link>            
               }
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
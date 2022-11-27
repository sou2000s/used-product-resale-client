import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom';


const stripePromise = loadStripe('pk_test_51M5sVrSH7xFCRHqM5aX9bzGVNU84eEqd8S1LQZncPaX6ks7Vsw1kZJnuz39Lb6lZsRjraY6xnvij9rFHfOn8zpCc00y7uEtVT7');
// console.log(stripePromise);


const Payment = () => {
    const data = useLoaderData()
    console.log(data);
   
    return (
        <div className=' border-2 w-1/2 ml-96 border-green-600 rounded-lg mt-20'>
               <div className='ml-96'>
               <h1> Product Name:{data.productName}</h1>        
                <h1> Product price:{data.productPrice}inr</h1>
               </div>       
          
                <div className='w-96 my-12 ml-56 '>
          <Elements stripe={stripePromise}>
      <CheckOutFrom 
       booking={data}
       />
    </Elements>
          </div>

        </div>
    );
};

export default Payment;
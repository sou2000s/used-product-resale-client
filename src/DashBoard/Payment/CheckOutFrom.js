import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutFrom = ({booking}) => {
    const [carderror , setCardError] = useState('')
  const [success , setSuccess ] = useState('')
  const [processing , setProcessing ] = useState(false)
  const [transactionId , setTransactionId ] = useState('')
   const [clientSecret  , setClientSecret] = useState('') 
    console.log(booking);
    const {productPrice ,buyrName , buyrEmail , produtId } = booking
    const priceIntoNumber = parseInt(productPrice)
     
    const stripe = useStripe()

    const elemets = useElements()


  useEffect(()=>{
    fetch('http://localhost:5000/create-payment-intent',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({priceIntoNumber})
    })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret))
  } , [priceIntoNumber])

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(!stripe || !elemets){
        return;
    }
  const card = elemets.getElement(CardElement);

  if(card == null){
    return
  }

  const {error , paymentMethod} = await stripe.createPaymentMethod({
    type:'card',
    card
  })

  if(error){
    setCardError(error.message)
  }
  else{
    setCardError('')
  }
  setSuccess('')
  setProcessing(true)

  const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(
    clientSecret,
    {
        payment_method:{
            card: card,
            billing_details:{
                name: buyrName,
                email:buyrEmail
            }
        }
    }
  );

  if(confirmError){
    setCardError(confirmError.message)
    return
  }
  if(paymentIntent.status === 'succeeded'){

    const payment = {
        price:priceIntoNumber,
        transactionId: paymentIntent.id,
        email: buyrEmail,
        bookingId: produtId
    }

   fetch('http://localhost:5000/payments',{
    method: 'POST',
    headers:{
        'content-type': 'application/json',
    },
    body:JSON.stringify(payment)
    
   })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    if(data.insertedId){
        setSuccess("Congrats your payment completed")
        setTransactionId(paymentIntent.id)
    }
   })

  }
  setProcessing(false)
  console.log("payment intent" ,paymentIntent);

  }




    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-sm mt-5 btn-primary' 
      type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    <p className='text-red-500'>{carderror}</p>
         {
          success && <div>
            <p className='text-green-500'> {success}</p>
            <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
          </div>
         }
        </div>
    );
};

export default CheckOutFrom;
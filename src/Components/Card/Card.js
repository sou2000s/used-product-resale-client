
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Card = ({product ,setBoking}) => {
  const [checkverifyEmail , setcheckverifyEmail] = useState({}) 
  
  const {image, name  , originalPrice , resaleingPrice , sellerName,mobileNumber,
    location,condition , description , postTime  ,sellerEmail}  = product;
  

    useEffect(()=>{
      fetch(`http://localhost:5000/sellers?email=${sellerEmail}`)
      .then(res => res.json())
      .then(data=> {
        
           setcheckverifyEmail(data)
      })
    } , [sellerEmail])


console.log(checkverifyEmail);
    return (
        <div className="  w-96 ">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
           <p>{sellerEmail}</p>
          <p>Original Price: {originalPrice}$</p>
          <p>Reselling Price: {resaleingPrice}$</p>
          <p>SellerName: {sellerName}</p>{checkverifyEmail.verified === "verified" && <p>verified seller</p>}
          <p>Seller Number: {mobileNumber}</p>
          <p>Location for pickup: {location}</p>
          <p>Condition: {condition}</p>
          <p>Description: {description}</p>
          <p>Posted date: {postTime?.slice(0,10)}</p>
          <p>Posted time: {postTime?.slice(12,19)}</p>
          <div className="card-actions justify-end">
          <label onClick={()=> setBoking(product)} htmlFor="my-modal" className="btn btn-warning" >Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default Card;

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Card = ({product ,setBoking}) => {
  const [checkverifyEmail , setcheckverifyEmail] = useState({}) 
  
  const {image, productName, originalPrice , resaleingPrice , sellerName,mobileNumber,
    location,condition , description , postTime  ,sellerEmail , paid , postDate}  = product;
  

    useEffect(()=>{
      fetch(`http://localhost:5000/sellers?email=${sellerEmail}`)
      .then(res => res.json())
      .then(data=> {
        
           setcheckverifyEmail(data)
      })
    } , [sellerEmail])

console.log(product);
console.log(checkverifyEmail);
    return (
        <div className="   rounded-lg border ">
        <figure><img src={image} className="w-full" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          {checkverifyEmail.status === "verified" &&  <p>Upload by verified seller</p>}
           <p>{sellerEmail}</p>
          <p>Original Price: {originalPrice}Rs/only</p>
          <p>Reselling Price: {resaleingPrice}Rs/only</p>
          <div className='flex'>
            <p>Seller Name:{sellerName}</p>
            {checkverifyEmail.status === "verified" && <img src="https://img.icons8.com/fluency/48/null/instagram-check-mark.png" className='md:w-8  mr-[183px]' alt=''/> }
          </div>
          <p>Seller Number: {mobileNumber}</p>
          <p>Location for pickup: {location}</p>
          <p>Condition: {condition}</p>
          <p>Description: {description}</p>
          <p>Posted date: {postDate?.slice(0,10)}</p>
          <p>Posted time: {postTime}</p>
          {paid && <p>sold</p>}
          <div className="card-actions justify-end">
          <label onClick={()=> setBoking(product)} htmlFor="my-modal"   className={`${paid ? "btn btn-error" :" btn btn-warning"}`} >{paid ? "soldout" : "book now"}</label>
          </div>
        </div>
      </div>
    );
};

export default Card;
import React from 'react';

const Card = ({product ,setBoking}) => {
  const {image, name  , originalPrice , resaleingPrice , sellerName,mobileNumber,
    location,condition , description , postTime  }  = product
    return (
        <div className="  w-96 ">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Original Price: {originalPrice}$</p>
          <p>Reselling Price: {resaleingPrice}$</p>
          <p>SellerName: {sellerName}</p>
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
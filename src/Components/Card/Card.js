import React from 'react';

const Card = ({product ,setBoking}) => {
  const {image, name  , originalPrice , resellingPrice , seller  }  = product
    return (
        <div className="  w-96 ">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Original Price: {originalPrice}$</p>
          <p>Reselling Price: {resellingPrice}$</p>
          <div className="card-actions justify-end">
          <label onClick={()=> setBoking(product)} htmlFor="my-modal" className="btn btn-warning" >Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default Card;
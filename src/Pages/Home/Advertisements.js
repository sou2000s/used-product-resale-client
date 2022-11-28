import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import  '../../../src/App.css';


import { Link } from 'react-router-dom';

const Advertisements = ({product}) => {
    console.log(product);
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
    
    
    <div className=' w-[50%]  mt-10 ml-[25%]'>
      
      
     
       
       
          <Slider  {...settings}>
          {product.map(pd => !pd.paid && <div className='w-96'>
            <img src={pd.image} className='w-52' alt="" />
            <h3 className='text-xl'>Name: <span className='text-sm'>{pd.productName}</span></h3>
            <h3 className='text-xl'>Price:  <span className='text-sm'>{pd.price}rs</span> </h3>
            <Link className='btn btn-sm btn-info' to={`/category/${pd.categoryName}`}>Knoe more</Link>
          </div>)}
         
          
        </Slider>


         </div>
    
    
    
    )
}

export default Advertisements;
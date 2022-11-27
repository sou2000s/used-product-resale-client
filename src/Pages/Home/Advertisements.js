import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import  '../../../src/App.css';
import './advertise.css'
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
    
    
    <div className='  '>
      <Slider {...settings}>
      
        {/* {product.map(pd =>{
            return !pd.paid && <div className="card  w-96 bg-slate-600  ">
  <figure><img src={pd.image} alt={pd.name} className='w-full h-56' /></figure>
  <div className="card-body">
    <h2 className="card-title text-black">Name:{pd.productName}</h2>
    <p className='text-black'>Price:{pd.price}</p>
  
  </div>
</div>
          })} */}
       
          {product.map((item) => {
            return !item.paid && <div className="card">
            <div className="card-top">
              <img
                src={
                 item.image
                }
                alt={item.productName}
                
              />
              <h1>{item.productName}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
          })}
    
          
    
          
         
        </Slider>
    </div>
    
    
    
    )
}

export default Advertisements;
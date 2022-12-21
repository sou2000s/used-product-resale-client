import {  useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const {data:categories } = useQuery({
     queryKey:['categories'],
     queryFn: async () =>{
        const res = await fetch('https://server-site-used-products.vercel.app/categories')
        const data = await res.json()
        return data;
     }

  })




    return (
        <div className=''>
            <h1 className='text-4xl text-white'>Select a Category</h1>
             <div className='md:flex justify-center'>
             {
                categories?.map((category , i) => <div className='p-5 mt-6' key={i}>
             
                <Link className='mt-6  bg-[#120f0a] ' to={`/category/${category.categoryName}`} key={category._id}>

                    <img src={category.image} className="w-40 h-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" alt={category.categoryName} />
                    <p>{category.categoryName}</p>  
                </Link>
              
                </div>)
             }
             </div>
        </div>
    );
};

export default Categories;
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
             
                <Link className='mt-6  bg-[#120f0a] rounded-xl p-2 md:p-5 ' to={`/category/${category.categoryName}`} key={category._id}>{category.categoryName}</Link>
              
                </div>)
             }
             </div>
        </div>
    );
};

export default Categories;
import {  useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const {data:categories } = useQuery({
     queryKey:['categories'],
     queryFn: async () =>{
        const res = await fetch('http://localhost:5000/categories')
        const data = await res.json()
        return data;
     }

  })




    return (
        <div>
            <h1 className='text-4xl'>Select a Category</h1>
             {
                categories?.map((category , i) => <div className='flex  justify-center'>
                <p className='mt-6 text-xl bg-[#EDBF69] rounded-xl p-5 '><Link className='' to={`/category/${category.categoryName}`} key={category._id}>{category.categoryName}</Link></p>
                </div>)
             }
        </div>
    );
};

export default Categories;
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
            <h1>Select a Category</h1>
             {
                categories?.map((category , i) => <Link className='ml-11' to={`/category/${category.categoryName}`} key={category._id}>{category.categoryName}</Link>)
             }
        </div>
    );
};

export default Categories;
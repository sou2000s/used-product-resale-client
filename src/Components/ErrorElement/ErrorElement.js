import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../images/5203299.jpg'
const ErrorElement = () => {
    const error = useRouteError()
    return (
        <div className=' text-center'>
            
               <img src={errorImage} className='w-96 ml-[40%]' alt="" />
            <p className='text-red-800'>{error.statusText || error.message}</p>
            <Link to='/' className='btn btn-sm btn-ghost'>Back to home</Link>
        </div>
    );
};

export default ErrorElement;
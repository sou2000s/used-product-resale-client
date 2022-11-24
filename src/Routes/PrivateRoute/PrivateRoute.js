import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(!user){
        return  <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;
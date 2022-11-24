import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useUserRole } from '../../Hooks/useUserRole';

const AdminRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    const [userRole , userRoleLoading] = useUserRole(user?.email)
    if(loading || userRoleLoading){
        return <div>loading......</div>
    }

    if(!user && userRole !== "admin"){
        return  <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default AdminRoute;
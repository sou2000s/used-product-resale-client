import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { useUserRole } from '../Hooks/useUserRole';

const DashBoardNav = () => {
   const   {user} = useContext(AuthContext)
   const [userRole] = useUserRole(user?.email)
    console.log(userRole); 
   return (
        <div>
            
            {
                user?.email && userRole==="User" && <Link>My orders</Link>
            }
            
         {
            userRole === "Seller Accout" && <>
                <Link>Add products</Link>
                <Link>My products</Link>
            </>
         }
         {
            userRole === "admin" && <>
                <Link to="allsellers">All sellers</Link>
                <Link to="allbuyrs">All buyrs</Link>
            </>
         }

        </div>
    );
};

export default DashBoardNav;
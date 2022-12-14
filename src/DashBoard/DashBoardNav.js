import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { useUserRole } from '../Hooks/useUserRole';
import Navbar from "../Components/Navbar/Navbar"
const DashBoardNav = () => {
   const   {user} = useContext(AuthContext)
   const [userRole] = useUserRole(user?.email)
    console.log(userRole); 
   return (

       <div>
       <Navbar></Navbar>
         <div className='text-center mt-7'>
            
            {
                user?.email && userRole==="User" && <>
                <Link className='bg-[#EDBF69] p-3 rounded-xl border ' to='myOrders'>My orders</Link>
                
                </>
            }
            
         {
            userRole === "Seller Accout" && <>
                <Link className='ml-4 bg-[#EDBF69] p-3 rounded-xl border' to="addProducts">Add products</Link>
                <Link className='ml-4 bg-[#EDBF69] p-3 rounded-xl border' to="myProducts">My products</Link>
            </>
         }
         {
            userRole === "admin" && <>
                <div  className='flex flex-wrap'>
                <Link  className='ml-4 bg-[#EDBF69] p-3 rounded-xl border' to="allsellers">All sellers</Link>
                <Link  className='ml-4 bg-[#EDBF69] p-3 rounded-xl border' to="allbuyrs">All buyers</Link>
                <Link  className='ml-4 bg-[#EDBF69] p-3 rounded-xl border' to="reportedProducts">Reported Product</Link>
                </div>
            </>
         }

        </div>
       </div>
    );
};

export default DashBoardNav;
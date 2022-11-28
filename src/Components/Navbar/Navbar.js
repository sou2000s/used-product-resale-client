import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useUserRole } from '../../Hooks/useUserRole';
import AiOutlineClose from 'react-icons/ai'
import GiHamburgerMenu from 'react-icons/gi'
const Navbar = () => {
     const {logout , user} = useContext(AuthContext)
  
     const handleLogout = ()=>{
        logout()
        .then(()=>{})
        .catch(err => console.log(err.message))

     }


     const menuItems = <>
     <li> <Link to='/'>Home</Link></li>
     
 
     {user?.uid ?  <>
        <li><Link className='' onClick={handleLogout}>Logout</Link></li>
        <li>  <Link className='' to='/dashboard'>DashBoard</Link>  </li> 
 
     </>  :
       
       <>
        <li><Link to="/login">Login </Link></li> 
     <li><Link to="/register">Register</Link></li>
        </>   }
 
        <li> <Link to='/blogs'>Blogs</Link></li>
  </>

    return (
        <div className=' bg-[#0D0D0D]'>
            {/* <ul className='flex  '>
            <Link to='/'>Home</Link>
            
            {
                user?.uid ? <>
                <Link className='ml-5' onClick={handleLogout}>Logout</Link>
                <Link className='ml-5' to='/dashboard'>DashBoard</Link>
                </>
                :
               <>
               <Link className="ml-5"  to='/login'>Login</Link>
            <Link    className="ml-5" to='/register'>Register</Link>
               </>
            }

            <Link className=''>Cardekho</Link>
            </ul> */}

            <div className="navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0D0D0D] rounded-box w-52"
          >
              {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Cardekho</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
         {menuItems}
        </ul>
      </div>
     
    </div>

         


         
        </div>
    );
};

export default Navbar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {
     const {logout , user} = useContext(AuthContext)
     const handleLogout = ()=>{
        logout()
        .then(()=>{})
        .catch(err => console.log(err.message))

     }

     

    return (
        <div className='text-center p-6 bg-[#EDBF69]'>
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
        </div>
    );
};

export default Navbar;
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
        <div>
            <Link to='/'>Home</Link>
            
            {
                user?.uid ? <>
                <Link onClick={handleLogout}>Logout</Link>
                <Link to='/dashboard'>DashBoard</Link>
                </>
                :
               <>
               <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
               </>
            }
        </div>
    );
};

export default Navbar;
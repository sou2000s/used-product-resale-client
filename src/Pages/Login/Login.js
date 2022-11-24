import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
   const   {login} = useContext(AuthContext)
   const location = useLocation()
    const from = location.state?.from?.pathname || "/" 
 
    const navigate = useNavigate()


     const handleLogin = (e) =>{
        e.preventDefault()
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email , password)
        .then(res =>{
            navigate(from, { replace: true })
        })
        .catch(err => console.log(err.message))
     }
     
    return (
        <div>
            <form onSubmit={handleLogin}>
             
             <label htmlFor="">email</label>
             <input type="email" name='email'/>
             <br />
            
             <br />
             <label htmlFor="">password</label>
       
             <input type="password" name='password'/>
             <br />
             
             <button type='submit' className='btn btn-accent'>Login</button>
            </form>
        </div>
    );
};

export default Login;
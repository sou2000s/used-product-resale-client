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
         fetch(`https://server-site-used-products.vercel.app/jwt?email=${res.user.email}`)
        .then(res => res.json())
        .then(data=> {
          if(data.accessToken){
            localStorage.setItem('token' , data.accessToken)
          }
        })
        })
        .catch(err => console.log(err.message))
     }
     
    return (
        <div className='text-center'>
            <form onSubmit={handleLogin}>
             
            
             <label htmlFor="">email</label>
          
             <input placeholder="email" type="email" name='email'  className="input ml-8 mt-6 input-bordered input-success w-full max-w-xs" />             <br />
        
           
              
             

             <br />
             <label htmlFor="">password</label>
       
            
             <input placeholder="password" type="password" name='password'  className="input ml-4 mt-6 input-bordered input-success w-full max-w-xs" />
             <br />
             
             <button type='submit' className='btn mt-5 btn-accent'>Login</button>
            </form>
        </div>
    );
};

export default Login;
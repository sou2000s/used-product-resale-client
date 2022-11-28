import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
   const   {login , googleAuthentication} = useContext(AuthContext)
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


     const handleGoogleLogin = () =>{
      googleAuthentication()
      .then(res =>
      fetch(`https://server-site-used-products.vercel.app/jwt?email=${res.user.email}`)
      .then(res => res.json())
      .then(data=> {
        if(data.accessToken){
          localStorage.setItem('token' , data.accessToken)
        navigate(from, { replace: true }) 
          
        }
      }))
      .catch(error => console.log(error.message))
      
    }

     
    return (
        <div className='text-center'>
            <form onSubmit={handleLogin}>
             
            
             <label htmlFor="">email</label>
          
             <input placeholder="email" type="email" name='email'  className="input md:ml-6 ml-2 md:mt-6 input-bordered input-success w-full max-w-xs" />             <br />
        
           
              
             

             <br />
             <label htmlFor="">password</label>
       
            
             <input placeholder="password" type="password" name='password'  className="input  ml-1 input-bordered input-success w-full max-w-xs" />
             <br />
             
             <button type='submit' className='btn mt-5 btn-accent'>Login</button><br />
             <button className='btn btn-success  mt-5' onClick={handleGoogleLogin}>Sign in With google</button>
            </form>
        </div>
    );
};

export default Login;
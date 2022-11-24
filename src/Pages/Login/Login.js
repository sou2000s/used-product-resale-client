import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
   const   {login} = useContext(AuthContext)
     const handleLogin = (e) =>{
        e.preventDefault()
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email , password)
        .then(res =>{})
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
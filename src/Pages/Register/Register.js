import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { saveUser } from '../../Api/User';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useToken } from '../../Hooks/useToken';
import {FcGoogle} from 'react-icons/fc'


const Register = () => {
    const {createUser,setUserNameAndProfile , setUserProfile  , googleAuthentication} = useContext(AuthContext)

  const navigate = useNavigate()
//  const [userEmail , setUserEmail] = useState('')
//  const [token] = useToken(userEmail)

//  if(token){
//   navigate('/')
//  }

 const handleRegister = (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const role = e.target.role.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

     createUser(email , password)
     .then(res => {
       console.log(res.user);
      //  saveUser(res.user.email , name , role).then(data => {
      //    console.log(data)
      //    setUserEmail(res.user.email)
      //   })
      const user = {
        email:res.user.email,
        name:name,
        role: role,
        status: "unverified"
    }

      fetch('https://server-site-used-products.vercel.app/users' , {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)

     })
     .then(res => res.json())
     .then(data => {
      if(data.acknowledged){
        toast.success('welcome')
        fetch(`https://server-site-used-products.vercel.app/jwt?email=${res.user.email}`)
        .then(res => res.json())
        .then(data=> {
          if(data.accessToken){
            localStorage.setItem('token' , data.accessToken)
          }
        })
      }
     })
        
    

        handleName(name)
        navigate('/')
     })
     .catch(err => {
        console.log(err.message);
     })



 }
   
const handleName = (name) =>{
    const userName = {
        displayName : name,
    }
    setUserNameAndProfile(userName)
  .then(()=>{
    setUserProfile(userName)
  })
  .catch(err => console.log(err.message))
}


const handleGoogleSignIn = () =>{
    googleAuthentication()
    .then(res => {
      const user = {
        email:res.user.email,
        name:res.user.displayName,
        role: "User",
        status: "unverified"
    }

      fetch('https://server-site-used-products.vercel.app/users' , {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)

     })
     .then(res => res.json())
     .then(data => {
      if(data.acknowledged){
        toast.success('welcome')
        fetch(`https://server-site-used-products.vercel.app/jwt?email=${res.user.email}`)
        .then(res => res.json())
        .then(data=> {
          if(data.accessToken){
            localStorage.setItem('token' , data.accessToken)
          }
        })
      }
     })
     navigate('/')
    })
    .catch(error => console.log(error.message))
}



  return (
        <div className='text-center  '>
  <div className="mt-9 ">
  <form onSubmit={handleRegister} className=''>
             <label htmlFor="">Name</label>
             <input type="text" placeholder="Name" name='name' className="md:ml-8 input   input-bordered input-success w-full max-w-xs" />
             <br />
             <label htmlFor="">email</label>
          
             <input placeholder="email" type="email" name='email'  className="input md:ml-8 ml-2 mt-6 input-bordered input-success w-full max-w-xs" />             <br />
             <label htmlFor="">Type</label>
           
              
             <select name='role' className="select select-success md:ml-8 ml-2 w-full mt-6 max-w-xs">
  <option  selected>User</option>
  <option>Seller Accout</option>
  
</select>

             <br />
             <label htmlFor="" className=''>password</label>
       
            
             <input placeholder="password" type="password" name='password'  className="input md:mr-2 mt-6 input-bordered input-success w-full max-w-xs" />
             <br />
             <Link to='/login'>Allready have account? login</Link> <br />
             <button type='submit' className='btn btn-accent mt-6'>Register</button> <br />

             <button className='btn btn-success  mt-5' onClick={handleGoogleSignIn}>Sign up With google</button>
            </form>
  </div>
          
        
        </div>
    );
};

export default Register;
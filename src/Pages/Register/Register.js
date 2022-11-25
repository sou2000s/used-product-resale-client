import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../Api/User';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useToken } from '../../Hooks/useToken';

const Register = () => {
    const {createUser,setUserNameAndProfile , setUserProfile } = useContext(AuthContext)

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
        verified: "verify"
    }

      fetch('http://localhost:5000/users' , {
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
        fetch(`http://localhost:5000/jwt?email=${res.user.email}`)
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


  return (
        <div className='text-center '>
  <div className="mt-9 ">
  <form onSubmit={handleRegister}>
             <label htmlFor="">Name</label>
             <input type="text" placeholder="Name" name='name' className="ml-8 input   input-bordered input-success w-full max-w-xs" />
             <br />
             <label htmlFor="">email</label>
          
             <input placeholder="email" type="email" name='email'  className="input ml-8 mt-6 input-bordered input-success w-full max-w-xs" />             <br />
             <label htmlFor="">Type</label>
           
              
             <select name='role' className="select select-success ml-8 w-full mt-6 max-w-xs">
  <option  selected>User</option>
  <option>Seller Accout</option>
  
</select>

             <br />
             <label htmlFor="">password</label>
       
            
             <input placeholder="password" type="password" name='password'  className="input ml-4 mt-6 input-bordered input-success w-full max-w-xs" />
             <br />
             
             <button type='submit' className='btn btn-accent'>Register</button>
            </form>
  </div>
          
        
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../Api/User';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const {createUser,setUserNameAndProfile , setUserProfile } = useContext(AuthContext)

  const navigate = useNavigate()
 const handleRegister = (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const role = e.target.role.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

     createUser(email , password)
     .then(res => {
        console.log(res.user);
        saveUser(res.user.email , name , role).then(data => console.log(data))
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
              <input type="text" name='name'/>
             <br />
             <label htmlFor="">email</label>
             <input type="email" name='email'/>
             <br />
             <label htmlFor="">Type</label>
             <select name="role" id="">
                <option selected>User</option>
                <option>Seller Accout</option>
             </select>
             <br />
             <label htmlFor="">password</label>
       
             <input type="password" name='password'/>
             <br />
             
             <button type='submit' className='btn btn-accent'>Register</button>
            </form>
  </div>
          
        
        </div>
    );
};

export default Register;
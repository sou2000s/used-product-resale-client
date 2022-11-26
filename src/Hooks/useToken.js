import { useEffect, useState } from "react"

export const useToken = email => {
    const [token , setToken] = useState('')
  useEffect(()=>{ 
    if(email){
    fetch(`https://server-site-used-products.vercel.app/jwt?email=${email}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    if(data.accessToken){
       localStorage.setItem('token' , data.accessToken)     
       setToken(data.accessToken) 
    }
  })
    }
   },[email])
  return [token]
}


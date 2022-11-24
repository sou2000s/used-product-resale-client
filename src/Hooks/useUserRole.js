import { useEffect, useState } from "react"



 export const useUserRole = (email)=>{
    const [userRole , setuserRole] = useState('')
    useEffect(()=>{
        fetch(`http://localhost:5000/users/role/${email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setuserRole(data.role)
        })
    } , [email])
    return[userRole]
 }


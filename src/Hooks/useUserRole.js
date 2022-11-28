import { useEffect, useState } from "react"



 export const useUserRole = (email)=>{
    const [userRole , setuserRole] = useState('')
    const [userRoleLoading , setuserRoleLoading ] = useState(true)
    useEffect(()=>{
        fetch(`https://server-site-used-products.vercel.app/users/role/${email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setuserRole(data.role)
            setuserRoleLoading(false)
        })
    } , [email])
    return[userRole , userRoleLoading]
 }


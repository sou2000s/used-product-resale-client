// register a user and add to db




export const saveUser =  async (email , name , role) =>{
    const user = {
        email:email,
        name:name,
        role: role,
        status: "unverify"
    }
  
    const res = await fetch('https://server-site-used-products.vercel.app/users' , {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        
    })
    const data = res.json()
    return data;

}



// check only user or seller



// register a user and add to db

export const saveUser =  async (email , name , role) =>{
    const user = {
        email:email,
        name:name,
        role: role,
        verified: false
    }
  
    const res = await fetch('http://localhost:5000/users' , {
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



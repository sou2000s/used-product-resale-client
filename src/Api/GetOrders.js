

export const getOrders = async ( user,carPrice , carName , produtId) =>{
     const placedOrder = {
        buyrName: user.displayName,
        buyrEmail: user.email,
        productName: carName,
        productPrice: carPrice,
        produtId 

     }

     const res = await  fetch('http://localhost:5000/orders' , {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(placedOrder)
      })
      const data  = await res.json()
      return data
} 
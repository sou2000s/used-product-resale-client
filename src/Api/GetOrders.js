

export const getOrders = async ( user,carPrice , carName , _id , image , meetingLocation , buyrPhoneNumber) =>{
     const placedOrder = {
        buyrName: user.displayName,
        buyrEmail: user.email,
        productName: carName,
        productPrice: carPrice,
        productId : _id,
        productImage: image,
        meetingLocation,
        buyrPhoneNumber        

     }

     const res = await  fetch('https://server-site-used-products.vercel.app/orders' , {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(placedOrder)
      })
      const data  = await res.json()
      return data;
} 
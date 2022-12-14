import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useNavigation } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddProducts = () => {
  const [addProductLoading , setaddProductLoading ] = useState(false)

  const {user} = useContext(AuthContext)

 

 const navigate = useNavigate()
 
 const time = new Date()
 const timeInTwentyFourHourFormat =   time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  const handleAddProduct = (e) => {
    e.preventDefault();
    setaddProductLoading(true)
   const form = e.target;
   const productName = form.productName.value;
   const originalPrice = form.originalPrice.value;
   const location = form.location.value;
   const mobileNumber = form.mobileNumber.value;
   const yearOfBuying = form.yearOfBuying.value;
   const condition = form.condition.value
   const resaleingPrice = form.resaleingPrice.value;
   const description = form.description.value;
   const image = form.image.files[0];
   const category = form.category.value;
   


  const formData = new FormData()
  formData.append('image' , image)

   fetch(`https://api.imgbb.com/1/upload?key=61b1d964b41459f4e8c1a750dd7ac04c` , {
    method:'POST',
    body: formData
   }) 
   .then(res => res.json())
   .then(imageData => {
    // console.log(imageData.data.url);
   const product = {
      productName,
      originalPrice,
      resaleingPrice,
      yearOfBuying,
      image: imageData.data.url,
      sellerName : user?.displayName,
      sellerEmail: user?.email,
      mobileNumber,
      location,
      categoryName: category,
      condition,
      description,
      postTime: timeInTwentyFourHourFormat,
      postDate: new Date(),
      status: "available"
     
   } 
  


    fetch('https://server-site-used-products.vercel.app/products' , {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
    
      console.log(data);
      if(data.acknowledged){
        setaddProductLoading(false)
        form.reset()
        toast.success('propuct adeded')
        navigate('/dashboard/myProducts')

      }
    })



   })

  


  };

  //   name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), description, price, Year of purchase and other relevant information.

  return (
    <div className="text-center mt-8">
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
      <label htmlFor="">Product Name</label>
      <br />
        <input
          type="text"
          name="productName"
          placeholder="productName"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <label htmlFor="">OriginalPrice</label>
      <br />
        <input
          type="number"
          placeholder="originalPrice"
          name="originalPrice"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <label htmlFor="">ResaleingPrice</label>
      <br />
        <input
          type="number"
          placeholder="resaleingPrice"
          name="resaleingPrice"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <label htmlFor="" >Select Condition</label>
      <br />
        <select name="condition" className=" input-bordered input-warning w-full max-w-xs" id="">
            <option >excellent</option>
            <option >good</option>
            <option >fair</option>
        </select>
        <br />
        <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
                className="input input-bordered input-warning w-full max-w-xs pt-2"
              />
              <br />
              <label  htmlFor="">Select category</label>
              <br />
              <select name="category" className=" input-bordered input-warning w-full max-w-xs" id="">
                <option>luxury car</option>
                <option>electric car</option>
                <option>minibus</option>
              </select>
              <br />
              <label htmlFor="">MobileNumber</label>
              <br />
        <input
          type="number"
          placeholder="mobileNumber"
          name="mobileNumber"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <label htmlFor="">Location</label>
              <br />
        <input
          type="text"
          placeholder="location"
          name="location"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <label htmlFor="">YearOfBuying</label>
              <br />
        <input
          type="text"
          placeholder="DD/MM/YY"
          name="yearOfBuying"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <label htmlFor="">Description</label>
              <br />
        <textarea className="textarea textarea-warning" placeholder="description" name="description"></textarea>
        <br />
        {addProductLoading ? <div><Spinner/> </div> : 
        <input
          type="submit"
          value="Add product"
          className="btn btn-outline"
          name=""
          id=""
        />
        
        }
      </form>
    </div>
  );
};

export default AddProducts;

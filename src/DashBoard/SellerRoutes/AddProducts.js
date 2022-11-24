import React from "react";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
   const form = e.target;
   const productName = form.productName.value;
   const originalPrice = form.originalPrice.value;
   const location = form.location.value;
   const mobileNumber = form.mobileNumber.value;
   const yearOfBuying = form.yearOfBuying.value;
   const condition = form.condition.value
   const resaleingPrice = form.resaleingPrice.value;
   const description = form.description.value;
   const image = form.image.files[0]
   console.log(productName,location,mobileNumber,originalPrice,yearOfBuying,condition,resaleingPrice , description,image);

  const formData = new FormData()
  formData.append('image' , image)

   fetch(`https://api.imgbb.com/1/upload?key=61b1d964b41459f4e8c1a750dd7ac04c` , {
    method:'POST',
    body: formData
   }) 
   .then(res => res.json())
   .then(imageData => {
    console.log(imageData.data.url);
   })

  


  };

  //   name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), description, price, Year of purchase and other relevant information.

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="productName"
          placeholder="productName"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <input
          type="number"
          placeholder="originalPrice"
          name="originalPrice"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <input
          type="number"
          placeholder="resaleingPrice"
          name="resaleingPrice"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <select name="condition" id="">
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
              />
              <br />
        <input
          type="number"
          placeholder="mobileNumber"
          name="mobileNumber"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="location"
          name="location"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
     
        <input
          type="text"
          placeholder="DD/MM/YY"
          name="yearOfBuying"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <br />
       
        <textarea className="textarea textarea-warning" placeholder="description" name="description"></textarea>
        <br />
        <input
          type="submit"
          value="Add product"
          className="btn btn-outline"
          name=""
          id=""
        />
      </form>
    </div>
  );
};

export default AddProducts;

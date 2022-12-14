import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { getOrders } from '../../Api/GetOrders';
import { AuthContext } from '../../Contexts/AuthProvider';

const Modal = ({boking , setBoking}) => {
   const {user} = useContext(AuthContext)

 console.log(boking);

 const {categoryName , image,_id,mobileNumber,resaleingPrice , location , productName} = boking
 
 const handleBooking = e =>{
    e.preventDefault()
    console.log(e.target);
   //  const price = e.target.carPrice.value
   //  const carName = e.target.carName.value

   const meetingLocation = e.target.meetingLocation.value;
   const buyrPhoneNumber = e.target.buyrPhoneNumber.value;
  
    getOrders(user,resaleingPrice , productName , _id , image , meetingLocation , buyrPhoneNumber).then((data)=>{
       if(data.acknowledged){
         toast.success('order booked')
       }
        setBoking(null)
    })
 

 }


    return (
     <div>
        {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box text-black">
   
  <form onSubmit={handleBooking}>
  <label htmlFor="">Product Name</label>
  <br />
  <input type="text" placeholder="" name='carName' defaultValue={productName} readOnly className="input input-bordered input-warning w-full max-w-xs" />
  <br />
  <label htmlFor="">You have to pay</label>
  <br />
  <input type="text" placeholder="Type here" name='carPrice'  defaultValue={resaleingPrice} readOnly  className="input input-bordered input-warning w-full max-w-xs" /> 
  <br />
  <label htmlFor="">Your email</label>
  <br />
  <input type="text" readOnly placeholder="Type here"  defaultValue={user?.email} className="input input-bordered input-warning w-full max-w-xs" />
  <br />
  <label htmlFor="">Your name</label>
  <br />
  <input type="text"  placeholder="Type here" readOnly defaultValue={user?.displayName} className="input input-bordered input-warning w-full max-w-xs" />
  <br />
  <label htmlFor="">Meeting Location</label>
  <br />
  <input type="text" name='meetingLocation' placeholder="meeting address"  className="input input-bordered input-warning w-full max-w-xs" />
  <br />
  <label htmlFor="">Your  Phone Number</label>
  <br />
  <input type="text" placeholder="give your number"  name='buyrPhoneNumber' className="input input-bordered input-warning w-full max-w-xs" />
  <br />
   

   <input type="submit"  name="" value="Confirm order" className='btn btn-success mt-5' id="" />
  </form>


   
  </div>
</div>
     </div>
      
    );
};

export default Modal;
import React, { useContext } from 'react';
import { getOrders } from '../../Api/GetOrders';
import { AuthContext } from '../../Contexts/AuthProvider';

const Modal = ({boking , setBoking}) => {
   const {user} = useContext(AuthContext)

 const handleBooking = e =>{
    e.preventDefault()
    console.log(e.target);
    const price = e.target.carPrice.value
    const carName = e.target.carName.value
  
    getOrders(user , price , carName , boking._id).then((data)=>{
        console.log(data);
        setBoking(null)
    })
 

 }


    return (
     <div>
        {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
   
  <form onSubmit={handleBooking}>
  <input type="text" placeholder="Type here" name='carName' defaultValue={boking?.name} readOnly className="input input-bordered input-warning w-full max-w-xs" />
  <br />
  <input type="text" placeholder="Type here" name='carPrice' defaultValue={boking?.resellingPrice} readOnly  className="input input-bordered input-warning w-full max-w-xs" />
  <br />
  <input type="text" readOnly placeholder="Type here"  defaultValue={user?.email} className="input input-bordered input-warning w-full max-w-xs" />
  <br />
  <input type="text" placeholder="Type here" readOnly defaultValue={user?.displayName} className="input input-bordered input-warning w-full max-w-xs" />
  <br />
  <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
  <br />
   

   <input type="submit"  name="" id="" />
  </form>


   
  </div>
</div>
     </div>
      
    );
};

export default Modal;
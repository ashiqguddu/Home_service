import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Webservice from '../../axios/Webservice';
import URL from '../../axios/ApiUrls'
import { toast } from 'react-toastify';
import { useRef } from 'react';
// import {bookingSaveId} from '../../redux/slice-booking-save'



const Itemdetails = () => {

 const preson = useRef()
    const {id} = useParams();
    // console.log('params',id)
    const dispatch = useDispatch()

    const itemDetails = useSelector(state=> state.categorystore.value);
    const userid =useSelector(state=>state.loginstatus.value)
    // console.log(itemDetails)
    


    const fatchdata = async(ob) =>{
      // console.log(ob)
      var date = new Date
      var datess = date.toDateString()
      // var timess = date.toLocaleTimeString()

      const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

 
const formattedHours = hours.toString().padStart(2, '0');
const formattedMinutes = minutes.toString().padStart(2, '0');
const formattedSeconds = seconds.toString().padStart(2, '0');

 
const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    

      var std = {
        userId : userid.data.userid,
        itemId : ob.id,
        providedDate : datess,
        time: formattedTime,
        personQty:preson.current.value
      }
      // console.log('date',datess,'time',timess)
      console.log(std)

      const responce = await Webservice.postApiCall(URL.Save_BOOking,std)
      console.log('responce',responce.data)
      if (responce.data.status){


        // var result = responce.data
        // dispatch(bookingSaveId(result))


        toast.success("you are Booking is successfully added")
      }else{
        console.log('dispach not happend')
      }
    }




  return <>
      {/* <h1 className='text-center'>Item Details</h1> */}
      
        {itemDetails.map((ob,index)=> ob.id == id ?
        <div key={index}>
 <div className='container text-center ' style={{marginLeft:'400px' ,marginBottom:'5px'}}>
<div class="card bg-light " style={{width : '35rem' }}>
<img class="card-img-top" src={ob.itemImage} alt="Card image not found" width='250px' height='300px' style={{padding:'10px'}}/>
<div class="card-body">
<h3><i className="fa fa-rupee" style={{fontSize:"30px"}}> </i>{ob.price}</h3>
  <h5 class="card-title">{ob.itemName}</h5>
  <p class="card-text">{ob.description}</p>
  <div className='mt-2'>
  <label htmlFor="">Select Person Quantity</label>
  <select className='form-control col-3 m-auto text-center'  ref={preson}>
          <option value="1">1 person</option>
          <option value="2">2 person</option>
          <option value="3">3 person</option>
          <option value="4">4 person</option>
          <option value="5">5 person</option>
  </select>
  </div>
  
  <button class="btn btn-warning mt-3" onClick={()=>fatchdata(ob)}>Book now</button>
</div>
</div>
</div>
</div>
 
        : ''
       
             
            )}
    </>
    
    
  
}

export default Itemdetails;

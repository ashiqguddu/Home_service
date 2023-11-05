import React from 'react'
import { useEffect } from 'react';
import Webservice from '../../axios/Webservice'
import ApiUrls from '../../axios/ApiUrls'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Bookinguser } from '../../redux/slice-bookingUser';
 



const Booking = () => {
    const {id} = useParams()
    console.log("param",id)
    const dispatch = useDispatch()

    const list = useSelector(state => state.booking.value)
    console.log(list)


 

 



   // delete booking 
   const deletebooking = async(idd) => {
 

    const responce = Webservice.deleteApiCall(URL.Cancel_Boooking_user , idd)
    console.log(responce)

  }

    const fetchData = async ()=>{

   

  

        const responce = await Webservice.getApiCall(ApiUrls.List_BookingOFAdmin)
        

     

      if(responce.data.status==true){

    

        var book = responce.data.data.filter(ob=>ob.user.id==id)
    
        dispatch(Bookinguser(book))
        
        

  

        
      }else{
        alert('no booking yet')
      }
          
    }
    useEffect(() => {
      fetchData();
   
    }, []); 
  
    
    const renderTableRows = () => {

       
      if (Array.isArray(list) &&  list.length > 0) {
        return list.map((ob, index) => 



          <tr className='mt-9' key={index}>
            <td>{index + 1}</td>
            <td>{ob.itemId}</td>
            <td>{ob.items.itemName}</td>
            <td>{ob.providedDate}</td>
            <td>{ob.bookingStatus}</td>
            <td><img src={ob.items.itemImage} width={100} height={100}></img></td>
            <td><button className='btn btn-danger' onClick={()=>deletebooking(ob.itemId)}>Delete</button></td>
            </tr>
        );
      } else {
        console.log("No booking data available or userList1 is not an array.")
        return  <tr>
            <td colSpan="5">No booking data available.</td>
          </tr>
        ;
      }
    };
     

  return (
    <div className='container-fluid '>
       <h1 className='text-center ' style={{
        
        fontSize:'3rem',
        fontWeight:'900',
        background:'yellow'
       }} >Booking List</h1>

       

       <table className="table table-success table-striped text-center">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Item Id</th>
                        <th>Item Name</th>
                         <th>Date</th>
                        <th>Status</th>
                        <th>Item Image</th>
                    </tr>
                </thead>
                <tbody>
       {renderTableRows()}
                </tbody>
            </table>
      
    </div>
  )
}

export default Booking


  
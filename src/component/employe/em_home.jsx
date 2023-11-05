import { useSelector } from "react-redux";
import Webservice from "../../axios/Webservice";
import URL from '../../axios/ApiUrls'
import { catogoryslice } from "../../redux/slicecategory";
import { useDispatch } from "react-redux";
import {  useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeHome = ( ) =>{

    
  var dispatch = useDispatch();

  useEffect(()=>{
   const fatchdata  = async () =>{
 
     const response = await Webservice.getApiCall(URL.CategoryList)
 
     if(response.data.status === true){
         
        dispatch(catogoryslice(response.data.data))
     }
 
 
 }
 fatchdata()
 },[])
 
   const user = useSelector(state => state.categorystore.value)
  //  console.log(user.sort())

    return <>
     <div className="container">
      <h1 className="text-center">Select Services</h1>
    <div className="row">{user.map((ob,index)=>
    
      <div className="col-md-6 mt-2 card  border  border-5 border-warning-subtle rounded-5 " style={{ }} >
      <Link to={"/itemdetail/" + ob.id}>
          <img src={ob.itemImage} alt="image not found" height={200} width={10} className="card-img mt-3" />
          <div className="card-body text-center">
              <p className="card-text text-light text-dark  fw-bold">{ob.itemName}</p>
          </div>
      </Link>
  </div>
  
      )}
      
      </div>

    </div>
    </>
}

export default EmployeHome ; 
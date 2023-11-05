import { useRef } from "react";
import { useDispatch } from "react-redux";
import Webservice from "../../axios/Webservice";
import URL from '../../axios/ApiUrls'
import {setService} from '../../redux/sliceservice'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
   
import {addService} from '../../redux/sliceservice'
 
import { toast } from "react-toastify";


 

function ServiceList(){

    var dispatch = useDispatch();
    const ser=useRef();

    var submit= async (event)=>{   
      event.preventDefault()
      

      var std={
          serviceType:ser.current.value,
      }
       
       
          const response= await Webservice.postApiCall(URL.serviceType,std)
         
          if( response.data.status===true){
            console.log(response.data.data)
            dispatch(addService(response.data.data))
            
              event.target.reset()
            
              toast.success('data post')
              

          }else{
           alert('data not submit')
          }
      
  
          }
        
 
   

  const deleteServicefun = async (id) => {
 

    if (window.confirm("Do you Really delete this service")){
      const response= await Webservice.deleteApiCall(URL.DELETE_SERVICE+id)
      // console.log(response)


  }
}
  

    var servicedata = useSelector(state => state.serviceTypestate.value)
  
   

    // useEffect(()=>{

        const fatchdata = async () =>{

            const response= await Webservice.getApiCall(URL.serviceList)
           
            const result = response.data;
         
            if ( result.status===true){
                dispatch(setService(result.data))

            }else{
                
                toast.error('service not found or data can not dispatch')
            }

            // console.log('table data  of service type', servicedata)
         


        };
        fatchdata()

    // },[])


 

     
      
     
    return (
      <>
      <div className="container-fluid">
        <div >
          <h1 className="text-center">serviceType</h1>
        </div>
        <div className="row " >
          <form onSubmit={submit}>
            
              <div class="col-6 " style={{margin:'auto'}}>
                <input
                  className="form-control"
                  placeholder="enter service here"
                  ref={ser}
                ></input>
              </div>
              <div class="col-4 mt-4" style={{margin:'auto'}}>
                <button className="btn btn-dark form-control" type="submit">
                  Add
                </button>
              </div>
            
          </form>
        </div>

        <table className="table table-striped mt-3">
          <thead className="table-dark">
            <tr>
              <th>S.NO</th>
              <th>sercive id </th>
              <th>Servicess</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {servicedata.map((ob, index) => 
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ob.id}</td>
                <td>{ob.serviceType}</td>
                <td><button className="btn btn-danger" onClick={()=>deleteServicefun(ob.id)}>Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </>
    );
}


export default  ServiceList;
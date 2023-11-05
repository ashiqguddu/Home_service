 import React from 'react'
import { useRef } from 'react';
 import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Webservice from '../../axios/Webservice';
import URL from '../../axios/ApiUrls'
import {Employeaction} from '../../redux/sliceemploye'
import { useSelector } from 'react-redux';
import { Toast } from 'bootstrap';
 





function Employ() {

    const dispatch = useDispatch();
        
    const nam = useRef();
    const num=useRef();
    const email  = useRef();
    const jobprofile = useRef();
    const description = useRef();
    const city = useRef();
    const state=useRef();



    const listdata = useSelector(state => state.employestate.value)  
       
 


    var getValu = async (event) =>{
event.preventDefault()
        var std = {
            emp_name:nam.current.value,
            emp_email:email.current.value,
            emp_mob:num.current.value,
            job_profile:jobprofile.current.value,
            description:description.current.value,
            
            city:city.current.value,
            state:state.current.value,
        }

        const responce = await Webservice.postApiCall(URL.EmplyeSave,std)
        console.log(responce)


    }



    useEffect(()=>{

        const fatchdata = async () =>{
             
            const responce = await Webservice.getApiCall(URL.EmplyeeList)

            if(responce.data.status===true){

              dispatch(Employeaction(responce.data.data))
              
             
            }else{
              Toast.error('Data can not fatched');
              alert('data not come ')
              
            }
        }
        fatchdata()
    },[])

  return (
    <div>
      
<div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '88vh' }}>
      <div style={{ maxWidth: '600px', padding: '20px', background: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Employee Register Page</h1>
        <form onSubmit={getValu}>
          <div className="row">
            <div className="col-md-6">
              <input
                ref={nam}
                className="form-control"
                required
                type="text"
                placeholder="Enter your name"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-6 mt-">
              <input
                ref={num}
                className="form-control"
                required
                type="number"
                placeholder="Enter your Number"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            <div className="col-md-6 mt-3">
              <input
                className="form-control"
                ref={email}
                required
                type="email"
                placeholder="Enter Your Email"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-6 mt-3">
              <input
                className="form-control"
                ref={jobprofile}
                type="text"
                placeholder="Job Profile"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-6 mt-3">
              <textarea
                className="form-control"
                ref={description}
                rows={2}
                required
                type="text"
                placeholder="Enter Description"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-6 mt-3">
              <input
                className="form-control"
                ref={city}
                required
                type="text"
                placeholder="Enter city"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-6 mt-3">
              <input
                className="form-control"
                ref={state}
                required
                type="text"
                placeholder="Enter state"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-6 mt-3">
              <button
                className="btn btn-outline-success btn-lg"
                type="submit"
                style={{ backgroundColor: '#007BFF', color: '#fff', padding: '14px 32px', fontSize: '16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div> 


    <table className="table mt-5 text-center ">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Employ Name</th>
                         
                        <th>Employ Email</th>
                        
                        
                        <th>City</th>
                         
                    </tr>
                </thead>
                <tbody>
    {listdata.map((ob, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{ob.emp_name}</td>
            
            <td>{ob.emp_email}</td>
          
            
            <td>{ob.city}</td>
             
        </tr>
    ))}
</tbody>
            </table>



    </div>
  )
}

export default Employ;


import React from "react";
import { useRef } from "react";
import Webservice from "../axios/Webservice";
import URL from '../axios/ApiUrls'
import "./style-rg.css"

 

function Register(){

    const nam=useRef();
    const  num =useRef();
    const email=useRef();
    const pass=useRef();
    const conpass=useRef();
    const address = useRef();
    const city=useRef();
    const state=useRef()
    // const type = useRef()



    var getValu= async(event)=>{

        event.preventDefault()

        const std= {
            name: nam.current.value,
            email: email.current.value,
            mobile: num.current.value,
            password: pass.current.value,
            cpassword:conpass.current.value,
            address: address.current.value,
            city: city.current.value,
            state: state.current.value,
            // type : type.current.value
         }
         console.log( 'std is: ' , std)
         const response = await Webservice.postApiCall(URL.USER_REGISTRATION,std)
         console.log(response.data)
        const result =response.data

        if(result.status===true){
            alert('register successfully')
            event.target.reset()
        }else{
            alert(`Error occured ${result.error}`)
        }
    }

    return<>
      




    
   


   
    

     <div className="containerrig mt-2" style={{margin:'auto'}}>
    <div className="title">Registration</div>
    <div className="content">
      <form action="#" onSubmit={getValu}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" ref={nam}  placeholder="Enter your name" required/>
          </div>
           
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text"  ref={email} placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text"   ref={num} placeholder="Enter your number" required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text"  ref={pass} placeholder="Enter your password" required/>
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" ref={conpass} placeholder="Confirm password" required/>
          </div>

          <div className="input-box">
            <span className="details">Address</span>
            <input type="text"  ref={address} placeholder="Enter your Address" required/>
          </div>
          <div className="input-box">
            <span className="details">City</span>
            <input type="text" ref={city}  placeholder="Enter your city" required/>
          </div>
          <div className="input-box">
            <span className="details">State</span>
            <input type="text"  ref={state} placeholder="Enter your state" required/>
          </div>
          {/* <div className="input-box">
          <span className="details">Type</span>
            <select ref={type} className="form-control">
              <option value="">Select Type</option>
              <option value="User">User</option>
              <option value='Admin'>Admin</option>
            </select>
           </div> */}
        </div>
        {/* <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label for="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label for="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div> */}
        <div className="button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  </div> 
  <br></br>  


    </>
}

export default Register;
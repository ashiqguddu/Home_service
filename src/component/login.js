import { useRef } from "react";
import { useDispatch } from "react-redux";
import Webservice from "../axios/Webservice";
import URL from '../axios/ApiUrls'
import { useNavigate } from "react-router-dom";
import { loginstatus } from "../redux/slicelogin";
import id from '../redux/slice-store-Id'
 
function Login() {
    const dispatch=useDispatch();
    let navigate=useNavigate()

    var emlogbox=useRef()
    var passlogbox=useRef()

    var log=async (event)=>{
        event.preventDefault()

        var obj={
            email:emlogbox.current.value,
            password:passlogbox.current.value
        }
        

        

        const response = await Webservice.postApiCall(URL.USER_LOGIN,obj)
        const result =response.data
        // console.log(result.data.userid)

        
        if (result.status === true && result.data.userid == 126){
            alert ('login successfully')
            // console.log(result.data.userid)
            dispatch(loginstatus(result))
            // dispatch(id(result.data.userid))
            navigate('/home')
            
        }else if( result.status === true ){
          dispatch(loginstatus(result))
            navigate("/ehome")
            // dispatch(id(result.data.userid))
        }
 
      
    }


    return <>


    

 

 
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '88.3vh',
        background: 'white',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          background: '#fff',
          boxShadow: '3px 2px 10px rgba(0, 0, 0, 0.5)',
          maxWidth: '400px',
          minWidth: '300px',
        }}
        onSubmit={log}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
        <input
          type="email"
          ref={emlogbox}
           className="form-control"
          placeholder="Email"
          style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          ref={passlogbox}
          className="form-control"
          placeholder="Password"
          style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          className="btn btn-dark"          
        >
          Login
        </button>
      </form>
    </div>
 
    </>
  
  
   }
  
  export default Login;



  
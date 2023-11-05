
import { Link, Routes, Route } from "react-router-dom";
import Register from "../src/component/register";
import Login from "./component/login";
 import UserList from "./component/addmistration/user-list";
 import ServiceList from "./component/addmistration/service-type-List";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import Home from "./component/addmistration/Home";
import Aboutus from "./component/aboutUs";
import Employ from "./component/addmistration/employ";
import Category from "./component/addmistration/category";
import ContactUs from "./component/addmistration/ContactUs";
import Itemdetails from "./component/employe/Item-details";
import EmployeHome from './component/employe/em_home';
import Booking from "./component/employe/Booking";

 
 

function Menu (){

  var loginstatus=useSelector(state=>state.loginstatus.value);
  // var total = useSelector(state=>state.Carts.value)
  // console.log(total)
  // console.log(loginstatus.data)
  // const objectState = useSelector((state) => state.Carts.object);
  
  //  console.log(objectState)
    

  // var userlist = useSelector(state => )
  

   return <>


   
  { loginstatus.status===false ?
  
   <header className="header_section">
     
   <div className="header_bottom">
     <div className="container-fluid">
       <nav className="navbar navbar-expand-lg custom_nav-container ">
         <a className="navbar-brand" href="">
           <img src="images/logo.png" alt=""/>
         </a>
         

         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className=""> </span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav  ">
             {/* <li className="nav-item active">
               <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
             </li> */}
             <li className="nav-item">
                <Link className="nav-link" to='' >Login</Link> 
                
             </li>
             <li className="nav-item">
               <Link className="nav-link" to='/register' >Register</Link>
               
             </li>
           
             <li className="nav-item">
                <Link  className="nav-link" to='/aboutus'>About Us</Link>
             </li> 

             <li className="nav-item">
                <Link  className="nav-link" to='/contactus'>Contact Us</Link>
             </li> 

                

             
             
             <form className="form-inline">
               <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                 <i className="fa fa-search" aria-hidden="true"></i>
               </button>
             </form>
           </ul>
           <div className="quote_btn-container">
             <a href="" className="quote_btn">
               Hello Users
             </a>
           </div>
         </div>
       </nav>
     </div>
   </div>
 </header>
//  (false)? print :() " " 
 
  : ( loginstatus.data.userid == 126 ) ?
   <header className="header_section">
   
    <div className="header_bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="#">
            {/* <img src="images/logo.png" alt=""/> */}
            
          </a>
           

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                 <Link className="nav-link" to="/home" >Home 
                <span className="sr-only">(current)</span>
                </Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/userlist" >User List</Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to='/service' >Service Type</Link> 
              </li>
            
             

              <li className="nav-item">
                 <Link  className="nav-link" to='/employ'>Employe</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/category'>Category</Link>
              </li>  

             
             
              
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>


  
            </ul>
            {/* <div className="quote_btn-container">
              <Link  to=" " className="quote_btn">
                LogOut
              </Link>
            </div> */}
          </div>
        </nav>
      </div>
    </div>
  </header>


   :
   
   <header className="header_section">
     
   <div className="header_bottom">
     <div className="container-fluid">
       <nav className="navbar navbar-expand-lg custom_nav-container ">
         <a className="navbar-brand" href="">
           <img src="images/logo.png" alt=""/>
            {/* <a href="#">Home<span>Service</span></a>  */}
         </a>
         
         

         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className=""> </span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav  ">
             {/* <li className="nav-item active">
               <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
             </li> */}
             <li className="nav-item">
                <Link className="nav-link" to="/ehome" >Home</Link> 
                
             </li>
{/*    <Link to={"/itemdetail/" + ob.id}> */}
             <li className="nav-item">
                 <Link  className="nav-link" to={"/booking/"+ loginstatus.data.userid}>Booking List</Link>
              </li>

             <li className="nav-item">
                 <Link  className="nav-link" to='/aboutus'>About Us</Link>
              </li>

             <li className="nav-item">
                <Link  className="nav-link" to='/contactus'>Contact Us</Link>
             </li> 

            

                

             
             
             <form className="form-inline">
               <button className="btn  my-2 my-sm-0 nav_search-btn" type="">
                 <i className="fa fa-search" aria-hidden="#" ></i>
               </button>
             </form>

      
           </ul>
                              {/* card button */} 
                              <button  className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
              <svg  style={{marginLeft:'20px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  
</svg>   
                </button>
                <span style={{fontSize:'14px',marginTop:'15px',marginRight:'6px',color:'red'}}>(0)</span>
           {/* <div className="quote_btn-container">
             <a href="" className="quote_btn">
               Hello Users
             </a>
           </div> */}
         </div>
       </nav>
     </div>
   </div>
 </header>
}

 
 

      

 <Routes>
  <Route path="/register" element={<Register></Register>}> </Route>
  <Route path="" element={<Login></Login>}></Route>
  <Route path="/aboutus" element={<Aboutus/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/userlist" element={<UserList/>}></Route>
  <Route path='/service' element={<ServiceList/>}></Route>
  <Route path="/employ" element={<Employ></Employ>}></Route>
  <Route path='/category' element={<Category/>}> </Route>
  <Route path='/contactus' element={<ContactUs/>}></Route>
  <Route path='/itemdetail/:id' element={<Itemdetails></Itemdetails>}></Route>
  <Route path="/ehome" element={<EmployeHome></EmployeHome>}></Route>
  <Route path='/booking/:id' element={<Booking/>}></Route>
 </Routes>
    
   
   </>
}

export default Menu;

import Menu from "./manu";
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>

      <Menu></Menu>
      <ToastContainer position="top-center"/>
      <section class="info_section ">

<div class="container">
  <div class="contact_nav">
    <a href="#">
      <i class="fa fa-phone" aria-hidden="true"></i>
      <span>
        Call : +01 123455678990
      </span>
    </a>
    <a href="#">
      <i class="fa fa-envelope" aria-hidden="true"></i>
      <span>
        Email : home43.com
      </span>
    </a>
    <a href="#">
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <span>
        Location
      </span>
    </a>
  </div>

  <div class="info_top ">
    <div class="row info_main_row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="info_links">
          <h4>
            QUICK LINKS
          </h4>
          <div class="info_links_menu">
            <a class="" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="" href="#">Services</a>
            <a class="" href="#"> About</a>
            <a class="" href="#">Project</a>
            <a class="" href="#">Testimonial</a>
            <a class="" href="#">Contact Us</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 mx-auto">
        <div class="info_post">
          <h5>
            INSTAGRAM FEEDS
          </h5>
          <div class="post_box">
            <div class="img-box">
              <img src="images/instagram.jpg" alt=""/>
            </div>
            <div class="img-box">
              <img src="images/instagram.jpg" alt=""/>
            </div>
            <div class="img-box">
              <img src="images/instagram.jpg" alt=""/>
            </div>
            <div class="img-box">
              <img src="images/instagram.jpg" alt=""/>
            </div>
            <div class="img-box">
              <img src="images/instagram.jpg" alt=""/>
            </div>
            <div class="img-box">
              <img src="images/instagram.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="info_form">
          <h4>
            SIGN UP TO OUR NEWSLETTER
          </h4>
          <form  action="">
            <input style={{width:'342px'}} type="text" placeholder="Enter Your Email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="info_bottom">
    <div class="row">
      <div class="col-md-2">
        <div class="info_logo">
          <a href="#">
            <img src="images/logo2.png" alt=""/>
          </a>
        </div>
      </div>
      <div class="col-md-4 ml-auto">
        <div class="social_box">
          <a href="#">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

  </div>
</div>
</section>

<footer class="footer_section">
<div class="container">
  <p>
    &copy; <span id="displayYear"></span> All Rights Reserved By Ashik
     
  </p>
</div>
</footer>  

    </>
  );
}

export default App;

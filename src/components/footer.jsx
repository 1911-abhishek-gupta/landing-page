import React from "react";

function Footer(){
    return(
        <div className="footer">
            <div className="row">
            <div className="col-lg-3 footer-box">
            <a className="navbar-brand Brand" href="#title"><i class="fa-solid fa-code "> </i>Codeext</a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
<div className="row">
    <div className="col-lg-3">
    <i class="fa-brands fa-twitter"></i>
    </div>
    <div className="col-lg-3">
    <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="col-lg-3">
        <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="col-lg-3">
        <i class="fa-brands fa-facebook"></i>
        </div>
</div>

            </div>
            <div className="col-lg-3 footer-box">
                <h5>Resources</h5>
               <a href="#services" className="footerlink">services</a><br></br>
               <a href="#pricing" className="footerlink">pricing</a><br></br>
               <a href="#testimonial" className="footerlink">Testimonials</a><br></br>
               <a href="#blog" className="footerlink">Blog</a><br></br>

            </div>

            <div className="col-lg-3 footer-box">
                <h5>Usefull tags</h5>
               <a className="footerlink" href="">Terms of services</a><br></br>
               <a className="footerlink" href="">Privacy policy</a><br></br>
               <a className="footerlink" href="">Cookie policy</a><br></br>
               <a className="footerlink" href="">contact Us</a><br></br>

            </div>

            <div className="col-lg-3 footer-box">
                <h5>Newsletter</h5>
               <p>Sign up and receive the latest news via email</p>
               <form><input placeholder="Email address"></input>
               <button type="button" class="btn btn-primary">send</button>
               </form>
               
               

            </div>



            </div>
            <hr style={{widht:"80%",height:"3px",color:"white"}}></hr>
            <p style={{textAlign:"center"}}>Copyright 2021 the codeext All rights reserved</p>

        </div>
    )
    
}

export default Footer;
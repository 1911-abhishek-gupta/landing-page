
import React from "react";


function TestimonialCard(props){
  return(  <div className="col-lg-4 test-box">
        <p style={{}}>
        <i class="fa-solid fa-quote-left"></i>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ...
        </p>
        <div className="row"> 
        <div className="col-lg-6"><img className="test-Img" src={props.img} alt=""></img></div>
       <div className="col-lg-6"> <h6>{props.name}</h6>
        <h7>{props.des}</h7></div></div>
       

    </div>)
}

export default TestimonialCard;
